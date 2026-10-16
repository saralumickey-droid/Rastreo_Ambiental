import { useState } from "react";
import "../../css/conductor.css";
import * as React from "react";

export default function RegistrarRecoleccion() {
  const [punto, setPunto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrar = (e: React.FormEvent) => {
    e.preventDefault();

    const recolecciones = JSON.parse(
      localStorage.getItem("recolecciones") || "[]"
    );

    recolecciones.push({
      id: Date.now(),
      punto,
      cantidad,
      fecha: new Date().toLocaleString(),
      estado: "Registrada",
    });

    localStorage.setItem(
      "recolecciones",
      JSON.stringify(recolecciones)
    );

    setPunto("");
    setCantidad("");
    setMensaje("Recolección registrada correctamente.");
  };

  return (
    <div className="conductor-page">
      <h1>Registrar recolección</h1>

      <form className="form-card" onSubmit={registrar}>
        <label>Punto de recolección</label>

        <select
          value={punto}
          onChange={(e) => setPunto(e.target.value)}
          required
        >
          <option value="">Seleccione un punto</option>
          <option value="Punto 1 - Calle 80">
            Punto 1 - Calle 80
          </option>
          <option value="Punto 2 - Carrera 70">
            Punto 2 - Carrera 70
          </option>
          <option value="Punto 3 - Calle 72">
            Punto 3 - Calle 72
          </option>
        </select>

        <label>Cantidad recolectada (kg)</label>

        <input
          type="number"
          min="0"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />

        <button type="submit">
          Registrar recolección
        </button>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </form>
    </div>
  );
}