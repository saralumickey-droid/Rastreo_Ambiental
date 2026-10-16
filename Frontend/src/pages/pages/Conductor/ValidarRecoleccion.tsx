import { useState } from "react";
import "../../css/conductor.css";
import * as React from "react";

export default function ValidarRecoleccion() {
  const [codigo, setCodigo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const validar = (e: React.FormEvent) => {
    e.preventDefault();

    if (codigo === "REC001") {
      setMensaje("Recolección validada correctamente.");
    } else {
      setMensaje("Código de recolección no encontrado.");
    }
  };

  return (
    <div className="conductor-page">
      <h1>Validar recolección</h1>

      <form className="form-card" onSubmit={validar}>
        <label>Código de recolección</label>

        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Ej: REC001"
          required
        />

        <button type="submit">
          Validar
        </button>

        {mensaje && (
          <p className="mensaje">{mensaje}</p>
        )}
      </form>
    </div>
  );
}