import * as React from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } from "react-leaflet";
  
  import "leaflet/dist/leaflet.css";
  
  import L from "leaflet";
  
  // Corregir iconos de Leaflet en Vite
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
  
  export default function Mapa() {
    const posicion: [number, number] = [4.711, -74.0721];
  
    return (
      <MapContainer
        center={posicion}
        zoom={12}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        <Marker position={posicion}>
          <Popup>
            <strong>Rastreo Ambiental</strong>
            <br />
            Ubicación en Bogotá.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }