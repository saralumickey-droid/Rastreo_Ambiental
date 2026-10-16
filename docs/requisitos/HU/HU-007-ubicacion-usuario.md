# HU-007 — Ubicación actual del ciudadano

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-007 |
| **Título** | Ubicación actual del ciudadano |
| **Módulo** | Mapa y geolocalización |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-007 |

---

## Historia

**Como** ciudadano, **quiero** visualizar mi ubicación actual en el mapa cuando autorice el acceso al GPS, **para** identificar los servicios cercanos y orientarme en la ciudad.

---

## Criterios de Aceptación

### CA-007.1 — Solicitar permiso

- **Dado que** estoy en el mapa,
- **cuando** selecciono mi ubicación,
- **entonces** el navegador debe solicitar permiso para acceder al GPS.

### CA-007.2 — Mostrar ubicación

- **Dado que** autoricé el acceso a la ubicación,
- **cuando** el dispositivo entrega coordenadas válidas,
- **entonces** debo ver un marcador de mi ubicación.

### CA-007.3 — Permiso denegado

- **Dado que** no autoricé el GPS,
- **cuando** intento mostrar mi ubicación,
- **entonces** debo recibir una explicación y poder seguir usando el mapa manualmente.

### CA-007.4 — Error de geolocalización

- **Dado que** el dispositivo no puede obtener mi ubicación,
- **cuando** la solicitud falla,
- **entonces** debo ver un mensaje informativo.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| — | No aplica | Función gestionada desde el navegador o cliente, sin endpoint propio obligatorio. |


---

## Notas técnicas

- La ubicación requiere autorización del usuario.
- El sistema debe gestionar errores y permisos denegados.
- No se debe almacenar ni compartir la ubicación sin una finalidad autorizada.
