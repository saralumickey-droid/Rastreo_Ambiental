# HU-018 — Administración de camiones, conductores y operación

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-018 |
| **Título** | Administración de camiones, conductores y operación |
| **Módulo** | Administración operativa |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-018 |

---

## Historia

**Como** administrador, **quiero** gestionar camiones, conductores y asignaciones de rutas, **para** mantener organizada la operación de recolección.

---

## Criterios de Aceptación

### CA-018.1 — Consultar flota

- **Dado que** tengo permisos administrativos,
- **cuando** abro el módulo de camiones,
- **entonces** debo ver los vehículos registrados.

### CA-018.2 — Registrar camión

- **Dado que** tengo permisos para administrar la flota,
- **cuando** ingreso datos válidos de un camión,
- **entonces** el sistema debe guardar el vehículo.

### CA-018.3 — Gestionar conductores

- **Dado que** tengo permisos administrativos,
- **cuando** consulto o actualizo un conductor,
- **entonces** el sistema debe mostrar o guardar los datos permitidos.

### CA-018.4 — Asignar ruta

- **Dado que** selecciono un camión y una ruta,
- **cuando** la asignación cumple las reglas operativas,
- **entonces** el sistema debe registrar la asignación.

### CA-018.5 — Validar permisos

- **Dado que** no tengo permisos de administración,
- **cuando** intento modificar la flota,
- **entonces** el sistema debe denegar la operación.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/camiones` | Lista camiones. |
| POST | `/api/v1/camiones` | Registra un camión. |
| PUT | `/api/v1/camiones/{id_camion}` | Actualiza un camión. |
| GET | `/api/v1/conductores` | Lista conductores. |


---

## Notas técnicas

- Las placas y documentos identificadores deben validarse y evitar duplicados.
- Solo roles autorizados pueden gestionar la flota.
- Las asignaciones deben relacionar registros existentes.
