
from sqlalchemy import Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Camion(Base):
    __tablename__ = "camion"

    id_camion: Mapped[int] = mapped_column(Integer, primary_key=True)
    placa: Mapped[str] = mapped_column(String(15), unique=True, nullable=False)
    modelo: Mapped[str | None] = mapped_column(String(80), nullable=True)
    capacidad_kg: Mapped[float | None] = mapped_column(Float, nullable=True)
    estado: Mapped[str] = mapped_column(String(30), default="disponible", nullable=False)

    id_conductor: Mapped[int | None] = mapped_column(ForeignKey("conductor.id_conductor", ondelete="SET NULL"), nullable=True)
    id_ruta: Mapped[int | None] = mapped_column(ForeignKey("ruta.id_ruta", ondelete="SET NULL"), nullable=True)

    latitud: Mapped[float | None] = mapped_column(Float, nullable=True)
    longitud: Mapped[float | None] = mapped_column(Float, nullable=True)

    conductor = relationship("Conductor", back_populates="camiones")
    ruta = relationship("Ruta", back_populates="camiones")
