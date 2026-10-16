
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.usuario import Usuario


def listar_usuarios(db: Session) -> list[Usuario]:
    return db.query(Usuario).order_by(Usuario.id_usuario).all()


def obtener_usuario_por_id(db: Session, id_usuario: int) -> Usuario:
    usuario = db.query(Usuario).filter(
        Usuario.id_usuario == id_usuario
    ).first()

    if usuario is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    return usuario
