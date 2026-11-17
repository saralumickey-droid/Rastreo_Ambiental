import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import logo from "../../assets/ambiental2.png";
import "../../css/index.css";

export default function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // USUARIOS TEMPORALES
  const usuarios = [
    {
      correo: "admin@rastreo.com",
      password: "123456",
      nombre: "Administrador",
      tipo_usuario: "administrador",
      ruta: "/administrador/dashboard",
    },
    {
      correo: "ciudadano@rastreo.com",
      password: "123456",
      nombre: "Ciudadano",
      tipo_usuario: "ciudadano",
      ruta: "/ciudadano/dashboard",
    },
    {
      correo: "conductor@rastreo.com",
      password: "123456",
      nombre: "Conductor",
      tipo_usuario: "conductor",
      ruta: "/conductor/dashboard",
    },
    {
      correo: "funcionario@rastreo.com",
      password: "123456",
      nombre: "Funcionario",
      tipo_usuario: "funcionario",
      ruta: "/funcionario/dashboard",
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // Buscar usuario
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.correo === correo &&
        usuario.password === password
    );

    // Si no existe
    if (!usuarioEncontrado) {
      setError("Correo o contraseña incorrectos");
      return;
    }

    // Guardar sesión temporalmente
    localStorage.setItem(
      "usuario",
      JSON.stringify({
        nombre: usuarioEncontrado.nombre,
        correo: usuarioEncontrado.correo,
        tipo_usuario: usuarioEncontrado.tipo_usuario,
      })
    );

    // Redireccionar según el tipo de usuario
    navigate(usuarioEncontrado.ruta);
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="logo-area">
          <img src={logo} alt="Logo" />

          <h1>RASTREO AMBIENTAL</h1>

          <p>Monitoreo inteligente de residuos sólidos</p>
        </div>

        <h1>Iniciar sesión</h1>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

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
          >
            Iniciar sesión
          </button>

        </form>

      </div>
    </div>
  );
}