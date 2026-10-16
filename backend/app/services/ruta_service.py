
from fastapi import HTTPException
from sqlalchemy.orm import Session, selectinload

from app.models.ruta import Ruta


def listar_rutas(db: Session) -> list[Ruta]:
    return (
        db.query(Ruta)
        .options(selectinload(Ruta.puntos))
        .order_by(Ruta.id_ruta)
        .all()
    )


def obtener_ruta(db: Session, id_ruta: int) -> Ruta:
    ruta = (
        db.query(Ruta)
        .options(selectinload(Ruta.puntos))
        .filter(Ruta.id_ruta == id_ruta)
        .first()
    )

    if ruta is None:
        raise HTTPException(status_code=404, detail="Ruta no encontrada")

    return ruta
