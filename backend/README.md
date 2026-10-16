
# Rastreo Ambiental — Backend

**API para el Monitoreo Inteligente de Residuos Sólidos**

## 1. Descripción

El backend de Rastreo Ambiental es el componente encargado de procesar las solicitudes del frontend, validar la información, gestionar la autenticación y administrar las operaciones relacionadas con la recolección de residuos sólidos.

Está desarrollado con Python y FastAPI, utiliza SQLAlchemy para la interacción con la base de datos PostgreSQL y contempla autenticación mediante tokens JWT.

Su propósito es proporcionar servicios para gestionar usuarios, camiones, rutas, reportes ciudadanos, puntos de reciclaje y notificaciones.

## 2. Tecnologías utilizadas

- **Python:** lenguaje de programación del backend.
- **FastAPI:** desarrollo de la API REST.
- **Uvicorn:** servidor ASGI para ejecutar la aplicación.
- **SQLAlchemy:** mapeo objeto-relacional y consultas a la base de datos.
- **PostgreSQL:** almacenamiento persistente de información.
- **Psycopg2:** controlador de conexión con PostgreSQL.
- **Pydantic:** validación y estructuración de datos.
- **Pydantic Settings:** administración de la configuración.
- **Python-JOSE:** generación y validación de tokens JWT.
- **pwdlib y Argon2:** protección de contraseñas mediante hash.
- **Pytest:** ejecución de pruebas automatizadas.
- **Docker y Docker Compose:** preparación del entorno de ejecución mediante contenedores.

## 3. Funcionalidades principales

### Autenticación
- Registro de ciudadanos.
- Inicio de sesión.
- Validación de credenciales.
- Generación y validación de tokens de acceso.
- Consulta del usuario autenticado.

### Usuarios
- Consulta de información de usuarios.
- Administración de datos según los permisos establecidos.

### Camiones y rutas
- Consulta de camiones registrados.
- Consulta de rutas y sus puntos asociados.
- Acceso a información de asignaciones y ubicaciones disponibles.

### Reportes ciudadanos
- Consulta de reportes.
- Asociación de reportes con usuarios.
- Seguimiento de estados, prioridades y responsables.

### Puntos de reciclaje
- Consulta de puntos de reciclaje activos.
- Acceso a información sobre ubicación y materiales aceptados.

### Notificaciones
- Consulta de notificaciones del usuario autenticado.
- Marcado de notificaciones como leídas cuando la operación esté conectada a su endpoint.

La disponibilidad de cada operación depende de su implementación y de los permisos configurados.

## 4. Estructura del proyecto

```text
backend/
├── app/
│   ├── core/
│   │   ├── config.py
│   │   └── security.py
│   ├── db/
│   │   ├── base.py
│   │   └── session.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── usuario.py
│   │   ├── camion.py
│   │   ├── ruta.py
│   │   ├── reporte.py
│   │   ├── reciclaje.py
│   │   └── notificacion.py
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── usuarios.py
│   │   ├── camiones.py
│   │   ├── rutas.py
│   │   ├── reportes.py
│   │   ├── reciclaje.py
│   │   └── notificaciones.py
│   ├── schemas/
│   ├── services/
│   ├── tests/
│   └── main.py
├── .env
├── .gitignore
├── .dockerignore
├── Dockerfile
├── compose.yaml
├── db.sql
├── requirements.txt
└── README.md
```

La estructura representa la organización prevista. Los archivos y módulos deben corresponder con los que existan realmente en el proyecto.

## 5. Requisitos previos

Para ejecutar el backend localmente se necesita:

- Python 3.12 o una versión compatible con las dependencias.
- PostgreSQL instalado o accesible mediante un servicio externo.
- Un entorno virtual de Python.
- Acceso a una terminal.

Para ejecutar el proyecto mediante contenedores se necesita Docker con Docker Compose.

## 6. Instalación local

Ubícate en la carpeta `backend`.

Crea un entorno virtual:

```bash
python -m venv .venv
```

En Windows PowerShell, actívalo con:

```powershell
.\.venv\Scripts\Activate.ps1
```

Instala las dependencias:

```bash
python -m pip install -r requirements.txt
```

## 7. Variables de entorno

Crea un archivo `.env` en la carpeta `backend`:

```dotenv
APP_NAME=Rastreo Ambiental API
APP_VERSION=1.0.0
API_PREFIX=/api
CLIENT_URL=http://localhost:5173

DATABASE_URL=postgresql+psycopg2://postgres:TU_CONTRASENA@localhost:5432/rastreo_ambiental

SECRET_KEY=REEMPLAZAR_POR_UN_SECRETO_SEGURO
ACCESS_TOKEN_EXPIRE_MINUTES=30
ALGORITHM=HS256

POSTGRES_PASSWORD=REEMPLAZAR_POR_UNA_CONTRASENA_SEGURA
```

Sustituye los valores de ejemplo por los correspondientes a tu entorno.

- `DATABASE_URL`: cadena de conexión a PostgreSQL.
- `CLIENT_URL`: origen permitido del frontend.
- `SECRET_KEY`: clave privada utilizada para firmar los tokens.
- `ACCESS_TOKEN_EXPIRE_MINUTES`: duración de los tokens de acceso.
- `POSTGRES_PASSWORD`: contraseña de PostgreSQL cuando se utilice la configuración de Docker Compose.

