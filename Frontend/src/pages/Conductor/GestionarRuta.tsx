import "../../css/conductor.css";
import * as React from "react";

export default function GestionarRuta() {
  return (
    <div className="conductor-page">
      <h1>Gestionar ruta asignada</h1>

      <div className="ruta-card">
        <h2>Ruta #R-025</h2>

        <p>
          <strong>Zona:</strong> Bogotá - Engativá
        </p>

        <p>
          <strong>Fecha:</strong> 7 de septiembre de 2026
        </p>

        <p>
          <strong>Hora de inicio:</strong> 6:00 AM
        </p>

        <p>
          <strong>Estado:</strong> En proceso
        </p>

        <h3>Puntos de recolección</h3>

        <ul>
          <li>Punto 1 - Calle 80</li>
          <li>Punto 2 - Carrera 70</li>
          <li>Punto 3 - Calle 72</li>
          <li>Punto 4 - Avenida Boyacá</li>
        </ul>

        <button>
          Iniciar ruta
        </button>
      </div>
    </div>
  );
}