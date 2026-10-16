
from sqlalchemy.orm import Session

from app.models.reciclaje import PuntoReciclaje


def listar_puntos_reciclaje(
    db: Session,
) -> list[PuntoReciclaje]:
    return (
        db.query(PuntoReciclaje)
        .filter(PuntoReciclaje.activo.is_(True))
        .order_by(PuntoReciclaje.nombre)
        .all()
    )
