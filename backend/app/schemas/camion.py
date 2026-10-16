
from pydantic import BaseModel, ConfigDict


class CamionResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id_camion: int
    placa: str
    modelo: str | None
    capacidad_kg: float | None
    estado: str
    id_conductor: int | None
    id_ruta: int | None
    latitud: float | None
    longitud: float | None
