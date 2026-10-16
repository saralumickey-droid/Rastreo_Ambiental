# Rastreo_Ambiental
Rastreo Ambiental — Sistema de Monitoreo de Residuos Sólidos — React + TypeScript + FastAPI + PostgreSQL (proyecto educativo SENA)

# Rastreo Ambiental
### Monitoreo Inteligente de Residuos Sólidos

**Optimización de la recolección mediante geolocalización y participación ciudadana.**

## 1. Descripción del proyecto

Rastreo Ambiental es una plataforma web orientada a mejorar el seguimiento y la gestión de la recolección de residuos sólidos. Busca facilitar el acceso a información sobre camiones recolectores, rutas de servicio, horarios, puntos de reciclaje y reportes ciudadanos.

La plataforma permite centralizar información para apoyar la gestión de las entidades de aseo, facilitar la participación ciudadana y mejorar el seguimiento de las actividades relacionadas con la recolección de residuos.

El proyecto está planteado inicialmente para la ciudad de Bogotá, con posibilidad de ampliarse a otras zonas según las necesidades del servicio.

## 2. Problemática

La falta de información clara y accesible sobre los horarios, recorridos y ubicación de los camiones recolectores puede ocasionar acumulación de residuos, dificultades para organizar su disposición y demoras en la atención de novedades.

Rastreo Ambiental propone una solución tecnológica que integra geolocalización, gestión de rutas y participación ciudadana para apoyar el control operativo y el acceso a la información.

## 3. Objetivo general

Facilitar el monitoreo de la recolección de residuos sólidos mediante una plataforma web que integre geolocalización, gestión de rutas, seguimiento de camiones y participación ciudadana.

## 4. Objetivos específicos

- Consultar la ubicación de los camiones recolectores y la información de sus rutas asignadas.
- Facilitar el registro y seguimiento de reportes relacionados con la recolección de residuos.
- Identificar puntos de reciclaje y consultar información sobre los materiales que reciben.
- Proporcionar herramientas de gestión para que las entidades de aseo y los administradores supervisen la operación y consulten información relevante.

## 5. Funcionalidades principales

### Ciudadano
- Consultar información sobre camiones y rutas.
- Visualizar ubicaciones y puntos de reciclaje disponibles.
- Registrar reportes sobre novedades relacionadas con la recolección.
- Consultar notificaciones asociadas a su cuenta.

### Funcionario
- Consultar y gestionar reportes ciudadanos según sus permisos.
- Apoyar el seguimiento de las novedades operativas.
- Consultar información de rutas y camiones.

### Conductor
- Consultar la información de su ruta asignada.
- Apoyar el registro y seguimiento de novedades de la operación.
- Facilitar el control de las actividades de recolección que se implementen en el sistema.

### Administrador
- Administrar la información de los usuarios y los recursos operativos.
- Supervisar camiones, rutas, reportes y puntos de reciclaje.
- Consultar información general para apoyar la toma de decisiones.

> Las funcionalidades descritas corresponden al alcance previsto. Su disponibilidad depende de que los módulos, permisos y operaciones respectivos estén implementados.

## 6. Tecnologías utilizadas

### Frontend
- React
- TypeScript
- Vite
- CSS

### Backend
- Python
- FastAPI
- Uvicorn
- SQLAlchemy
- Pydantic
- JWT para autenticación
- Argon2 para protección de contraseñas

### Base de datos
- PostgreSQL
- Psycopg2

### Contenedores
- Docker
- Docker Compose

### Mapas
- OpenStreetMap
- Leaflet, previsto para la visualización cartográfica del proyecto.

## 7. Arquitectura del proyecto

El proyecto se organiza en dos componentes principales:

- **Frontend:** interfaz con la que interactúan los ciudadanos, funcionarios, conductores y administradores.
- **Backend:** API responsable de procesar las solicitudes, validar la información, gestionar la autenticación y comunicarse con la base de datos.

PostgreSQL almacena la información persistente. Docker Compose permite ejecutar los servicios del backend y la base de datos dentro de contenedores.

## 8. Estructura de carpetas

```text
Rastreo_Ambiental/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── tests/
│   │   └── main.py
│   ├── .env
│   ├── .gitignore
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── compose.yaml
│   ├── db.sql
│   └── requirements.txt
└── README.md
```

## 9. Requisitos previos

Para trabajar con el proyecto se necesita:

