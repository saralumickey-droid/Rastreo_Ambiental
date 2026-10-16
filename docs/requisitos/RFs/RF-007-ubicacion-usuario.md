# RF — 007 — Gestión de la ubicación del usuario

**Historia de usuario relacionada:** HU-008

## Descripción

El sistema debe solicitar permiso de ubicación y, si el usuario lo autoriza, mostrar su posición actual en el mapa para facilitar consultas cercanas.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario selecciona la opción de ubicación. |
| 2 | El navegador solicita permiso. |
| 3 | Si se autoriza, el sistema obtiene las coordenadas. |
| 4 | El mapa muestra un marcador de ubicación. |
| 5 | Si se deniega el permiso, el mapa continúa disponible para navegación manual. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-007-01 | La ubicación se obtiene con autorización del usuario. |
| RN-007-02 | Se deben manejar permisos denegados y errores de geolocalización. |
| RN-007-03 | Las coordenadas deben ser válidas. |
| RN-007-04 | No se almacena ni comparte la ubicación de forma persistente sin justificación y autorización. |
| RN-007-05 | El mapa debe seguir funcionando sin GPS. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "latitud": 4.711,
  "longitud": -74.0721
}
```

### **Salida (ejemplo)**

```json
Marcador con la ubicación actual, si el usuario concede permiso.
```

---

## Endpoint

Esta función puede realizarse desde el cliente y no requiere un endpoint propio, salvo que el backend deba guardar o consultar información asociada.
