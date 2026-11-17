import type { Request, Response, NextFunction } from "express";
import { pool } from "../config/database.js";
import {
  findAllUsers,
  updateUser,
  deleteUser,
} from "../models/user.model.js";
import { updateUserSchema } from "../schemas/user.schema.js";

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const usuarios = await findAllUsers();

    res.status(200).json({
      success: true,
      message: "Usuarios consultados correctamente.",
      total: usuarios.length,
      usuarios,
    });
  } catch (error) {
    next(error);
  }
};

export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUsuario = Number(req.params.id);

  if (!Number.isSafeInteger(idUsuario) || idUsuario <= 0) {
    res.status(400).json({
      success: false,
      message: "El identificador del usuario no es válido.",
    });
    return;
  }

  const validation = updateUserSchema.safeParse(req.body);

  if (!validation.success) {
    res.status(400).json({
      success: false,
      message: "Los datos del usuario no son válidos.",
      errors: validation.error.issues,
    });
    return;
  }

  try {
    const usuario = await updateUser(idUsuario, validation.data);

    if (!usuario) {
      res.status(404).json({
        success: false,
        message: "El usuario no existe.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Usuario actualizado correctamente.",
      usuario,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "23505"
    ) {
      res.status(409).json({
        success: false,
        message: "El correo electrónico ya está registrado.",
      });
      return;
    }

    next(error);
  }
};



export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUsuario = Number(req.params.id);

  if (!Number.isSafeInteger(idUsuario) || idUsuario <= 0) {
    res.status(400).json({
      success: false,
      message: "El identificador del usuario no es válido.",
    });
    return;
  }

  // Evitar que el administrador elimine su propia cuenta.
  if (req.user?.id_usuario === idUsuario) {
    res.status(403).json({
      success: false,
      message: "No puedes eliminar tu propia cuenta.",
    });
    return;
  }

  try {
    const result = await deleteUser(idUsuario);

    if (!result.deleted) {
      const messages = {
        not_found: {
          status: 404,
          message: "El usuario no existe.",
        },
        principal_admin: {
          status: 403,
          message: "No se puede eliminar al administrador principal.",
        },
        last_admin: {
          status: 403,
          message: "No se puede eliminar al último administrador.",
        },
        has_history: {
          status: 409,
          message:
            "No se puede eliminar este usuario porque tiene registros históricos asociados.",
        },
      };

      const response = messages[result.reason];

      res.status(response.status).json({
        success: false,
        message: response.message,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Usuario eliminado correctamente.",
    });
  } catch (error) {
    next(error);
  }
};
