
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, selectinload

from app.db.session import get_db
from app.models.ruta import Ruta
from app.schemas.ruta import RutaResponse

router = APIRouter(prefix="/rutas", tags=["Rutas"])


@router.get("/", response_model=list[RutaResponse])
def listar_rutas(db: Session = Depends(get_db)):
    return (
        db.query(Ruta)
        .options(selectinload(Ruta.puntos))
        .order_by(Ruta.id_ruta)
        .all()
    )


@router.get("/{id_ruta}", response_model=RutaResponse)
def obtener_ruta(id_ruta: int, db: Session = Depends(get_db)):
    ruta = (
        db.query(Ruta)
        .options(selectinload(Ruta.puntos))
        .filter(Ruta.id_ruta == id_ruta)
        .first()
    )

    if ruta is None:
        raise HTTPException(status_code=404, detail="Ruta no encontrada")

    return ruta
