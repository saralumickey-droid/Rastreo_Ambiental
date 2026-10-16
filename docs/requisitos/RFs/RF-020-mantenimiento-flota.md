# RF — 020 — Mantenimiento y recursos operativos de la flota

**Historia de usuario relacionada:** HU-021

## Descripción

El sistema debe permitir registrar y consultar información de mantenimiento y operación de la flota, como novedades mecánicas, consumo de combustible, nivel de carga e inactividad, siempre que existan datos disponibles.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario autorizado selecciona un vehículo. |
| 2 | Consulta los registros operativos existentes. |
| 3 | Registra una novedad o dato de mantenimiento. |
| 4 | El sistema valida los campos y guarda el registro. |
| 5 | Cuando se cumplan criterios configurados, el sistema muestra una alerta preventiva. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-020-01 | Solo roles autorizados pueden crear o modificar registros operativos. |
| RN-020-02 | Los valores deben validarse según su tipo y unidad. |
| RN-020-03 | Las alertas deben basarse en umbrales configurados y datos disponibles. |
| RN-020-04 | Los datos desconocidos no deben mostrarse como valores confirmados. |
| RN-020-05 | El historial debe asociarse al vehículo correspondiente. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "id_camion": 1,
  "tipo_novedad": "mantenimiento",
  "descripcion": "Revisión preventiva requerida",
  "fecha": "2026-10-16"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Registro operativo guardado correctamente"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/camiones/{id_camion}/mantenimiento` | Rol autorizado | Consulta historial de mantenimiento. |
| **POST** | `/api/v1/camiones/{id_camion}/novedades` | Rol autorizado | Registra una novedad. |

**Nota:** Las rutas y los ejemplos de entrada/salida son propuestas de documentación. Deben ajustarse a los nombres de campos, permisos y endpoints realmente implementados en Rastreo Ambiental. No deben documentarse como funciones existentes si aún no están desarrolladas.
