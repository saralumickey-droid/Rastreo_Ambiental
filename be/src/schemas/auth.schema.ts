import { z } from "zod";

export const loginSchema = z.object({
  correo: z
    .string()
    .email("Ingresa un correo electrónico válido.")
    .max(150),

  password: z
    .string()
    .min(1, "La contraseña es obligatoria.")
    .max(100),
});

export type LoginInput = z.infer<typeof loginSchema>;
