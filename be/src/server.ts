import app from "./app.js";
import { env } from "./config/env.js";
import { pool } from "./config/database.js";

const startServer = async (): Promise<void> => {
  try {
    // Comprobar conexión con PostgreSQL
    await pool.query("SELECT 1");

    console.log("Conexión con PostgreSQL verificada.");

    // Iniciar servidor Express
    const server = app.listen(env.PORT, () => {
      console.log("-----------------------------------");
      console.log("RASTREO AMBIENTAL - BACKEND");
      console.log("-----------------------------------");
      console.log(`Servidor: http://localhost:${env.PORT}`);
      console.log(`API: http://localhost:${env.PORT}/api`);
      console.log(`Entorno: ${env.NODE_ENV}`);
      console.log("-----------------------------------");
    });

    // Cierre ordenado
    const shutdown = async (): Promise<void> => {
      console.log("Cerrando servidor...");

      server.close(async () => {
        await pool.end();
        console.log("Servidor y conexiones cerrados.");
        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error("No se pudo iniciar el servidor:", error);
    await pool.end();
    process.exit(1);
  }
};

void startServer();