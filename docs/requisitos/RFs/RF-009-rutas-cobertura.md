# RF — 009 — Gestión de rutas y zonas de cobertura

**Historia de usuario relacionada:** HU-010

## Descripción

El sistema debe permitir consultar rutas y zonas de cobertura y, a los roles autorizados, crear o actualizar recorridos representados geográficamente en el mapa.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre el módulo de rutas. |
| 2 | El sistema consulta rutas y zonas disponibles. |
| 3 | El mapa dibuja recorridos y polígonos de cobertura. |
| 4 | Un usuario autorizado crea o modifica una ruta. |
| 5 | El sistema valida y guarda los cambios. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-009-01 | Cada ruta tiene un identificador único. |
| RN-009-02 | Las coordenadas y el orden de puntos deben ser válidos. |
| RN-009-03 | Solo los roles autorizados pueden modificar rutas. |
| RN-009-04 | Las rutas pueden asociarse a horarios y vehículos si esos datos existen. |
| RN-009-05 | Los cambios se validan antes de publicarse. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "nombre": "Ruta Norte",
  "puntos": [
    {
      "latitud": 4.711,
      "longitud": -74.0721
    },
    {
      "latitud": 4.72,
      "longitud": -74.08
    }
  ],
  "dias_operacion": [
    "lunes",
    "miércoles",
    "viernes"
  ]
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Ruta guardada correctamente"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/rutas` | Según política | Lista rutas. |
| **GET** | `/api/v1/rutas/{id_ruta}` | Según política | Consulta una ruta. |
| **POST** | `/api/v1/rutas` | Rol autorizado | Crea una ruta. |
| **PUT** | `/api/v1/rutas/{id_ruta}` | Rol autorizado | Actualiza una ruta. |
