import "../../css/conductor.css";
import * as React from "react";

export default function HorarioLaboral() {
  const horario = [
    ["Lunes", "6:00 AM - 2:00 PM"],
    ["Martes", "6:00 AM - 2:00 PM"],
    ["Miércoles", "6:00 AM - 2:00 PM"],
    ["Jueves", "6:00 AM - 2:00 PM"],
    ["Viernes", "6:00 AM - 2:00 PM"],
    ["Sábado", "6:00 AM - 12:00 PM"],
  ];

  return (
    <div className="conductor-page">
      <h1>Horario laboral</h1>

      <div className="horario-card">
        {horario.map(([dia, hora]) => (
          <div className="horario-row" key={dia}>
            <strong>{dia}</strong>
            <span>{hora}</span>
          </div>
        ))}
      </div>
    </div>
  );
}