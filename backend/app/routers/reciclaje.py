
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.reciclaje import PuntoReciclaje
from app.schemas.reciclaje import PuntoReciclajeResponse

router = APIRouter(prefix="/reciclaje", tags=["Puntos de reciclaje"])


@router.get("/", response_model=list[PuntoReciclajeResponse])
def listar_puntos_reciclaje(db: Session = Depends(get_db)):
    return (
        db.query(PuntoReciclaje)
        .filter(PuntoReciclaje.activo.is_(True))
        .order_by(PuntoReciclaje.nombre)
        .all()
    )
