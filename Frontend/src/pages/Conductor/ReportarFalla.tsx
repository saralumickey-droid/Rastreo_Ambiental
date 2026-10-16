import { useState } from "react";
import "../../css/conductor.css";
import * as React from "react";

export default function ReportarFalla() {
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const reportar = (e: React.FormEvent) => {
    e.preventDefault();

    const fallas = JSON.parse(
      localStorage.getItem("fallasVehiculo") || "[]"
    );

    fallas.push({
      id: Date.now(),
      tipo,
      descripcion,
      fecha: new Date().toLocaleString(),
      estado: "Pendiente",
    });

    localStorage.setItem(
      "fallasVehiculo",
      JSON.stringify(fallas)
    );

    setTipo("");
    setDescripcion("");

    setMensaje(
      "La falla del vehículo fue reportada correctamente."
    );
  };

  return (
    <div className="conductor-page">
      <h1>Reportar fallas del vehículo</h1>

      <form className="form-card" onSubmit={reportar}>
        <label>Tipo de falla</label>

        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="Motor">Motor</option>
          <option value="Frenos">Frenos</option>
          <option value="Llantas">Llantas</option>
          <option value="GPS">GPS</option>
          <option value="Luces">Luces</option>
          <option value="Otro">Otro</option>
        </select>

        <label>Descripción de la falla</label>

        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Describe la falla..."
          required
        />

        <button type="submit">
          Reportar falla
        </button>

        {mensaje && (
          <p className="mensaje">{mensaje}</p>
        )}
      </form>
    </div>
  );
}