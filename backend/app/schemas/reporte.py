
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ReporteResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id_reporte: int
    id_usuario: int
    id_funcionario: int | None
    titulo: str
    descripcion: str
    tipo: str
    estado: str
    prioridad: str
    direccion: str | None
    latitud: float | None
    longitud: float | None
    fecha_creacion: datetime
    fecha_actualizacion: datetime | None
