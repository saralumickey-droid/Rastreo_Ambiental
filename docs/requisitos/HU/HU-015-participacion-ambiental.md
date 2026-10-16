# HU-015 — Participación y educación ambiental

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-015 |
| **Título** | Participación y educación ambiental |
| **Módulo** | Participación ciudadana |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-015 |

---

## Historia

**Como** ciudadano, **quiero** consultar consejos ambientales y enviar sugerencias relacionadas con reciclaje, **para** contribuir al cuidado del entorno y al mejoramiento del servicio.

---

## Criterios de Aceptación

### CA-015.1 — Consultar consejos

- **Dado que** abro la sección ambiental,
- **cuando** hay contenido publicado,
- **entonces** debo ver consejos de reciclaje.

### CA-015.2 — Enviar sugerencia

- **Dado que** estoy en el formulario de sugerencias,
- **cuando** ingreso una propuesta válida,
- **entonces** el sistema debe registrar mi sugerencia.

### CA-015.3 — Confirmar envío

- **Dado que** envío una sugerencia,
- **cuando** el sistema la guarda correctamente,
- **entonces** debo recibir una confirmación.

### CA-015.4 — Revisión de sugerencia

- **Dado que** una sugerencia fue registrada,
- **cuando** un funcionario autorizado la revisa,
- **entonces** debe poder aprobarla, rechazarla o solicitar ajustes según el flujo definido.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/consejos-ambientales` | Consulta contenido ambiental, si está disponible. |
| POST | `/api/v1/sugerencias-reciclaje` | Registra una sugerencia, si está habilitado. |


---

## Notas técnicas

- Las sugerencias no deben publicarse como puntos oficiales sin revisión.
- El contenido ambiental debe ser pertinente y verificable.
- Las funciones disponibles dependen del alcance aprobado.
