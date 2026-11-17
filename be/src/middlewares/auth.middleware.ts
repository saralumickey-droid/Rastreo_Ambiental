import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { env } from "../config/env.js";
import { findUserById } from "../models/user.model.js";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token =
    req.cookies?.token ||
    req.headers.authorization?.replace(/^Bearer\s+/i, "");

  if (!token) {
    res.status(401).json({
      success: false,
      message: "No hay una sesión activa.",
    });
    return;
  }

  let userId: number;

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);

    if (
      typeof decoded === "string" ||
      !decoded.sub
    ) {
      res.status(401).json({
        success: false,
        message: "El token no es válido.",
      });
      return;
    }

    userId = Number(decoded.sub);

    if (!Number.isSafeInteger(userId) || userId <= 0) {
      res.status(401).json({
        success: false,
        message: "El identificador de sesión no es válido.",
      });
      return;
    }
  } catch {
    res.status(401).json({
      success: false,
      message: "La sesión ha expirado o no es válida.",
    });
    return;
  }

  try {
    const user = await findUserById(userId);

    if (!user) {
      res.status(401).json({
        success: false,
        message: "El usuario de esta sesión ya no existe.",
      });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
