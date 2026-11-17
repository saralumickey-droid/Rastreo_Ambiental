import { Link } from "react-router-dom";
import * as React from "react";

export default function Conductores() {
  return (
    <div className="page-container">
      <Link to="/administrador/dashboard" className="btn btn-dark">
        Volver
      </Link>
      <h2 className="page-title">Conductores</h2>

      <div className="card">
        <p>
          Módulo vacío 
        </p>
      </div>
    </div>
  );
}