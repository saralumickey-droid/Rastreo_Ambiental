# RF — 005 — Preferencias y aceptación de términos

**Historia de usuario relacionada:** HU-006

## Descripción

El sistema debe guardar preferencias disponibles, como idioma y notificaciones, y registrar la aceptación de términos y condiciones cuando corresponda.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre preferencias o el formulario correspondiente. |
| 2 | Selecciona las opciones disponibles. |
| 3 | Consulta y acepta los términos cuando sea necesario. |
| 4 | El sistema valida y guarda las preferencias y la constancia de aceptación. |
| 5 | La interfaz aplica las preferencias guardadas. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-005-01 | Solo se ofrecen idiomas disponibles. |
| RN-005-02 | Las preferencias se asocian al usuario correspondiente. |
| RN-005-03 | La aceptación registra versión y fecha cuando aplique. |
| RN-005-04 | El sistema informa si no pudo guardar los cambios. |
| RN-005-05 | Las opciones deben corresponder al alcance real del proyecto. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "idioma": "es",
  "notificaciones_habilitadas": true,
  "acepta_terminos": true
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Preferencias guardadas correctamente"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/usuarios/preferencias` | Sí | Consulta preferencias. |
| **PUT** | `/api/v1/usuarios/preferencias` | Sí | Actualiza preferencias. |
| **POST** | `/api/v1/usuarios/aceptacion-terminos` | Según flujo | Registra aceptación. |

**Nota:** Las rutas y los ejemplos de entrada/salida son propuestas de documentación. Deben ajustarse a los nombres de campos, permisos y endpoints realmente implementados en Rastreo Ambiental. No deben documentarse como funciones existentes si aún no están desarrolladas.
