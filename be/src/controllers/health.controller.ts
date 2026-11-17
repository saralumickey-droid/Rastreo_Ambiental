import type { Request, Response } from "express";
import { pool } from "../config/database.js";

export const healthCheck = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({
      success: true,
      message: "Servidor y base de datos funcionando correctamente.",
      timestamp: new Date().toISOString(),
      database: "connected",
    });
  } catch (error) {
    console.error("Error en health check:", error);

    res.status(503).json({
      success: false,
      message: "El servidor está activo, pero la base de datos no está disponible.",
      database: "disconnected",
    });
  }
};