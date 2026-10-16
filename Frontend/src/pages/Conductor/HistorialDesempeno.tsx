import "../../css/conductor.css";
import * as React from "react";

export default function HistorialDesempeno() {
  return (
    <div className="conductor-page">
      <h1>Historial de desempeño</h1>

      <div className="estadisticas">
        <div className="estadistica">
          <h2>42</h2>
          <p>Rutas completadas</p>
        </div>

        <div className="estadistica">
          <h2>128</h2>
          <p>Recolecciones</p>
        </div>

        <div className="estadistica">
          <h2>96%</h2>
          <p>Cumplimiento</p>
        </div>

        <div className="estadistica">
          <h2>4.8</h2>
          <p>Calificación</p>
        </div>
      </div>

      <div className="info-card">
        <h2>Resumen</h2>

        <p>
          El conductor ha completado satisfactoriamente sus
          rutas asignadas y mantiene un buen nivel de cumplimiento.
        </p>
      </div>
    </div>
  );
}