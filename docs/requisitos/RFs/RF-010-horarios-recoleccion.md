# RF — 010 — Consulta de horarios y tiempos de recolección

**Historia de usuario relacionada:** HU-011

## Descripción

El sistema debe permitir consultar horarios, días de servicio, ruta y asignación de conductor disponibles. Cuando existan datos suficientes, puede mostrar una estimación aproximada de llegada del camión.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario selecciona una ruta, zona o camión. |
| 2 | El sistema consulta horarios y asignaciones. |
| 3 | Si hay datos suficientes, calcula o muestra la estimación de llegada. |
| 4 | La interfaz muestra la última actualización. |
| 5 | Si faltan datos, informa que la estimación no está disponible. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-010-01 | Los horarios deben corresponder a la ruta consultada. |
| RN-010-02 | Se muestran los días de operación registrados. |
| RN-010-03 | Los datos del conductor respetan las políticas de acceso. |
| RN-010-04 | La ETA es aproximada, no garantizada. |
| RN-010-05 | No se calcula ETA confiable sin datos suficientes. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "id_ruta": 1,
  "nombre_ruta": "Ruta Norte",
  "dias_operacion": [
    "lunes",
    "miércoles",
    "viernes"
  ],
  "hora_programada": "08:00",
  "eta_minutos": null
}
```

### **Salida (ejemplo)**

```json
Horarios y estimación disponible, o aviso de que no puede calcularse.
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/rutas/{id_ruta}/horarios` | Según política | Consulta horarios. |
| **GET** | `/api/v1/camiones/{id_camion}/estimacion` | Según política | Consulta ETA disponible. |

