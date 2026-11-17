import { Router } from "express";

import { healthCheck } from "../controllers/health.controller.js";
import {
  getUsers,
  editUser,
  removeUser,
} from "../controllers/user.controller.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

import {
  login,
  logout,
  register,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// Estado del servidor y PostgreSQL
router.get("/health", healthCheck);

// Autenticación
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Verificar sesión activa
router.get("/me", authenticateToken, getCurrentUser);

// Gestión de usuarios: acceso exclusivo del administrador
router.get(
  "/usuarios",
  authenticateToken,
  authorizeRoles("administrador"),
  getUsers
);

router.put(
  "/usuarios/:id",
  authenticateToken,
  authorizeRoles("administrador"),
  editUser
);

router.delete(
  "/usuarios/:id",
  authenticateToken,
  authorizeRoles("administrador"),
  removeUser
);

export default router;

