
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.routers import (
    auth,
    usuarios,
    camiones,
    rutas,
    reportes,
    reciclaje,
    notificaciones,
)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description=(
        "API de Rastreo Ambiental para el monitoreo de residuos sólidos, "
        "la gestión de rutas y camiones, y la participación ciudadana."
    ),
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.CLIENT_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix=settings.API_PREFIX)
app.include_router(usuarios.router, prefix=settings.API_PREFIX)
app.include_router(camiones.router, prefix=settings.API_PREFIX)
app.include_router(rutas.router, prefix=settings.API_PREFIX)
app.include_router(reportes.router, prefix=settings.API_PREFIX)
app.include_router(reciclaje.router, prefix=settings.API_PREFIX)
app.include_router(notificaciones.router, prefix=settings.API_PREFIX)


@app.get("/", tags=["Inicio"])
def inicio():
    return {
        "mensaje": "Bienvenido a la API de Rastreo Ambiental",
        "version": settings.APP_VERSION,
        "documentacion": "/docs",
    }


@app.get(f"{settings.API_PREFIX}/health", tags=["Estado"])
def verificar_estado():
    return {
        "estado": "activo",
        "aplicacion": settings.APP_NAME,
    }
