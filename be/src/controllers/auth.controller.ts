import type { Request, Response } from "express";
import jwt, { type SignOptions } from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { env } from "../config/env.js";
import { loginSchema } from "../schemas/auth.schema.js";
import { registerSchema } from "../schemas/register.schema.js";
import {
  loginService,
  registerService,
} from "../services/auth.service.js";

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

const generateToken = (user: {
  id_usuario: number;
  tipo_usuario: string;
}): string => {
  return jwt.sign(
    {
      tipo_usuario: user.tipo_usuario,
    },
    env.JWT_SECRET,
    {
      subject: String(user.id_usuario),
      expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
    }
  );
};

// Registro de usuarios
export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
  const validation = registerSchema.safeParse(req.body);

  if (!validation.success) {
    res.status(400).json({
      success: false,
      message: "Los datos del formulario no son válidos.",
      errors: validation.error.issues,
    });
    return;
  }

  try {
    const user = await registerService(validation.data);

    res.status(201).json({
      success: true,
      message: "Usuario registrado correctamente.",
      user,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("administradores")
    ) {
      res.status(403).json({
        success: false,
        message: error.message,
      });
      return;
    }

    if (
      error instanceof Error &&
      error.message.includes("Ya existe")
    ) {
      res.status(409).json({
        success: false,
        message: error.message,
      });
      return;
    }

    console.error("Error en el registro:", error);

    res.status(500).json({
      success: false,
      message: "No fue posible completar el registro.",
    });
  }
};

// Inicio de sesión
export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  const validation = loginSchema.safeParse(req.body);

  if (!validation.success) {
    res.status(400).json({
      success: false,
      message: "Ingresa un correo y una contraseña válidos.",
    });
    return;
  }

  try {
    const user = await loginService(validation.data);
    const token = generateToken(user);

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Inicio de sesión exitoso.",
      user,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Credenciales incorrectas."
    ) {
      res.status(401).json({
        success: false,
        message: "Correo o contraseña incorrectos.",
      });
      return;
    }

    console.error("Error en el inicio de sesión:", error);

    res.status(500).json({
      success: false,
      message: "No fue posible iniciar sesión.",
    });
  }
};

// Cierre de sesión
export const logout = (
  _req: Request,
  res: Response
): void => {
  res.clearCookie("token", cookieOptions);

  res.status(200).json({
    success: true,
    message: "Sesión cerrada correctamente.",
  });
};

// Consultar usuario de la sesión activa
export const getCurrentUser = (
  req: Request,
  res: Response
): void => {
  if (!req.user) {
    res.status(401).json({
      success: false,
      message: "No hay una sesión activa.",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "Sesión verificada correctamente.",
    user: req.user,
  });
};
