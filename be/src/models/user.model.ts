import { pool } from "../config/database.js";
import type { RegisterInput } from "../schemas/register.schema.js";
import type { UpdateUserInput } from "../schemas/user.schema.js";

export interface UserRecord {
  id_usuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  tipo_usuario: string;
}

export interface PublicUser {
  id_usuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  tipo_usuario: string;
}

export const findUserByEmail = async (
  correo: string
): Promise<UserRecord | null> => {
  const result = await pool.query<UserRecord>(
    `SELECT
      id_usuario,
      nombre,
      apellido,
      correo,
      password,
      tipo_usuario
    FROM usuario
    WHERE correo = $1
    LIMIT 1`,
    [correo]
  );

  return result.rows[0] ?? null;
};

export const findUserById = async (
  id_usuario: number
): Promise<PublicUser | null> => {
  const result = await pool.query<PublicUser>(
    `SELECT
      id_usuario,
      nombre,
      apellido,
      correo,
      tipo_usuario
    FROM usuario
    WHERE id_usuario = $1
    LIMIT 1`,
    [id_usuario]
  );

  return result.rows[0] ?? null;
};

export const createUser = async (
  input: RegisterInput,
  hashedPassword: string
): Promise<PublicUser> => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const userResult = await client.query<PublicUser>(
      `INSERT INTO usuario (
        nombre,
        apellido,
        correo,
        password,
        telefono,
        direccion,
        tipo_usuario
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING
        id_usuario,
        nombre,
        apellido,
        correo,
        tipo_usuario`,
      [
        input.nombre,
        input.apellido,
        input.correo,
        hashedPassword,
        input.telefono || null,
        input.direccion || null,
        input.tipo_usuario,
      ]
    );

    const user = userResult.rows[0];

    if (!user) {
      throw new Error("No fue posible crear el usuario.");
    }

    switch (input.tipo_usuario) {
      case "ciudadano":
        await client.query(
          "INSERT INTO ciudadano (id_usuario) VALUES ($1)",
          [user.id_usuario]
        );
        break;

      case "funcionario":
        await client.query(
          `INSERT INTO funcionario (
            id_usuario,
            cargo,
            dependencia
          ) VALUES ($1, $2, $3)`,
          [user.id_usuario, input.cargo, input.dependencia]
        );
        break;

      case "administrador":
        await client.query(
          `INSERT INTO administrador (
            id_usuario,
            nivel_acceso
          ) VALUES ($1, $2)`,
          [user.id_usuario, input.nivel_acceso]
        );
        break;

      case "conductor":
        await client.query(
          `INSERT INTO conductor (
            id_usuario,
            num_documento,
            licencia,
            vehiculo_asignado
          ) VALUES ($1, $2, $3, $4)`,
          [
            user.id_usuario,
            input.num_documento,
            input.licencia,
            input.vehiculo_asignado,
          ]
        );
        break;
    }

    await client.query("COMMIT");

    return user;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};


export interface AdminUser {
  id_usuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string | null;
  direccion: string | null;
  tipo_usuario: string;
  fecha_registro: Date;
}


export const findAllUsers = async (): Promise<AdminUser[]> => {
  const result = await pool.query<AdminUser>(
    `SELECT
      id_usuario,
      nombre,
      apellido,
      correo,
      telefono,
      direccion,
      tipo_usuario,
      fecha_registro
    FROM usuario
    ORDER BY id_usuario DESC`
  );

  return result.rows;
};

export const updateUser = async (
  id_usuario: number,
  input: UpdateUserInput
): Promise<AdminUser | null> => {
  const result = await pool.query<AdminUser>(
    `UPDATE usuario
     SET
       nombre = $1,
       apellido = $2,
       correo = $3,
       telefono = $4,
       direccion = $5
     WHERE id_usuario = $6
     RETURNING
       id_usuario,
       nombre,
       apellido,
       correo,
       telefono,
       direccion,
       tipo_usuario,
       fecha_registro`,
    [
      input.nombre,
      input.apellido,
      input.correo,
      input.telefono || null,
      input.direccion || null,
      id_usuario,
    ]
  );

  return result.rows[0] ?? null;
};


export type DeleteUserResult =
  | { deleted: true }
  | {
      deleted: false;
      reason:
        | "not_found"
        | "principal_admin"
        | "last_admin"
        | "has_history";
    };

export const deleteUser = async (
  id_usuario: number
): Promise<DeleteUserResult> => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Bloquear el usuario mientras se realiza la operación.
    const userResult = await client.query(
      `SELECT id_usuario, tipo_usuario
       FROM usuario
       WHERE id_usuario = $1
       FOR UPDATE`,
      [id_usuario]
    );

    if (userResult.rowCount === 0) {
      await client.query("ROLLBACK");
      return { deleted: false, reason: "not_found" };
    }

    const tipoUsuario = userResult.rows[0].tipo_usuario;

    // Proteger al administrador principal.
    if (tipoUsuario === "administrador") {
      const adminResult = await client.query(
        `SELECT nivel_acceso
         FROM administrador
         WHERE id_usuario = $1`,
        [id_usuario]
      );

      if (adminResult.rows[0]?.nivel_acceso === "super") {
        await client.query("ROLLBACK");
        return { deleted: false, reason: "principal_admin" };
      }

      // Bloquear los registros administrativos existentes.
      const admins = await client.query(
        `SELECT id_usuario
         FROM administrador
         ORDER BY id_usuario
         FOR UPDATE`
      );

      if (admins.rowCount !== null && admins.rowCount <= 1) {
        await client.query("ROLLBACK");
        return { deleted: false, reason: "last_admin" };
      }
    }

    // Conservar los registros históricos asociados.
    const historyResult = await client.query(
      `SELECT
        EXISTS(SELECT 1 FROM reporte WHERE id_usuario = $1)
        OR EXISTS(SELECT 1 FROM notificacion WHERE id_usuario = $1)
        OR EXISTS(SELECT 1 FROM consulta_ruta WHERE id_usuario = $1)
        OR EXISTS(SELECT 1 FROM incidente WHERE id_usuario = $1)
        OR EXISTS(SELECT 1 FROM usuario_novedad WHERE id_usuario = $1)
        AS has_history`,
      [id_usuario]
    );

    if (historyResult.rows[0].has_history) {
      await client.query("ROLLBACK");
      return { deleted: false, reason: "has_history" };
    }

    await client.query(
      `DELETE FROM usuario WHERE id_usuario = $1`,
      [id_usuario]
    );

    await client.query("COMMIT");

    return { deleted: true };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};
