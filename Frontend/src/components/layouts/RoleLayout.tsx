import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../api/api";
import logo from "../../assets/ambiental2.png";

type Props = {
  role: string;
  subtitle: string;
};

export default function RoleLayout({ role, subtitle }: Props) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      localStorage.removeItem("usuario");
      navigate("/login", { replace: true });
    }
  }

  return (
    <div className="role-page">
      <div className="role-container">
        <div className="role-header">
          <img src={logo} alt="Logo Rastreo Ambiental" />

          <div>
            <h2>{role}</h2>
            <p>{subtitle}</p>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