- Python 3.12 o compatible con las dependencias.
- Node.js y npm para instalar y ejecutar el frontend React.
- Docker Desktop o Docker Engine con Docker Compose, si se utiliza la ejecución mediante contenedores.
- Un editor de código, como Visual Studio Code.

Si se ejecuta PostgreSQL fuera de Docker, también será necesario disponer de una instancia accesible de PostgreSQL.

## 10. Configuración del entorno

### Variables del backend

En `backend/.env` se deben definir las variables de configuración correspondientes:

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

Los valores son ejemplos y deben ajustarse al entorno de ejecución.

Cuando se utilice Docker Compose, el backend se conecta al servicio PostgreSQL mediante el nombre `db`. La configuración de Compose suministrada define esa dirección para el contenedor del backend.

**Seguridad:** no se deben publicar contraseñas, claves JWT ni archivos `.env` con secretos en repositorios públicos.

## 11. Ejecución con Docker

Una vez instalado y disponible Docker, abre una terminal en la carpeta `backend` y ejecuta:

```bash
docker compose up --build
```

Para detener los servicios:

```bash
docker compose down
```

Para detenerlos y eliminar también el volumen de datos de PostgreSQL:

```bash
docker compose down -v
```

**Advertencia:** el último comando elimina los datos guardados en el volumen de la base de datos. Utilízalo únicamente cuando realmente quieras borrar ese almacenamiento.

El archivo `db.sql` se configura para ejecutarse durante la inicialización de una base de datos nueva. Si el volumen ya contiene una base de datos, el script no se ejecutará nuevamente de forma automática.

## 12. Ejecución local del backend

Desde la carpeta `backend`, crea y activa un entorno virtual.

En Windows PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

Después de configurar una base de datos PostgreSQL accesible, ejecuta:

```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

La API estará disponible en:

- Inicio: http://127.0.0.1:8000/
- Documentación interactiva: http://127.0.0.1:8000/docs
- Estado de la API: http://127.0.0.1:8000/api/health

## 13. Ejecución local del frontend

En una terminal independiente, entra en la carpeta `frontend`:

```bash
npm install
npm run dev
```

Vite normalmente inicia el frontend en:

http://localhost:5173

La URL de la API utilizada por el frontend debe coincidir con la dirección donde se esté ejecutando el backend.

## 14. Pruebas

El backend utiliza `pytest` para las pruebas automatizadas.

Desde la carpeta `backend`:

```bash
python -m pytest app/tests -v
```

Las pruebas disponibles deben ampliarse conforme se implementen y verifiquen los servicios, los endpoints, la autenticación y los permisos por rol.

## 15. Base de datos

El modelo de datos contempla las siguientes entidades principales:

- Usuario
- Ciudadano
- Funcionario
- Administrador
- Conductor
- Camión
- Ruta
- Punto de ruta
- Reporte
- Punto de reciclaje
- Notificación

Las relaciones permiten asociar los usuarios con sus roles y vincular las rutas, los camiones, los reportes y las notificaciones con sus respectivos registros.

El esquema SQL debe mantenerse sincronizado con los modelos de SQLAlchemy.

## 16. Seguridad y buenas prácticas

- Proteger las contraseñas mediante funciones de hash.
- Validar los datos recibidos por la API.
- Utilizar tokens de acceso para las operaciones autenticadas.
- Restringir el acceso a los datos según el rol y la propiedad de los registros.
- Mantener las credenciales fuera del repositorio.
- Configurar CORS únicamente para los orígenes necesarios en producción.
- Utilizar HTTPS y una gestión segura de secretos al desplegar la aplicación.
- Realizar copias de seguridad periódicas de la base de datos.

## 17. Estado del proyecto

Rastreo Ambiental se encuentra en proceso de integración de su frontend, backend y base de datos.

La estructura propuesta prepara el proyecto para ejecutarse localmente o mediante contenedores. Antes de considerar la aplicación lista para producción, deben verificarse la compatibilidad entre los modelos y el esquema SQL, las operaciones CRUD, los permisos por rol, las pruebas automatizadas y la conexión entre el frontend y la API.

## 18. Autoría y contexto académico

Proyecto desarrollado en el marco del programa Tecnólogo en Análisis y Desarrollo de Software del SENA.

**Proyecto:** Rastreo Ambiental: Monitoreo Inteligente de Residuos Sólidos.

**Propósito:** contribuir a una gestión más organizada, informada y participativa de la recolección de residuos sólidos mediante herramientas tecnológicas.
