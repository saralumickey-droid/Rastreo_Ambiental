# HU-016 — Notificaciones y alertas

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-016 |
| **Título** | Notificaciones y alertas |
| **Módulo** | Notificaciones |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-016 |

---

## Historia

**Como** usuario, **quiero** recibir notificaciones sobre cambios de rutas, novedades de recolección y actualizaciones de mis reportes, **para** mantenerme informado sobre el servicio.

---

## Criterios de Aceptación

### CA-016.1 — Consultar notificaciones

- **Dado que** tengo una sesión iniciada,
- **cuando** abro el módulo de notificaciones,
- **entonces** debo ver las notificaciones disponibles para mi cuenta.

### CA-016.2 — Notificación relevante

- **Dado que** se registra un evento relevante para mi zona o reporte,
- **cuando** el sistema procesa el evento,
- **entonces** debo recibir o visualizar la notificación mediante los canales habilitados.

### CA-016.3 — Marcar como leída

- **Dado que** tengo notificaciones pendientes,
- **cuando** selecciono una notificación,
- **entonces** el sistema debe actualizar su estado de lectura.

### CA-016.4 — Preferencias

- **Dado que** la plataforma permite configurar avisos,
- **cuando** modifico mis preferencias,
- **entonces** el sistema debe guardar las opciones disponibles.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/notificaciones` | Lista las notificaciones del usuario. |
| PATCH | `/api/v1/notificaciones/{id}/leida` | Marca una notificación como leída. |


---

## Notas técnicas

- Las notificaciones deben corresponder a eventos reales y destinatarios adecuados.
- Correo, push y alertas sonoras requieren soporte y configuración específicos.
- No deben divulgarse datos personales innecesarios.
