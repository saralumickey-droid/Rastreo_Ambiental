# RF — 012 — Seguimiento de reportes ambientales

**Historia de usuario relacionada:** HU-013

## Descripción

El sistema debe permitir consultar el historial y estado de los reportes del usuario y actualizar su seguimiento conforme avanza la atención de la incidencia.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre su historial de reportes. |
| 2 | El sistema lista los reportes permitidos. |
| 3 | El usuario selecciona uno para ver detalles y estado. |
| 4 | El personal autorizado actualiza el estado y agrega comentarios o evidencias disponibles. |
| 5 | El sistema muestra la actualización al usuario correspondiente. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-012-01 | Un ciudadano solo consulta sus reportes, salvo permisos especiales. |
| RN-012-02 | Los estados deben corresponder al flujo definido por la entidad. |
| RN-012-03 | Los cambios de estado requieren autorización. |
| RN-012-04 | Los comentarios deben asociarse al reporte correcto. |
| RN-012-05 | Las evidencias deben cumplir los límites de seguridad y almacenamiento. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "id_reporte": 1
}
```

### **Salida (ejemplo)**

```json
{
  "id_reporte": 1,
  "estado": "en_revision",
  "comentario": "Reporte recibido para revisión"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/reportes/mis-reportes` | Sí | Lista reportes del usuario. |
| **GET** | `/api/v1/reportes/{id_reporte}` | Sí, con autorización | Consulta detalle. |
| **PATCH** | `/api/v1/reportes/{id_reporte}/estado` | Rol autorizado | Actualiza estado. |
