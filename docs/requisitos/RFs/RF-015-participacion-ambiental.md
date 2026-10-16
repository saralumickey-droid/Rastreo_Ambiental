# RF — 015 — Participación y educación ambiental

**Historia de usuario relacionada:** HU-016

## Descripción

El sistema debe ofrecer funciones de participación ciudadana y educación ambiental incluidas en el alcance, como sugerir puntos de reciclaje, consultar consejos y valorar el servicio cuando esté habilitado.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre el módulo de participación. |
| 2 | Consulta contenido ambiental o inicia una sugerencia o valoración. |
| 3 | Completa los datos requeridos. |
| 4 | El sistema valida y guarda la contribución. |
| 5 | La entidad revisa las sugerencias antes de incorporarlas al sistema. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-015-01 | Las sugerencias deben revisarse antes de publicarse como puntos oficiales. |
| RN-015-02 | Las valoraciones deben asociarse a una experiencia o servicio válido según la política. |
| RN-015-03 | El contenido educativo debe ser apropiado y verificable. |
| RN-015-04 | Las estadísticas ambientales solo se muestran cuando hay datos suficientes. |
| RN-015-05 | Las funciones opcionales se implementan únicamente si forman parte del alcance aprobado. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "tipo": "sugerencia_punto_reciclaje",
  "descripcion": "Propongo un punto de reciclaje en el sector"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Contribución recibida correctamente"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **POST** | `/api/v1/sugerencias-reciclaje` | Sí | Registra una sugerencia, si está habilitado. |
| **POST** | `/api/v1/calificaciones` | Sí | Registra una calificación, si está habilitado. |

**Nota:** Las rutas y los ejemplos de entrada/salida son propuestas de documentación. Deben ajustarse a los nombres de campos, permisos y endpoints realmente implementados en Rastreo Ambiental. No deben documentarse como funciones existentes si aún no están desarrolladas.
