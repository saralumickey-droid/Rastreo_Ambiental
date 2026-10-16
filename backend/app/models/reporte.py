
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, String, Text, Float, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Reporte(Base):
    __tablename__ = "reporte"

    id_reporte: Mapped[int] = mapped_column(Integer, primary_key=True)
    id_usuario: Mapped[int] = mapped_column(ForeignKey("usuario.id_usuario", ondelete="RESTRICT"), nullable=False)
    id_funcionario: Mapped[int | None] = mapped_column(ForeignKey("funcionario.id_funcionario", ondelete="SET NULL"), nullable=True)

    titulo: Mapped[str] = mapped_column(String(150), nullable=False)
    descripcion: Mapped[str] = mapped_column(Text, nullable=False)
    tipo: Mapped[str] = mapped_column(String(50), nullable=False)
    estado: Mapped[str] = mapped_column(String(30), default="pendiente", nullable=False)
    prioridad: Mapped[str] = mapped_column(String(20), default="media", nullable=False)

    direccion: Mapped[str | None] = mapped_column(String(250), nullable=True)
    latitud: Mapped[float | None] = mapped_column(Float, nullable=True)
    longitud: Mapped[float | None] = mapped_column(Float, nullable=True)

    fecha_creacion: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    fecha_actualizacion: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), onupdate=func.now(), nullable=True)

    usuario = relationship("Usuario", back_populates="reportes", foreign_keys=[id_usuario])
    funcionario = relationship("Funcionario", back_populates="reportes_asignados", foreign_keys=[id_funcionario])
