# HU-006 — Visualización del mapa interactivo

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-006 |
| **Título** | Visualización del mapa interactivo |
| **Módulo** | Mapa y geolocalización |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-006 |

---

## Historia

**Como** ciudadano, **quiero** consultar un mapa interactivo con camiones, rutas, zonas de cobertura y puntos de reciclaje, **para** ubicar los servicios de recolección y reciclaje de mi ciudad.

---

## Criterios de Aceptación

### CA-006.1 — Carga del mapa

- **Dado que** abro el módulo de mapa,
- **cuando** la página termina de cargar,
- **entonces** debo ver el mapa base de la ciudad configurada.

### CA-006.2 — Controles de navegación

- **Dado que** estoy viendo el mapa,
- **cuando** uso el zoom o desplazo la vista,
- **entonces** el mapa debe responder a mis acciones.

### CA-006.3 — Capas geográficas

- **Dado que** el mapa está cargado,
- **cuando** los datos están disponibles,
- **entonces** debo distinguir los camiones, rutas, zonas y puntos de reciclaje.

### CA-006.4 — Error de carga

- **Dado que** el mapa no puede obtener los datos,
- **cuando** se presenta un error de conexión,
- **entonces** debo recibir un aviso y poder reintentar.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/mapa/datos` | Obtiene las capas de información del mapa. |


---

## Notas técnicas

- El mapa debe permitir zoom y desplazamiento.
- Las capas se muestran solo cuando sus datos están disponibles.
- La visualización debe adaptarse a dispositivos compatibles.
