const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || "Ocurrió un error en la solicitud."
    );
  }

  return data as T;
}

export type UserRole =
  | "administrador"
  | "funcionario"
  | "ciudadano"
  | "conductor";

export type User = {
  id_usuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  tipo_usuario: UserRole;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  user: User;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  user: User;
};


export type SessionResponse = {
  success: boolean;
  message: string;
  user: User;
};

export async function getCurrentUser(): Promise<SessionResponse> {
  return apiRequest<SessionResponse>("/me");
}

export async function login(
  correo: string,
  password: string
): Promise<LoginResponse> {
  return apiRequest<LoginResponse>("/login", {
    method: "POST",
    body: JSON.stringify({ correo, password }),
  });
}

export async function register(
  data: Record<string, unknown>
): Promise<RegisterResponse> {
  return apiRequest<RegisterResponse>("/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function logout() {
  return apiRequest<{ success: boolean; message: string }>("/logout", {
    method: "POST",
  });
}
