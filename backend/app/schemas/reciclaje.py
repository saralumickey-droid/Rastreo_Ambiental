
from pydantic import BaseModel, ConfigDict


class PuntoReciclajeResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id_punto_reciclaje: int
    nombre: str
    direccion: str
    descripcion: str | None
    materiales_aceptados: str | None
    latitud: float
    longitud: float
    activo: bool
