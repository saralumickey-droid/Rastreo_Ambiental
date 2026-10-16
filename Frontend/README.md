
# Rastreo Ambiental — Frontend

**Monitoreo Inteligente de Residuos Sólidos**

Optimización de la recolección mediante geolocalización y participación ciudadana.

## 1. Descripción

El frontend de Rastreo Ambiental es la interfaz web mediante la cual los ciudadanos, funcionarios, conductores y administradores interactúan con la plataforma.

Su propósito es facilitar la consulta de información sobre rutas de recolección, camiones, puntos de reciclaje y reportes ciudadanos, además de proporcionar interfaces de gestión según el rol del usuario.

La aplicación se desarrolla con React y TypeScript, utilizando Vite como herramienta de desarrollo y construcción.

## 2. Tecnologías utilizadas

- **React:** construcción de interfaces mediante componentes.
- **TypeScript:** tipado estático para mejorar la organización y confiabilidad del código.
- **Vite:** servidor de desarrollo y herramienta de compilación.
- **React Router:** navegación entre páginas y módulos.
- **CSS:** estilos y diseño visual de la plataforma.
- **Leaflet y OpenStreetMap:** tecnologías previstas para la visualización de mapas, rutas y ubicaciones.

## 3. Funcionalidades previstas

### Ciudadano
- Registro e inicio de sesión.
- Consulta de rutas y camiones recolectores.
- Visualización de puntos de reciclaje.
- Registro y seguimiento de reportes.
- Consulta de notificaciones.

### Funcionario
- Consulta y gestión de reportes según sus permisos.
- Seguimiento de novedades operativas.
- Consulta de información de rutas y camiones.

### Conductor
- Consulta de la ruta asignada.
- Visualización de información operativa.
- Registro de novedades relacionadas con la recolección, cuando el módulo esté disponible.

### Administrador
- Gestión de usuarios y conductores.
- Consulta y administración de camiones y rutas.
- Supervisión de reportes y novedades.
- Acceso a módulos de seguimiento y análisis implementados en la aplicación.

La disponibilidad de cada funcionalidad depende de su implementación y de la conexión con el backend.

## 4. Estructura del proyecto


## 5. Requisitos previos

Antes de ejecutar el frontend, instala:

- Node.js en una versión compatible con la versión de Vite del proyecto.
- npm, incluido normalmente con Node.js.
- Visual Studio Code u otro editor de código.

También se recomienda tener el backend de Rastreo Ambiental disponible para probar las operaciones que requieren datos del servidor.

## 6. Instalación

Abre una terminal dentro de la carpeta `frontend` y ejecuta:

```bash
npm install
```

Este comando instala las dependencias declaradas en `package.json`.

## 7. Configuración de la API

Crea un archivo `.env` en la raíz de `frontend`:

```dotenv
VITE_API_URL=http://localhost:8000/api
```

Esta variable establece la dirección base de la API para el entorno local.

En los servicios de React puedes leerla así:

```typescript
const API_URL = import.meta.env.VITE_API_URL;
```

Utiliza esta variable en las solicitudes HTTP de los módulos que se comuniquen con el backend.

**Importante:** las variables que comienzan por `VITE_` quedan expuestas al código del navegador. No almacenes contraseñas, claves privadas ni secretos en ellas.

## 8. Ejecutar en desarrollo

Desde la carpeta `frontend`, ejecuta:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación. Normalmente será:

http://localhost:5173

Si el puerto está ocupado, Vite puede seleccionar otro disponible.

## 9. Compilar para producción

Para comprobar los tipos y compilar la aplicación, utiliza los scripts definidos en `package.json`.

En un proyecto Vite con TypeScript, normalmente se ejecuta:

```bash
npm run build
```

Los archivos generados se guardan habitualmente en la carpeta `dist/`.

Para probar localmente la compilación:

```bash
npm run preview
```

El comando `npm run preview` sirve para revisar la compilación generada; no sustituye un servidor de producción.

## 10. Comunicación con el backend

El frontend consume los endpoints de FastAPI para operaciones como autenticación, consulta de rutas, camiones, reportes, reciclaje y notificaciones.

En el entorno local, las direcciones previstas son:

| Servicio | Dirección |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend | `http://localhost:8000` |
| Documentación de la API | `http://localhost:8000/docs` |

Para que la comunicación funcione, el backend debe estar activo, CORS debe permitir el origen del frontend y las solicitudes deben utilizar las rutas definidas en la API.

Las operaciones protegidas deben enviar el token de acceso correspondiente en la cabecera `Authorization`, utilizando el esquema `Bearer`.

## 11. Mapas y geolocalización

El proyecto contempla el uso de Leaflet y OpenStreetMap para visualizar información geográfica relacionada con camiones, rutas y puntos de reciclaje.

La ubicación de los camiones en tiempo real requiere que el backend reciba, almacene y actualice las coordenadas correspondientes. Mostrar un mapa por sí solo no garantiza que exista seguimiento GPS en tiempo real.

## 12. Diseño visual

La identidad visual del proyecto utiliza una paleta de verdes relacionada con el cuidado ambiental:

- `#002214`
- `#074423`
- `#376F2F`
- `#76A438`
- `#CEE040`

Los estilos deben mantener una interfaz coherente, legible y adaptable a distintos tamaños de pantalla.

## 13. Pruebas y validaciones

Antes de publicar el frontend, verifica:

- Que las páginas y rutas de navegación funcionen correctamente.
- Que los formularios validen los datos requeridos.
- Que los errores del backend se presenten de manera comprensible.
- Que los permisos de navegación coincidan con el rol del usuario.
- Que las solicitudes HTTP utilicen la URL configurada.
- Que `npm run build` finalice correctamente.
- Que los datos sensibles no se expongan en el navegador.

## 14. Despliegue

Para preparar la aplicación para despliegue:

1. Configura la URL de producción de la API.
2. Ejecuta `npm run build`.
3. Publica el contenido generado en `dist/` mediante un servicio compatible con aplicaciones frontend estáticas.
4. Configura el backend para aceptar únicamente los orígenes necesarios.
5. Verifica las rutas de navegación y las solicitudes a la API en el entorno publicado.

## 15. Estado del frontend

El frontend forma parte del proyecto Rastreo Ambiental y se integra con una API desarrollada en FastAPI. La disponibilidad real de los módulos depende de su implementación, las rutas de navegación, los servicios HTTP y la conexión con el backend.

## 16. Contexto académico

Proyecto desarrollado en el marco del programa Tecnólogo en Análisis y Desarrollo de Software del SENA.

**Nombre:** Rastreo Ambiental: Monitoreo Inteligente de Residuos Sólidos.

**Propósito:** facilitar el acceso a información sobre la recolección de residuos y apoyar la participación ciudadana mediante una plataforma web.
