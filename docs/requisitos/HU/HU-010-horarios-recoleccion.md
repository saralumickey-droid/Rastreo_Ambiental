# HU-010 — Horarios y tiempos de recolección

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-010 |
| **Título** | Horarios y tiempos de recolección |
| **Módulo** | Rutas |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-010 |

---

## Historia

**Como** ciudadano, **quiero** consultar los horarios y días de recolección de mi sector, **para** organizar la disposición de mis residuos y conocer cuándo podría pasar el camión.

---

## Criterios de Aceptación

### CA-010.1 — Consultar horario

- **Dado que** estoy en el mapa o módulo de rutas,
- **cuando** selecciono una ruta o zona,
- **entonces** debo ver los horarios y días registrados.

### CA-010.2 — Ver asignación

- **Dado que** consulto una ruta,
- **cuando** existe un conductor asignado y la información está disponible,
- **entonces** debo ver los datos de asignación permitidos.

### CA-010.3 — Tiempo estimado

- **Dado que** consulto un camión con datos suficientes,
- **cuando** el sistema dispone de información actualizada para estimar la llegada,
- **entonces** debo ver un tiempo aproximado identificado como estimación.

### CA-010.4 — Sin datos suficientes

- **Dado que** consulto una ruta sin horario o información de seguimiento,
- **cuando** el sistema no puede calcular una estimación,
- **entonces** debo ver un aviso de que el dato no está disponible.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/rutas/{id_ruta}/horarios` | Consulta horarios registrados. |
| GET | `/api/v1/camiones/{id_camion}/estimacion` | Consulta la estimación cuando sea posible. |


---

## Notas técnicas

- Los horarios deben corresponder a la ruta seleccionada.
- Una estimación de llegada no es una hora garantizada.
- No se deben inventar horarios ni tiempos cuando no hay datos.
