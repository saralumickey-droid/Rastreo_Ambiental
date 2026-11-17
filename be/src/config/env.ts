import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(8000),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().default(5432),
  DB_NAME: z.string().min(1),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),

  CORS_ORIGIN: z.string().url().default("http://localhost:5173"),

  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default("1d"),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Error en las variables de entorno:");
  console.error(z.treeifyError(result.error));
  process.exit(1);
}

export const env = result.data;
