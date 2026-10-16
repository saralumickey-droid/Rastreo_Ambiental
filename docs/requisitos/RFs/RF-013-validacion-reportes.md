# RF — 013 — Validación y priorización de reportes

**Historia de usuario relacionada:** HU-014

## Descripción

El sistema debe permitir que funcionarios autorizados revisen reportes, comprueben su ubicación y los clasifiquen para organizar su atención.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El funcionario abre la bandeja de reportes pendientes. |
| 2 | El sistema muestra la información y ubicación disponible. |
| 3 | El funcionario verifica los datos y la cobertura. |
| 4 | Asigna una prioridad y un estado según los criterios definidos. |
| 5 | El sistema guarda los cambios y los hace visibles a los usuarios autorizados. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-013-01 | Solo funcionarios o roles autorizados pueden validar y priorizar. |
| RN-013-02 | La prioridad debe utilizar criterios definidos por la entidad. |
| RN-013-03 | La validación geográfica requiere coordenadas válidas y una zona de cobertura registrada. |
| RN-013-04 | Toda modificación debe quedar asociada al reporte. |
| RN-013-05 | Los reportes incompletos pueden marcarse para aclaración o rechazo justificado. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "id_reporte": 1,
  "prioridad": "alta",
  "estado": "en_revision"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Reporte actualizado correctamente"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/reportes/pendientes` | Funcionario o administrador | Lista reportes por revisar. |
| **PATCH** | `/api/v1/reportes/{id_reporte}/prioridad` | Funcionario o administrador | Actualiza prioridad. |

