# HU-008 — Monitoreo de camiones recolectores

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-008 |
| **Título** | Monitoreo de camiones recolectores |
| **Módulo** | Monitoreo |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-008 |

---

## Historia

**Como** ciudadano, **quiero** consultar la ubicación y el estado de los camiones recolectores, **para** conocer el recorrido y hacer seguimiento al servicio de recolección.

---

## Criterios de Aceptación

### CA-008.1 — Ver camiones

- **Dado que** abro el mapa de monitoreo,
- **cuando** hay camiones registrados con coordenadas válidas,
- **entonces** debo ver sus marcadores en el mapa.

### CA-008.2 — Consultar detalles

- **Dado que** veo un camión en el mapa,
- **cuando** selecciono su marcador,
- **entonces** debo ver la placa y el estado del vehículo disponibles para consulta.

### CA-008.3 — Estado operativo

- **Dado que** consulto los camiones,
- **cuando** existen distintos estados registrados,
- **entonces** debo poder distinguir los camiones operativos de los inactivos.

### CA-008.4 — Datos desactualizados

- **Dado que** la ubicación de un camión no se ha actualizado recientemente,
- **cuando** consulto su marcador,
- **entonces** el sistema debe indicar que la información puede estar desactualizada.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/camiones/ubicaciones` | Consulta las últimas ubicaciones disponibles. |
| GET | `/api/v1/camiones/{id_camion}` | Consulta los datos permitidos de un camión. |


---

## Notas técnicas

- Solo se muestran ubicaciones válidas y registradas.
- La frecuencia de actualización depende de la disponibilidad de datos y conectividad.
- Los detalles visibles dependen del rol y de las políticas del sistema.
