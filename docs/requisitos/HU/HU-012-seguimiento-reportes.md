# HU-012 — Seguimiento de reportes

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-012 |
| **Título** | Seguimiento de reportes |
| **Módulo** | Reportes |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-012 |

---

## Historia

**Como** ciudadano, **quiero** consultar el historial y estado de mis reportes, **para** conocer el avance de atención de las incidencias que informé.

---

## Criterios de Aceptación

### CA-012.1 — Ver historial

- **Dado que** tengo una sesión iniciada,
- **cuando** abro mis reportes,
- **entonces** debo ver los reportes asociados a mi cuenta.

### CA-012.2 — Consultar detalle

- **Dado que** estoy viendo mi historial,
- **cuando** selecciono un reporte,
- **entonces** debo ver su descripción, fecha y estado disponible.

### CA-012.3 — Ver actualización

- **Dado que** un funcionario actualizó mi reporte,
- **cuando** consulto su detalle,
- **entonces** debo ver el estado actualizado.

### CA-012.4 — Proteger información

- **Dado que** intento consultar un reporte ajeno sin permiso,
- **cuando** el sistema valida el acceso,
- **entonces** debe impedir que consulte información no autorizada.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/reportes/mis-reportes` | Lista los reportes del usuario autenticado. |
| GET | `/api/v1/reportes/{id_reporte}` | Consulta un reporte si el usuario tiene permiso. |


---

## Notas técnicas

- El ciudadano solo puede consultar sus reportes, salvo permisos específicos.
- Los estados deben pertenecer al flujo definido.
- El sistema no debe exponer reportes de otros usuarios sin autorización.
