# RF — 008 — Monitoreo de camiones recolectores

**Historia de usuario relacionada:** HU-009

## Descripción

El sistema debe mostrar los camiones registrados y su última posición reportada, junto con la placa, el estado y otros datos operativos disponibles.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre el mapa o el módulo de monitoreo. |
| 2 | El sistema consulta camiones y posiciones disponibles. |
| 3 | Se muestran marcadores para vehículos con coordenadas válidas. |
| 4 | Al seleccionar un marcador, se presentan los datos permitidos. |
| 5 | La información se actualiza según la frecuencia configurada y se indica si está desactualizada. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-008-01 | Cada camión debe tener identificador único. |
| RN-008-02 | Solo se muestran posiciones válidas. |
| RN-008-03 | Se distinguen vehículos operativos, inactivos o sin información reciente. |
| RN-008-04 | La frecuencia depende de la conectividad y del sistema de telemetría. |
| RN-008-05 | Los detalles se limitan según el rol del usuario. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "id_camion": 1,
  "placa": "ABC123",
  "estado": "operativo",
  "latitud": 4.711,
  "longitud": -74.0721,
  "ultima_actualizacion": "timestamp"
}
```

### **Salida (ejemplo)**

```json
Listado y marcadores de camiones con la última ubicación disponible.
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/camiones/ubicaciones` | Según política | Consulta ubicaciones de camiones. |
| **GET** | `/api/v1/camiones/{id_camion}` | Según política | Consulta detalle de un camión. |
