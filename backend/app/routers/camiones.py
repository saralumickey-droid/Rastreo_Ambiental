
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.camion import Camion
from app.schemas.camion import CamionResponse

router = APIRouter(prefix="/camiones", tags=["Camiones"])


@router.get("/", response_model=list[CamionResponse])
def listar_camiones(db: Session = Depends(get_db)):
    return db.query(Camion).order_by(Camion.id_camion).all()


@router.get("/{id_camion}", response_model=CamionResponse)
def obtener_camion(id_camion: int, db: Session = Depends(get_db)):
    camion = db.query(Camion).filter(
        Camion.id_camion == id_camion
    ).first()

    if camion is None:
        raise HTTPException(status_code=404, detail="Camión no encontrado")

    return camion
