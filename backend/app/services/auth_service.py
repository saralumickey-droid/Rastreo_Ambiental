
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    decode_access_token,
)
from app.db.session import get_db
from app.models.usuario import Usuario, Ciudadano
from app.schemas.auth import LoginRequest
from app.schemas.usuario import UsuarioCreate


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_PREFIX}/auth/login"
)


def registrar_usuario(db: Session, datos: UsuarioCreate):
    correo = str(datos.correo).lower()

    existente = db.query(Usuario).filter(
        Usuario.correo == correo
    ).first()

    if existente:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="El correo ya está registrado"
        )

    usuario = Usuario(
        nombre=datos.nombre.strip(),
        apellido=datos.apellido.strip(),
        correo=correo,
        telefono=datos.telefono,
        direccion=datos.direccion,
        password_hash=hash_password(datos.password),
        tipo_usuario="ciudadano",
        activo=True,
    )

    try:
        db.add(usuario)
        db.flush()

        db.add(Ciudadano(id_usuario=usuario.id_usuario))
        db.commit()
        db.refresh(usuario)
        return usuario
    except Exception:
        db.rollback()
        raise


def login_usuario(db: Session, datos: LoginRequest):
    correo = str(datos.correo).lower()

    usuario = db.query(Usuario).filter(
        Usuario.correo == correo
    ).first()

    if (
        usuario is None
        or not verify_password(datos.password, usuario.password_hash)
        or not usuario.activo
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Correo o contraseña incorrectos",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = create_access_token(subject=str(usuario.id_usuario))

    return {
        "access_token": token,
        "token_type": "bearer",
    }


def obtener_usuario_actual(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
):
    payload = decode_access_token(token)

    if not payload or not payload.get("sub"):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido o expirado",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        id_usuario = int(payload["sub"])
    except (ValueError, TypeError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido",
            headers={"WWW-Authenticate": "Bearer"},
        )

    usuario = db.query(Usuario).filter(
        Usuario.id_usuario == id_usuario
    ).first()

    if usuario is None or not usuario.activo:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuario no disponible",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return usuario
