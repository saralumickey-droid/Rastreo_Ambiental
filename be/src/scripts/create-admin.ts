import bcrypt from "bcryptjs";
import { pool } from "../config/database.js";
import { env } from "../config/env.js";

const createAdmin = async (): Promise<void> => {
  const client = await pool.connect();

  try {
    const nombre = "Administrador";
    const apellido = "Principal";
    const correo = "admin@rastreoambiental.com";
    const password = process.env.ADMIN_INITIAL_PASSWORD;

    if (!password || password.length < 12) {
      throw new Error(
        "Define ADMIN_INITIAL_PASSWORD en el entorno con mínimo 12 caracteres."
      );
    }

    await client.query("BEGIN");

    const existing = await client.query(
      "SELECT id_usuario FROM usuario WHERE correo = $1",
      [correo]
    );

    if (existing.rowCount && existing.rowCount > 0) {
      throw new Error("La cuenta administrativa inicial ya existe.");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await client.query(
      `INSERT INTO usuario (
        nombre,
        apellido,
        correo,
        password,
        tipo_usuario
      )
      VALUES ($1, $2, $3, $4, 'administrador')
      RETURNING id_usuario`,
      [nombre, apellido, correo, hashedPassword]
    );

    const idUsuario = result.rows[0].id_usuario;

    await client.query(
      `INSERT INTO administrador (
        id_usuario,
        nivel_acceso
      )
      VALUES ($1, 'super')`,
      [idUsuario]
    );

    await client.query("COMMIT");

    console.log("Administrador inicial creado correctamente.");
    console.log("Correo:", correo);
    console.log("Contraseña: la definida en ADMIN_INITIAL_PASSWORD");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
};

createAdmin().catch((error) => {
  console.error("No fue posible crear el administrador:", error);
  process.exitCode = 1;
});