No publiques el archivo `.env` ni incluyas secretos en el repositorio.

## 8. Configuración de la base de datos

La base de datos utilizada por el proyecto se denomina `rastreo_ambiental`.

El archivo `db.sql` contiene el esquema inicial de las tablas. Antes de utilizarlo, verifica que sus nombres, columnas, tipos y relaciones coincidan con los modelos de SQLAlchemy.

Si ejecutas PostgreSQL mediante Docker Compose, el script de inicialización se ejecuta automáticamente al crear un volumen de datos nuevo.

Los scripts de inicialización de PostgreSQL no se ejecutan de nuevo automáticamente sobre una base de datos ya inicializada.

## 9. Ejecutar el servidor

Una vez instaladas las dependencias y configurada una base de datos accesible, ejecuta desde la carpeta `backend`:

```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Direcciones locales:

- API: http://127.0.0.1:8000/
- Documentación interactiva: http://127.0.0.1:8000/docs
- Documentación alternativa: http://127.0.0.1:8000/redoc
- Estado de la API: http://127.0.0.1:8000/api/health

La documentación interactiva permite revisar los endpoints disponibles y enviar solicitudes de prueba.

## 10. Endpoints previstos

| Método | Endpoint | Función |
|---|---|---|
| POST | `/api/auth/register` | Registrar un ciudadano. |
| POST | `/api/auth/login` | Iniciar sesión. |
| GET | `/api/auth/me` | Consultar el usuario autenticado. |
| GET | `/api/usuarios/` | Consultar usuarios. |
| GET | `/api/usuarios/{id_usuario}` | Consultar un usuario por ID. |
| GET | `/api/camiones/` | Listar camiones. |
| GET | `/api/camiones/{id_camion}` | Consultar un camión. |
| GET | `/api/rutas/` | Listar rutas. |
| GET | `/api/rutas/{id_ruta}` | Consultar una ruta. |
| GET | `/api/reportes/` | Consultar reportes. |
| GET | `/api/reportes/{id_reporte}` | Consultar un reporte. |
| GET | `/api/reciclaje/` | Listar puntos de reciclaje. |
| GET | `/api/notificaciones/` | Consultar notificaciones propias. |

La tabla describe las rutas previstas según los módulos del proyecto. Los métodos disponibles, los permisos y el comportamiento final deben verificarse en el código.

## 11. Autenticación y seguridad

La API contempla autenticación mediante tokens JWT.

Las solicitudes que requieren autenticación deben incluir el token en la cabecera:

```http
Authorization: Bearer TU_TOKEN
```

Las contraseñas no deben almacenarse en texto plano. El backend utiliza funciones de hash para protegerlas.

Antes de desplegar la aplicación, se deben verificar los permisos de cada rol, la protección de los datos personales, las restricciones de acceso a reportes y usuarios, y la configuración de CORS.

## 12. Ejecutar con Docker

Con Docker disponible, entra en la carpeta `backend` y ejecuta:

```bash
docker compose up --build
```

Para detener los contenedores:

```bash
docker compose down
```

Para detenerlos y eliminar también el volumen de PostgreSQL:

```bash
docker compose down -v
```

El último comando elimina los datos almacenados en el volumen. Utilízalo con precaución.

## 13. Pruebas automatizadas

El proyecto utiliza Pytest para ejecutar pruebas.

Desde la carpeta `backend`:

```bash
python -m pytest app/tests -v
```

Las pruebas deben cubrir progresivamente la seguridad, el registro, el inicio de sesión, los endpoints, las validaciones, los permisos por rol y las operaciones sobre la base de datos.

## 14. Integración con el frontend

El frontend React se comunica con el backend mediante solicitudes HTTP.

En el entorno local, la dirección base prevista es:

```text
http://localhost:8000/api
```

El frontend debe utilizar esta dirección o la URL definida en su configuración. El backend debe permitir el origen del frontend mediante CORS.

Las operaciones que consultan o modifican información persistente requieren una conexión funcional con PostgreSQL.

## 15. Buenas prácticas

- Mantener las credenciales en variables de entorno.
- Validar todos los datos recibidos por la API.
- Gestionar correctamente las transacciones y los errores de base de datos.
- Proteger las rutas según el rol y la propiedad de los registros.
- Evitar exponer información personal innecesaria.
- Ejecutar pruebas antes de integrar cambios.
- Mantener sincronizados los modelos de SQLAlchemy y el esquema de PostgreSQL.
- Utilizar HTTPS y secretos seguros en producción.
- Realizar copias de seguridad periódicas.

## 16. Estado del backend

El backend se encuentra en proceso de integración con el frontend y la base de datos PostgreSQL. La preparación de los módulos, las rutas y los archivos de Docker establece la estructura de trabajo, pero no implica que todas las funcionalidades estén verificadas.

Antes de considerarlo listo para producción, es necesario probar la conexión con PostgreSQL, validar el esquema de la base de datos, revisar los permisos por rol y ejecutar las pruebas automatizadas.

## 17. Contexto académico

**Proyecto:** Rastreo Ambiental: Monitoreo Inteligente de Residuos Sólidos.

**Programa:** Tecnólogo en Análisis y Desarrollo de Software.

**Institución:** Servicio Nacional de Aprendizaje (SENA).

**Propósito:** apoyar el monitoreo de la recolección de residuos sólidos mediante herramientas de geolocalización, gestión operativa y participación ciudadana.
