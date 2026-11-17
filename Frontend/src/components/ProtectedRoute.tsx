import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  getCurrentUser,
  type UserRole,
} from "../api/api";

interface ProtectedRouteProps {
  role: UserRole;
}

export default function ProtectedRoute({
  role,
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let active = true;

    async function verifySession() {
      try {
        const response = await getCurrentUser();

        if (!active) return;

        localStorage.setItem(
          "usuario",
          JSON.stringify(response.user)
        );

        setAuthorized(response.user.tipo_usuario === role);
      } catch {
        if (!active) return;

        localStorage.removeItem("usuario");
        setAuthorized(false);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void verifySession();

    return () => {
      active = false;
    };
  }, [role]);

  if (loading) {
    return <div className="loading-screen">Verificando sesión...</div>;
  }

  if (!authorized) {
    localStorage.removeItem("usuario");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
