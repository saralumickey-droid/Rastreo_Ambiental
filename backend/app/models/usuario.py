
from datetime import datetime

from sqlalchemy import Boolean, DateTime, ForeignKey, Integer, String, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Usuario(Base):
    __tablename__ = "usuario"

    id_usuario: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    nombre: Mapped[str] = mapped_column(String(100), nullable=False)
    apellido: Mapped[str] = mapped_column(String(100), nullable=False)
    correo: Mapped[str] = mapped_column(String(150), unique=True, index=True, nullable=False)
    telefono: Mapped[str | None] = mapped_column(String(20), nullable=True)
    direccion: Mapped[str | None] = mapped_column(String(250), nullable=True)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    tipo_usuario: Mapped[str] = mapped_column(String(20), nullable=False, index=True)
    activo: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    fecha_registro: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    ciudadano = relationship("Ciudadano", back_populates="usuario", uselist=False, cascade="all, delete-orphan")
    funcionario = relationship("Funcionario", back_populates="usuario", uselist=False, cascade="all, delete-orphan")
    administrador = relationship("Administrador", back_populates="usuario", uselist=False, cascade="all, delete-orphan")
    conductor = relationship("Conductor", back_populates="usuario", uselist=False, cascade="all, delete-orphan")
    reportes = relationship("Reporte", back_populates="usuario", foreign_keys="Reporte.id_usuario")
    notificaciones = relationship("Notificacion", back_populates="usuario", cascade="all, delete-orphan")


class Ciudadano(Base):
    __tablename__ = "ciudadano"

    id_ciudadano: Mapped[int] = mapped_column(Integer, primary_key=True)
    id_usuario: Mapped[int] = mapped_column(ForeignKey("usuario.id_usuario", ondelete="CASCADE"), unique=True, nullable=False)

    usuario = relationship("Usuario", back_populates="ciudadano")


class Funcionario(Base):
    __tablename__ = "funcionario"

    id_funcionario: Mapped[int] = mapped_column(Integer, primary_key=True)
    id_usuario: Mapped[int] = mapped_column(ForeignKey("usuario.id_usuario", ondelete="CASCADE"), unique=True, nullable=False)
    entidad: Mapped[str | None] = mapped_column(String(150), nullable=True)
    cargo: Mapped[str | None] = mapped_column(String(100), nullable=True)

    usuario = relationship("Usuario", back_populates="funcionario")
    reportes_asignados = relationship("Reporte", back_populates="funcionario", foreign_keys="Reporte.id_funcionario")


class Administrador(Base):
    __tablename__ = "administrador"

    id_administrador: Mapped[int] = mapped_column(Integer, primary_key=True)
    id_usuario: Mapped[int] = mapped_column(ForeignKey("usuario.id_usuario", ondelete="CASCADE"), unique=True, nullable=False)

    usuario = relationship("Usuario", back_populates="administrador")


class Conductor(Base):
    __tablename__ = "conductor"

    id_conductor: Mapped[int] = mapped_column(Integer, primary_key=True)
    id_usuario: Mapped[int] = mapped_column(ForeignKey("usuario.id_usuario", ondelete="CASCADE"), unique=True, nullable=False)
    num_documento: Mapped[str] = mapped_column(String(30), unique=True, nullable=False)
    licencia: Mapped[str] = mapped_column(String(50), nullable=False)
    estado: Mapped[str] = mapped_column(String(20), default="activo", nullable=False)

    usuario = relationship("Usuario", back_populates="conductor")
    camiones = relationship("Camion", back_populates="conductor")
