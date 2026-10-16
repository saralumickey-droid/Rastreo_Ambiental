# HU-019 — Estadísticas e informes ambientales

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-019 |
| **Título** | Estadísticas e informes ambientales |
| **Módulo** | Análisis y reportes |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-019 |

---

## Historia

**Como** administrador o funcionario autorizado, **quiero** consultar estadísticas sobre reportes, rutas y operación de recolección, **para** evaluar el funcionamiento del servicio y apoyar la toma de decisiones.

---

## Criterios de Aceptación

### CA-019.1 — Consultar indicadores

- **Dado que** tengo permisos para ver estadísticas,
- **cuando** abro el módulo de análisis,
- **entonces** debo ver los indicadores disponibles.

### CA-019.2 — Filtrar periodo

- **Dado que** estoy consultando estadísticas,
- **cuando** selecciono un periodo o zona,
- **entonces** los resultados deben corresponder a los filtros seleccionados.

### CA-019.3 — Datos insuficientes

- **Dado que** no existen registros para el periodo,
- **cuando** consulto los indicadores,
- **entonces** el sistema debe indicar que no hay datos suficientes.

### CA-019.4 — Exportar informe

- **Dado que** la exportación está habilitada,
- **cuando** solicito un informe,
- **entonces** el sistema debe generar el archivo con los filtros aplicados.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/estadisticas` | Consulta indicadores disponibles. |
| GET | `/api/v1/informes` | Lista informes disponibles. |
| GET | `/api/v1/informes/exportar` | Exporta un informe si está implementado. |


---

## Notas técnicas

- Los indicadores deben calcularse con datos registrados.
- Se deben mostrar los filtros y periodos usados.
- El acceso y la exportación dependen del rol y los permisos.
