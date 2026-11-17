import { apiRequest } from "./api";

export type AdminUser = {
  id_usuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string | null;
  direccion: string | null;
  tipo_usuario: "administrador" | "funcionario" | "ciudadano" | "conductor";
  fecha_registro: string;
};

export type UsersResponse = {
  success: boolean;
  message: string;
  total: number;
  usuarios: AdminUser[];
};

export async function getUsers(): Promise<UsersResponse> {
  return apiRequest<UsersResponse>("/usuarios");
}


export async function updateUser(
  id: number,
  data: {
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string | null;
    direccion: string | null;
  }
): Promise<{
  success: boolean;
  message: string;
  usuario: AdminUser;
}> {
  return apiRequest(`/usuarios/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}


export async function deleteUser(
  id: number
): Promise<{
  success: boolean;
  message: string;
}> {
  return apiRequest(`/usuarios/${id}`, {
    method: "DELETE",
  });
}
