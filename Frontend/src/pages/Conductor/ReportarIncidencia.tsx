import { useState } from "react";
import "../../css/conductor.css";
import * as React from "react";

export default function ReportarIncidencia() {
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarReporte = (e: React.FormEvent) => {
    e.preventDefault();

    const reportes = JSON.parse(
      localStorage.getItem("incidencias") || "[]"
    );

    reportes.push({
      id: Date.now(),
      tipo,
      descripcion,
      fecha: new Date().toLocaleString(),
      estado: "Pendiente",
    });

    localStorage.setItem(
      "incidencias",
      JSON.stringify(reportes)
    );

    setTipo("");
    setDescripcion("");
    setMensaje("Incidencia reportada correctamente.");
  };

  return (
    <div className="conductor-page">
      <h1>Reportar tráfico o incidencias</h1>

      <form className="form-card" onSubmit={enviarReporte}>
        <label>Tipo de incidencia</label>

        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="Tráfico">Tráfico</option>
          <option value="Accidente">Accidente</option>
          <option value="Vía cerrada">Vía cerrada</option>
          <option value="Obras">Obras</option>
          <option value="Otro">Otro</option>
        </select>

        <label>Descripción</label>

        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Describe la situación..."
          required
        />

        <button type="submit">
          Reportar incidencia
        </button>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </form>
    </div>
  );
}