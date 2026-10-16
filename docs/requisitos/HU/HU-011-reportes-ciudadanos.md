# HU-011 — Registro de reportes ambientales

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-011 |
| **Título** | Registro de reportes ambientales |
| **Módulo** | Reportes |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-011 |

---

## Historia

**Como** ciudadano, **quiero** reportar acumulación de residuos o incumplimientos de recolección incluyendo descripción, categoría y ubicación, **para** informar incidencias que afectan a mi comunidad.

---

## Criterios de Aceptación

### CA-011.1 — Abrir formulario

- **Dado que** tengo acceso al módulo de reportes,
- **cuando** selecciono crear reporte,
- **entonces** debo ver los campos requeridos.

### CA-011.2 — Validar descripción

- **Dado que** estoy creando un reporte,
- **cuando** dejo la descripción vacía,
- **entonces** el sistema debe solicitar una descripción.

### CA-011.3 — Seleccionar categoría

- **Dado que** estoy creando un reporte,
- **cuando** selecciono el tipo de incidencia,
- **entonces** la categoría debe quedar asociada al reporte.

### CA-011.4 — Adjuntar ubicación

- **Dado que** estoy creando un reporte,
- **cuando** autorizo el GPS o ingreso una ubicación válida,
- **entonces** el sistema debe asociar las coordenadas disponibles.

### CA-011.5 — Adjuntar fotografía

- **Dado que** el formulario permite adjuntar imágenes,
- **cuando** selecciono una imagen válida,
- **entonces** el sistema debe aceptar el archivo si cumple los límites configurados.

### CA-011.6 — Confirmar reporte

- **Dado que** completé los datos requeridos,
- **cuando** envío el formulario,
- **entonces** el sistema debe registrar el reporte y mostrar su identificador.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| POST | `/api/v1/reportes` | Registra un reporte ciudadano. |


---

## Notas técnicas

- La descripción y la categoría son obligatorias.
- Cada reporte debe tener un identificador único.
- La ubicación y la fotografía se validan cuando se proporcionan.
- El archivo adjunto debe cumplir los formatos y tamaños permitidos.
