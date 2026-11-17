import { z } from "zod";

const baseRegisterSchema = z.object({
  nombre: z.string().trim().min(2).max(100),
  apellido: z.string().trim().min(2).max(100),
  correo: z.string().trim().email().max(150),
  password: z.string().min(8).max(100),
  telefono: z.string().trim().max(30).optional(),
  direccion: z.string().trim().max(255).optional(),

  tipo_usuario: z.enum([
    "ciudadano",
    "funcionario",
    "administrador",
    "conductor",
  ]),
});

export const registerSchema = baseRegisterSchema.and(
  z.discriminatedUnion("tipo_usuario", [
    z.object({
      tipo_usuario: z.literal("ciudadano"),
    }),

    z.object({
      tipo_usuario: z.literal("funcionario"),
      cargo: z.string().trim().min(2).max(100),
      dependencia: z.string().trim().min(2).max(100),
    }),

    z.object({
      tipo_usuario: z.literal("administrador"),
      nivel_acceso: z.enum(["basico", "medio", "super"]).default("basico"),
    }),

    z.object({
      tipo_usuario: z.literal("conductor"),
      num_documento: z.string().trim().min(3).max(50),
      licencia: z.string().trim().min(3).max(50),
      vehiculo_asignado: z.string().trim().min(2).max(100),
    }),
  ])
);

export type RegisterInput = z.infer<typeof registerSchema>;
