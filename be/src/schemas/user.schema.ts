import { z } from "zod";

export const updateUserSchema = z.object({
  nombre: z.string().trim().min(2).max(100),
  apellido: z.string().trim().min(2).max(100),
  correo: z.string().trim().email().max(150),
  telefono: z.string().trim().max(30).nullable().optional(),
  direccion: z.string().trim().max(255).nullable().optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
