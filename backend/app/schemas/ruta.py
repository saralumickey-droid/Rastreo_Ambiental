
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class PuntoRutaResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id_punto_ruta: int
    id_ruta: int
    nombre: str
    latitud: float
    longitud: float
    orden: int
    estado: str


class RutaResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id_ruta: int
    nombre: str
    descripcion: str | None
    zona: str | None
    horario_inicio: str | None
    horario_fin: str | None
    estado: str
    fecha_creacion: datetime
    puntos: list[PuntoRutaResponse] = []
