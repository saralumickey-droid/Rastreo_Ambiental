
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.camion import Camion


def listar_camiones(db: Session) -> list[Camion]:
    return db.query(Camion).order_by(Camion.id_camion).all()


def obtener_camion(db: Session, id_camion: int) -> Camion:
    camion = db.query(Camion).filter(
        Camion.id_camion == id_camion
    ).first()

    if camion is None:
        raise HTTPException(status_code=404, detail="Camión no encontrado")

    return camion
