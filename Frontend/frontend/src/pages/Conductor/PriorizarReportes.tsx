import "../../css/conductor.css";
import * as React from "react";

export default function PriorizarReportes() {
  const reportes = [
    {
      id: 1,
      descripcion: "Acumulación de residuos",
      zona: "Engativá",
      prioridad: "Alta",
    },
    {
      id: 2,
      descripcion: "Contenedor lleno",
      zona: "Suba",
      prioridad: "Media",
    },
    {
      id: 3,
      descripcion: "Residuos en vía pública",
      zona: "Fontibón",
      prioridad: "Baja",
    },
  ];

  return (
    <div className="conductor-page">
      <h1>Priorizar reportes ciudadanos</h1>

      <div className="reportes-lista">
        {reportes.map((reporte) => (
          <div className="reporte-card" key={reporte.id}>
            <h2>{reporte.descripcion}</h2>

            <p>
              <strong>Zona:</strong> {reporte.zona}
            </p>

            <p>
              <strong>Prioridad:</strong> {reporte.prioridad}
            </p>

            <button>
              Atender reporte
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}