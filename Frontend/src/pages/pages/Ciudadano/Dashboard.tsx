import ActionGrid from "../../components/ActionGrid";
import * as React from "react";
import Mapa from "../../components/Mapa";

export default function Dashboard() {
  return (
    <>
      <div className="role-title">
        <h3>Seleccione una opción</h3>
        <p>Consulta y participación en el sistema</p>
      </div>
      <ActionGrid
        actions={[
          {
            label: "Ver ubicación de camiones",
            path: "/components/mapa",
          },
          {
            label: "Reportar incidente",
            path: "/ciudadano/reportes",
          },
          {
            label: "Consultar puntos de reciclaje",
            path: "/ciudadano/reciclaje",
          },
          {
            label: "Ver novedades del sistema",
            path: "/ciudadano/novedades",
          },
        ]}
      />
    </>
  );
}