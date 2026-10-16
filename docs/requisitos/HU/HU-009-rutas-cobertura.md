# HU-009 — Gestión de rutas y zonas de cobertura

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-009 |
| **Título** | Gestión de rutas y zonas de cobertura |
| **Módulo** | Rutas |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-009 |

---

## Historia

**Como** administrador o funcionario autorizado, **quiero** consultar y gestionar las rutas y zonas de cobertura, **para** organizar los recorridos de recolección de residuos sólidos.

---

## Criterios de Aceptación

### CA-009.1 — Consultar rutas

- **Dado que** tengo acceso al módulo de rutas,
- **cuando** lo abro,
- **entonces** debo ver las rutas registradas.

### CA-009.2 — Visualizar cobertura

- **Dado que** estoy viendo el mapa,
- **cuando** hay polígonos de cobertura registrados,
- **entonces** debo ver las zonas representadas en el mapa.

### CA-009.3 — Crear ruta

- **Dado que** tengo permisos para gestionar rutas,
- **cuando** registro una ruta con puntos válidos,
- **entonces** el sistema debe guardar y mostrar la ruta.

### CA-009.4 — Validar ruta

- **Dado que** intento guardar una ruta,
- **cuando** sus coordenadas son inválidas o incompletas,
- **entonces** el sistema debe indicar los datos que debo corregir.

### CA-009.5 — Restringir edición

- **Dado que** no tengo permisos de administración,
- **cuando** intento modificar una ruta,
- **entonces** el sistema debe denegar la operación.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/rutas` | Lista rutas. |
| GET | `/api/v1/rutas/{id_ruta}` | Consulta una ruta. |
| POST | `/api/v1/rutas` | Crea una ruta autorizadamente. |
| PUT | `/api/v1/rutas/{id_ruta}` | Actualiza una ruta autorizadamente. |


---

## Notas técnicas

- Las rutas deben tener identificador único y coordenadas válidas.
- Solo roles autorizados pueden crear o modificar rutas.
- Las asignaciones y horarios deben corresponder a datos registrados.
