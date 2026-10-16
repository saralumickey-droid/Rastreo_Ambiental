
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.notificacion import Notificacion


def listar_notificaciones(
    db: Session,
    id_usuario: int,
) -> list[Notificacion]:
    return (
        db.query(Notificacion)
        .filter(Notificacion.id_usuario == id_usuario)
        .order_by(Notificacion.fecha_creacion.desc())
        .all()
    )


def marcar_como_leida(
    db: Session,
    id_notificacion: int,
    id_usuario: int,
) -> Notificacion:
    notificacion = db.query(Notificacion).filter(
        Notificacion.id_notificacion == id_notificacion,
        Notificacion.id_usuario == id_usuario,
    ).first()

    if notificacion is None:
        raise HTTPException(
            status_code=404,
            detail="Notificación no encontrada"
        )

    notificacion.leida = True

    try:
        db.commit()
        db.refresh(notificacion)
        return notificacion
    except Exception:
        db.rollback()
        raise
