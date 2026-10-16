# HU-014 — Consulta de puntos de reciclaje

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-014 |
| **Título** | Consulta de puntos de reciclaje |
| **Módulo** | Reciclaje |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-014 |

---

## Historia

**Como** ciudadano, **quiero** localizar puntos de reciclaje y consultar materiales aceptados y horarios, **para** disponer correctamente los residuos aprovechables.

---

## Criterios de Aceptación

### CA-014.1 — Ver puntos

- **Dado que** abro el mapa o módulo de reciclaje,
- **cuando** hay puntos registrados,
- **entonces** debo ver sus ubicaciones.

### CA-014.2 — Consultar detalles

- **Dado que** selecciono un punto de reciclaje,
- **cuando** el sistema tiene información asociada,
- **entonces** debo ver los materiales aceptados y horarios disponibles.

### CA-014.3 — Información incompleta

- **Dado que** un punto no tiene horario registrado,
- **cuando** consulto sus detalles,
- **entonces** el sistema debe indicar que el horario no está informado.

### CA-014.4 — Consultar ruta

- **Dado que** selecciono un punto,
- **cuando** la función de navegación está disponible,
- **entonces** debo poder consultar la ruta hacia el punto.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/puntos-reciclaje` | Lista los puntos de reciclaje. |
| GET | `/api/v1/puntos-reciclaje/{id_punto}` | Consulta el detalle de un punto. |


---

## Notas técnicas

- Cada punto debe tener una ubicación válida.
- Solo se muestran datos registrados.
- Los materiales, horarios y rutas deben reflejar información disponible.
