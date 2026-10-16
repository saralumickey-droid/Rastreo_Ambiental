# RF — 016 — Gestión de notificaciones y alertas

**Historia de usuario relacionada:** HU-017

## Descripción

El sistema debe informar a los usuarios sobre novedades relevantes relacionadas con rutas, recolección, reportes y operación, mediante los canales que estén implementados.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | Se genera un evento relevante en el sistema. |
| 2 | El sistema determina los usuarios destinatarios según zona, rol y preferencias. |
| 3 | Envía o muestra la notificación por el canal disponible. |
| 4 | El usuario consulta la alerta y puede ajustar preferencias cuando exista esa opción. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-016-01 | Las notificaciones deben corresponder a eventos válidos. |
| RN-016-02 | Solo se envían a destinatarios pertinentes. |
| RN-016-03 | No deben divulgar datos personales innecesarios. |
| RN-016-04 | El sistema registra el resultado del envío cuando sea posible. |
| RN-016-05 | Push, correo y alertas sonoras requieren configuración y soporte específico. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "tipo": "cambio_ruta",
  "mensaje": "Se actualizó la ruta de recolección"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Notificación procesada"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/notificaciones` | Sí | Consulta notificaciones del usuario. |
| **PATCH** | `/api/v1/notificaciones/{id}/leida` | Sí | Marca una notificación como leída. |

