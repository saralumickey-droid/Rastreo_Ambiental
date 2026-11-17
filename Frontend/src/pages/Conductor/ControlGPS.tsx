import Mapa from "../../components/Mapa";
import "../../css/conductor.css";
import * as React from "react";

export default function ControlGPS() {
  return (
    <div className="conductor-page">
      <h1>Control GPS</h1>

      <div className="info-card">
        <h2>Ubicación del vehículo</h2>
        <p>
          Consulta la ubicación actual del vehículo mediante el sistema GPS.
        </p>
      </div>

      <div className="mapa-card">
        <Mapa />
      </div>

      <div className="estado-gps">
        <strong>Estado GPS:</strong> Activo
      </div>
    </div>
  );
}