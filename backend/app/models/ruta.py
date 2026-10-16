
from sqlalchemy import DateTime, ForeignKey, Integer, String, Float, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Ruta(Base):
    __tablename__ = "ruta"

    id_ruta: Mapped[int] = mapped_column(Integer, primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), nullable=False)
    descripcion: Mapped[str | None] = mapped_column(String(300), nullable=True)
    zona: Mapped[str | None] = mapped_column(String(150), nullable=True)
    horario_inicio: Mapped[str | None] = mapped_column(String(10), nullable=True)
    horario_fin: Mapped[str | None] = mapped_column(String(10), nullable=True)
    estado: Mapped[str] = mapped_column(String(30), default="activa", nullable=False)
    fecha_creacion: Mapped[DateTime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    camiones = relationship("Camion", back_populates="ruta")
    puntos = relationship("PuntoRuta", back_populates="ruta", cascade="all, delete-orphan", order_by="PuntoRuta.orden")


class PuntoRuta(Base):
    __tablename__ = "punto_ruta"

    id_punto_ruta: Mapped[int] = mapped_column(Integer, primary_key=True)
    id_ruta: Mapped[int] = mapped_column(ForeignKey("ruta.id_ruta", ondelete="CASCADE"), nullable=False)
    nombre: Mapped[str] = mapped_column(String(150), nullable=False)
    latitud: Mapped[float] = mapped_column(Float, nullable=False)
    longitud: Mapped[float] = mapped_column(Float, nullable=False)
    orden: Mapped[int] = mapped_column(Integer, nullable=False)
    estado: Mapped[str] = mapped_column(String(30), default="pendiente", nullable=False)

    ruta = relationship("Ruta", back_populates="puntos")
