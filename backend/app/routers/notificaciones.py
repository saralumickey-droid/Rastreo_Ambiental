
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.notificacion import Notificacion
from app.schemas.notificacion import NotificacionResponse
from app.services.auth_service import obtener_usuario_actual

router = APIRouter(prefix="/notificaciones", tags=["Notificaciones"])


@router.get("/", response_model=list[NotificacionResponse])
def listar_notificaciones(
    db: Session = Depends(get_db),
    usuario=Depends(obtener_usuario_actual),
):
    return (
        db.query(Notificacion)
        .filter(Notificacion.id_usuario == usuario.id_usuario)
        .order_by(Notificacion.fecha_creacion.desc())
        .all()
    )
