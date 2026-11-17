declare global {
  namespace Express {
    interface Request {
      user?: {
        id_usuario: number;
        nombre: string;
        apellido: string;
        correo: string;
        tipo_usuario: string;
      };
    }
  }
}

export {};
