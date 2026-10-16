
from sqlalchemy import Boolean, Float, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class PuntoReciclaje(Base):
    __tablename__ = "punto_reciclaje"

    id_punto_reciclaje: Mapped[int] = mapped_column(Integer, primary_key=True)
    nombre: Mapped[str] = mapped_column(String(150), nullable=False)
    direccion: Mapped[str] = mapped_column(String(250), nullable=False)
    descripcion: Mapped[str | None] = mapped_column(Text, nullable=True)
    materiales_aceptados: Mapped[str | None] = mapped_column(Text, nullable=True)
    latitud: Mapped[float] = mapped_column(Float, nullable=False)
    longitud: Mapped[float] = mapped_column(Float, nullable=False)
    activo: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
