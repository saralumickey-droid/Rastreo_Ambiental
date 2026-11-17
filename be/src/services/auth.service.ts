import bcrypt from "bcryptjs";
import {
  createUser,
  findUserByEmail,
  type PublicUser,
} from "../models/user.model.js";
import type { LoginInput } from "../schemas/auth.schema.js";
import type { RegisterInput } from "../schemas/register.schema.js";

export const registerService = async (
  input: RegisterInput
): Promise<PublicUser> => {
  // Evitar que una persona cree una cuenta de administrador públicamente.
  if (input.tipo_usuario === "administrador") {
    throw new Error(
      "No está permitido registrar administradores desde el formulario público."
    );
  }

  const existingUser = await findUserByEmail(input.correo);

  if (existingUser) {
    throw new Error("Ya existe una cuenta registrada con ese correo.");
  }

  // Encriptar la contraseña antes de guardarla.
  const hashedPassword = await bcrypt.hash(input.password, 12);

  return createUser(input, hashedPassword);
};

export const loginService = async (
  input: LoginInput
): Promise<PublicUser> => {
  const user = await findUserByEmail(input.correo);

  // Usar el mismo mensaje para correo o contraseña incorrectos.
  if (!user) {
    throw new Error("Credenciales incorrectas.");
  }

  const passwordIsValid = await bcrypt.compare(
    input.password,
    user.password
  );

  if (!passwordIsValid) {
    throw new Error("Credenciales incorrectas.");
  }

  return {
    id_usuario: user.id_usuario,
    nombre: user.nombre,
    apellido: user.apellido,
    correo: user.correo,
    tipo_usuario: user.tipo_usuario,
  };
};
