
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class NotificacionResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id_notificacion: int
    id_usuario: int
    titulo: str
    mensaje: str
    tipo: str
    leida: bool
    fecha_creacion: datetime
