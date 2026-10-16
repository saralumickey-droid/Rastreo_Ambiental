# RF — 014 — Consulta de puntos de reciclaje

**Historia de usuario relacionada:** HU-015

## Descripción

El sistema debe mostrar puntos de reciclaje y centros de acopio en el mapa y permitir consultar sus materiales aceptados, ubicación y horarios cuando la información esté registrada.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre la capa o módulo de reciclaje. |
| 2 | El sistema muestra los puntos disponibles. |
| 3 | El usuario selecciona un punto. |
| 4 | La interfaz presenta ubicación, materiales aceptados y horario disponible. |
| 5 | El usuario puede consultar cómo llegar si existe navegación habilitada. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-014-01 | Cada punto debe contar con identificador y ubicación válidos. |
| RN-014-02 | Solo se muestran datos registrados y vigentes. |
| RN-014-03 | Los horarios y materiales deben actualizarse cuando cambien. |
| RN-014-04 | Si un dato no está disponible, se indica como no informado. |
| RN-014-05 | La ruta hacia el punto depende de las funciones cartográficas disponibles. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "id_punto": 1
}
```

### **Salida (ejemplo)**

```json
{
  "id_punto": 1,
  "nombre": "Punto de reciclaje",
  "materiales": [
    "papel",
    "plástico"
  ],
  "horario": "No informado",
  "latitud": 4.711,
  "longitud": -74.0721
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/puntos-reciclaje` | Según política | Lista puntos de reciclaje. |
| **GET** | `/api/v1/puntos-reciclaje/{id_punto}` | Según política | Consulta detalle. |
