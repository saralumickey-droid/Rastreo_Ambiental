import type { Request, Response, NextFunction } from "express";

type UserRole =
  | "administrador"
  | "funcionario"
  | "ciudadano"
  | "conductor";

export const authorizeRoles = (...allowedRoles: UserRole[]) => {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Debes iniciar sesión para acceder.",
      });
      return;
    }

    if (!allowedRoles.includes(req.user.tipo_usuario as UserRole)) {
      res.status(403).json({
        success: false,
        message: "No tienes permisos para realizar esta acción.",
      });
      return;
    }

    next();
  };
};
