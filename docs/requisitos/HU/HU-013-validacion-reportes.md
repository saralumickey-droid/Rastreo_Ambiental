# HU-013 — Validación y priorización de reportes

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-013 |
| **Título** | Validación y priorización de reportes |
| **Módulo** | Gestión de reportes |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-013 |

---

## Historia

**Como** funcionario, **quiero** revisar, validar y priorizar los reportes ciudadanos, **para** organizar su atención según la cobertura y las necesidades de cada sector.

---

## Criterios de Aceptación

### CA-013.1 — Ver pendientes

- **Dado que** tengo rol de funcionario autorizado,
- **cuando** abro la bandeja de reportes,
- **entonces** debo ver los reportes pendientes de revisión.

### CA-013.2 — Revisar información

- **Dado que** selecciono un reporte,
- **cuando** consulto sus datos y ubicación,
- **entonces** debo disponer de la información registrada para evaluarlo.

### CA-013.3 — Validar cobertura

- **Dado que** el reporte contiene coordenadas,
- **cuando** compruebo la zona de cobertura registrada,
- **entonces** el sistema debe mostrar si está dentro de la cobertura cuando existan datos suficientes.

### CA-013.4 — Asignar prioridad

- **Dado que** estoy revisando un reporte,
- **cuando** selecciono una prioridad permitida,
- **entonces** el sistema debe guardar la prioridad.

### CA-013.5 — Actualizar estado

- **Dado que** he revisado el reporte,
- **cuando** selecciono el nuevo estado permitido,
- **entonces** el sistema debe guardar el cambio y mostrarlo a los usuarios autorizados.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/reportes/pendientes` | Lista reportes pendientes. |
| PATCH | `/api/v1/reportes/{id_reporte}/prioridad` | Actualiza la prioridad. |
| PATCH | `/api/v1/reportes/{id_reporte}/estado` | Actualiza el estado. |


---

## Notas técnicas

- Solo funcionarios autorizados pueden validar o priorizar reportes.
- La validación de cobertura depende de coordenadas y zonas registradas.
- Los cambios deben respetar el flujo de estados definido.
