
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.auth import LoginRequest, TokenResponse
from app.schemas.usuario import UsuarioCreate, UsuarioResponse
from app.services.auth_service import login_usuario, registrar_usuario, obtener_usuario_actual

router = APIRouter(prefix="/auth", tags=["Autenticación"])


@router.post("/register", response_model=UsuarioResponse, status_code=201)
def registrar(datos: UsuarioCreate, db: Session = Depends(get_db)):
    return registrar_usuario(db, datos)


@router.post("/login", response_model=TokenResponse)
def iniciar_sesion(datos: LoginRequest, db: Session = Depends(get_db)):
    return login_usuario(db, datos)


@router.get("/me", response_model=UsuarioResponse)
def consultar_sesion(usuario=Depends(obtener_usuario_actual)):
    return usuario
