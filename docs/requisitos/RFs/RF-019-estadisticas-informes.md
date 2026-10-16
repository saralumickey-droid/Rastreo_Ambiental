# RF — 019 — Estadísticas e informes de gestión ambiental

**Historia de usuario relacionada:** HU-020

## Descripción

El sistema debe presentar estadísticas basadas en los datos disponibles para apoyar el seguimiento de reportes, rutas, vehículos y actividad de recolección, y permitir exportar informes cuando esa función esté implementada.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario autorizado abre el módulo de análisis. |
| 2 | Selecciona el periodo, zona o indicador disponible. |
| 3 | El sistema consulta y procesa los datos. |
| 4 | Presenta resultados en tablas, gráficos o mapas. |
| 5 | Si se solicita, genera un archivo de informe en el formato habilitado. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-019-01 | Los indicadores deben calcularse a partir de datos registrados. |
| RN-019-02 | Debe indicarse el periodo y los filtros aplicados. |
| RN-019-03 | El acceso a informes depende del rol. |
| RN-019-04 | La exportación debe proteger la información sensible. |
| RN-019-05 | No deben presentarse estimaciones como datos confirmados. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "fecha_inicio": "2026-01-01",
  "fecha_fin": "2026-01-31",
  "zona": "sector"
}
```

### **Salida (ejemplo)**

```json
{
  "periodo": "2026-01",
  "total_reportes": 0,
  "total_rutas": 0,
  "km_recorridos": null
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/estadisticas` | Administrador o funcionario autorizado | Consulta indicadores. |
| **GET** | `/api/v1/informes` | Administrador o funcionario autorizado | Lista informes disponibles. |
| **GET** | `/api/v1/informes/exportar` | Administrador o funcionario autorizado | Exporta si está implementado. |

**Nota:** Las rutas y los ejemplos de entrada/salida son propuestas de documentación. Deben ajustarse a los nombres de campos, permisos y endpoints realmente implementados en Rastreo Ambiental. No deben documentarse como funciones existentes si aún no están desarrolladas.
