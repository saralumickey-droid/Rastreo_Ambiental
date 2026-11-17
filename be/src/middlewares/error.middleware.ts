import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error("Error del servidor:", error);

  res.status(500).json({
    success: false,
    message: "Ha ocurrido un error interno en el servidor.",
  });
};