import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/ambiental2.png";
import { register } from "../../api/api";

type Role = "" | "ciudadano" | "funcionario" | "conductor";

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState<Role>("");
  const [form, setForm] = useState<Record<string, string>>({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    telefono: "",
    direccion: "",
    num_documento: "",
    licencia: "",
    vehiculo_asignado: "",
    cargo: "",
    dependencia: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(name: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!role) {
      setError("Selecciona un tipo de usuario.");
      return;
    }

    setLoading(true);

    try {
      await register({
        nombre: form.nombre.trim(),
        apellido: form.apellido.trim(),
        correo: form.correo.trim(),
        password: form.password,
        telefono: form.telefono.trim(),
        direccion: form.direccion.trim(),
        tipo_usuario: role,
        ...(role === "conductor" && {
          num_documento: form.num_documento.trim(),
          licencia: form.licencia.trim(),
          vehiculo_asignado: form.vehiculo_asignado.trim(),
        }),
        ...(role === "funcionario" && {
          cargo: form.cargo.trim(),
          dependencia: form.dependencia.trim(),
        }),
      });

      setMessage("Registro realizado correctamente.");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo registrar el usuario."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container register-container">
        <div className="logo-area">
          <img src={logo} alt="Logo Rastreo Ambiental" />
          <h1>RASTREO AMBIENTAL</h1>
          <p>Crear nueva cuenta</p>
        </div>

        <form className="auth-form register-form" onSubmit={handleSubmit}>
          <input
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            required
          />

          <input
            placeholder="Apellido"
            value={form.apellido}
            onChange={(e) => update("apellido", e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={(e) => update("correo", e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña (mínimo 8 caracteres)"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            minLength={8}
            required
          />

          <input
            placeholder="Teléfono"
            value={form.telefono}
            onChange={(e) => update("telefono", e.target.value)}
          />

          <input
            placeholder="Dirección"
            value={form.direccion}
            onChange={(e) => update("direccion", e.target.value)}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            required
          >
            <option value="">Seleccione tipo de usuario</option>
            <option value="ciudadano">Ciudadano</option>
            <option value="funcionario">Funcionario</option>
            <option value="conductor">Conductor</option>
          </select>

          {role === "conductor" && (
            <div className="extra-fields">
              <input
                placeholder="Número de documento"
                value={form.num_documento}
                onChange={(e) => update("num_documento", e.target.value)}
                required
              />

              <input
                placeholder="Número de licencia"
                value={form.licencia}
                onChange={(e) => update("licencia", e.target.value)}
                required
              />

              <input
                placeholder="Vehículo asignado"
                value={form.vehiculo_asignado}
                onChange={(e) => update("vehiculo_asignado", e.target.value)}
                required
              />
            </div>
          )}

          {role === "funcionario" && (
            <div className="extra-fields">
              <input
                placeholder="Cargo"
                value={form.cargo}
                onChange={(e) => update("cargo", e.target.value)}
                required
              />

              <input
                placeholder="Dependencia"
                value={form.dependencia}
                onChange={(e) => update("dependencia", e.target.value)}
                required
              />
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          {message && <div className="success-message">{message}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "REGISTRANDO..." : "CREAR CUENTA"}
          </button>

          <div className="register-link">
            ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

