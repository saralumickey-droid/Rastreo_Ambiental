
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.reporte import Reporte


def listar_reportes_usuario(db: Session, id_usuario: int) -> list[Reporte]:
    return (
        db.query(Reporte)
        .filter(Reporte.id_usuario == id_usuario)
        .order_by(Reporte.fecha_creacion.desc())
        .all()
    )


def obtener_reporte_usuario(
    db: Session,
    id_reporte: int,
    id_usuario: int,
) -> Reporte:
    reporte = db.query(Reporte).filter(
        Reporte.id_reporte == id_reporte,
        Reporte.id_usuario == id_usuario,
    ).first()

    if reporte is None:
        raise HTTPException(
            status_code=404,
            detail="Reporte no encontrado"
        )

    return reporte


def listar_todos_reportes(db: Session) -> list[Reporte]:
    return (
        db.query(Reporte)
        .order_by(Reporte.fecha_creacion.desc())
        .all()
    )
