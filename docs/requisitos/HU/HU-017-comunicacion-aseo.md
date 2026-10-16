# HU-017 — Comunicación con entidades de aseo

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-017 |
| **Título** | Comunicación con entidades de aseo |
| **Módulo** | Información institucional |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-017 |

---

## Historia

**Como** ciudadano, **quiero** consultar los contactos de las entidades de aseo y los avisos oficiales, **para** acceder a información relacionada con la prestación del servicio.

---

## Criterios de Aceptación

### CA-017.1 — Consultar contactos

- **Dado que** abro la sección de información institucional,
- **cuando** hay datos registrados,
- **entonces** debo ver los canales de contacto disponibles.

### CA-017.2 — Consultar avisos

- **Dado que** abro la sección de avisos,
- **cuando** hay avisos publicados,
- **entonces** debo ver sus mensajes y fechas disponibles.

### CA-017.3 — Publicar aviso

- **Dado que** tengo permisos institucionales,
- **cuando** registro un aviso válido,
- **entonces** el sistema debe publicarlo para los usuarios destinatarios.

### CA-017.4 — Control de permisos

- **Dado que** no tengo permiso para publicar avisos,
- **cuando** intento crear un aviso,
- **entonces** el sistema debe impedir la operación.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/entidades-aseo/contacto` | Consulta contactos registrados. |
| GET | `/api/v1/avisos` | Consulta avisos publicados. |
| POST | `/api/v1/avisos` | Publica un aviso para un rol autorizado. |


---

## Notas técnicas

- Los contactos deben mantenerse actualizados.
- Solo usuarios autorizados pueden publicar avisos oficiales.
- No se deben mostrar como activos canales que no estén configurados.
