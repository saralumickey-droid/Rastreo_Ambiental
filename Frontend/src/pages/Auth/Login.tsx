import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ambiental2.png";
import "../../css/index.css";
import { login } from "../../api/api";

export default function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await login(correo.trim(), password);

      // Guardamos solamente los datos públicos del usuario.
      localStorage.setItem(
        "usuario",
        JSON.stringify(response.user)
      );

      // Redirección según el tipo de usuario.
      switch (response.user.tipo_usuario) {
        case "administrador":
          navigate("/administrador/dashboard");
          break;

        case "ciudadano":
          navigate("/ciudadano/dashboard");
          break;

        case "funcionario":
          navigate("/funcionario/dashboard");
          break;

        case "conductor":
          navigate("/conductor/dashboard");
          break;

        default:
          setError("El tipo de usuario no es válido.");
          localStorage.removeItem("usuario");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No fue posible iniciar sesión."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-area">
          <img src={logo} alt="Logo Rastreo Ambiental" />
          <h1>RASTREO AMBIENTAL</h1>
          <p>Monitoreo inteligente de residuos sólidos</p>
        </div>

        <h1>Iniciar sesión</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label htmlFor="correo">
              Correo electrónico
            </label>

            <input
              id="correo"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo electrónico"
              required
            />
          </div>

          <div>
            <label htmlFor="password">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "INGRESANDO..." : "INICIAR SESIÓN"}
          </button>
        </form>
      </div>
    </div>
  );
}
