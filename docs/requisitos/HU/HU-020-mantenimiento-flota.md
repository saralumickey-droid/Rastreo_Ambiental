# HU-020 — Mantenimiento y recursos operativos de la flota

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-020 |
| **Título** | Mantenimiento y recursos operativos de la flota |
| **Módulo** | Administración operativa |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-020 |

---

## Historia

**Como** administrador o funcionario autorizado, **quiero** registrar y consultar novedades de mantenimiento de los camiones, **para** contribuir a la continuidad y al control de la operación.

---

## Criterios de Aceptación

### CA-020.1 — Consultar historial

- **Dado que** tengo permisos operativos,
- **cuando** selecciono un camión,
- **entonces** debo ver los registros de mantenimiento disponibles.

### CA-020.2 — Registrar novedad

- **Dado que** tengo permisos para registrar novedades,
- **cuando** ingreso una descripción y fecha válidas,
- **entonces** el sistema debe guardar la novedad asociada al camión.

### CA-020.3 — Validar información

- **Dado que** intento registrar una novedad,
- **cuando** dejo campos obligatorios vacíos,
- **entonces** el sistema debe solicitar los datos requeridos.

### CA-020.4 — Alerta preventiva

- **Dado que** hay umbrales de mantenimiento configurados,
- **cuando** un registro cumple el criterio de alerta,
- **entonces** el sistema debe mostrar la alerta correspondiente.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/camiones/{id_camion}/mantenimiento` | Consulta el historial de mantenimiento. |
| POST | `/api/v1/camiones/{id_camion}/novedades` | Registra una novedad operativa. |


---

## Notas técnicas

- Solo roles autorizados pueden modificar los registros de mantenimiento.
- Las alertas deben basarse en criterios configurados.
- Los datos deben asociarse al camión correcto.
