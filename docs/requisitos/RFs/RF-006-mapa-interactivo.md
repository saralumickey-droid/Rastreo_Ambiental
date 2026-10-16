# RF — 006 — Visualización del mapa interactivo

**Historia de usuario relacionada:** HU-007

## Descripción

El sistema debe mostrar un mapa interactivo de la ciudad para consultar camiones, rutas, zonas de cobertura y puntos de reciclaje, con controles de zoom y desplazamiento.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre el módulo de mapa. |
| 2 | El sistema carga el mapa base y centra la vista en la ciudad configurada. |
| 3 | Se muestran las capas geográficas disponibles. |
| 4 | El usuario acerca, aleja o desplaza el mapa. |
| 5 | Al seleccionar un elemento, se muestra la información disponible. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-006-01 | El mapa corresponde al área geográfica configurada. |
| RN-006-02 | Debe permitir zoom y desplazamiento en dispositivos compatibles. |
| RN-006-03 | Las capas deben diferenciar camiones, rutas, zonas y puntos de reciclaje. |
| RN-006-04 | Si no cargan los datos, se informa y se permite reintentar. |
| RN-006-05 | Se debe respetar la atribución del proveedor cartográfico. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
Configuración de ciudad y capas geográficas disponibles.
```

### **Salida (ejemplo)**

```json
Mapa interactivo con controles y capas informativas.
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/mapa/datos` | Según política | Obtiene las capas de datos propias del mapa. |

