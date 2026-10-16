
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.reporte import Reporte
from app.schemas.reporte import ReporteResponse

router = APIRouter(prefix="/reportes", tags=["Reportes"])


@router.get("/", response_model=list[ReporteResponse])
def listar_reportes(db: Session = Depends(get_db)):
    return (
        db.query(Reporte)
        .order_by(Reporte.fecha_creacion.desc())
        .all()
    )


@router.get("/{id_reporte}", response_model=ReporteResponse)
def obtener_reporte(id_reporte: int, db: Session = Depends(get_db)):
    reporte = db.query(Reporte).filter(
        Reporte.id_reporte == id_reporte
    ).first()

    if reporte is None:
        raise HTTPException(status_code=404, detail="Reporte no encontrado")

    return reporte
