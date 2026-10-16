# RF — 011 — Registro de reportes e incidencias ambientales

**Historia de usuario relacionada:** HU-012

## Descripción

El sistema debe permitir que los ciudadanos registren incidencias relacionadas con residuos sólidos o incumplimientos de recolección, incluyendo descripción, categoría y ubicación; las fotografías podrán adjuntarse si la plataforma lo permite.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El ciudadano abre el formulario de reportes. |
| 2 | Ingresa descripción y categoría. |
| 3 | El sistema captura la ubicación si el usuario lo autoriza o permite ingresarla manualmente. |
| 4 | El usuario adjunta una fotografía opcional, si está habilitado. |
| 5 | El sistema valida los datos, crea un identificador y guarda el reporte. |
| 6 | Se confirma el registro. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-011-01 | La descripción y la categoría son obligatorias. |
| RN-011-02 | Cada reporte debe tener un identificador único. |
| RN-011-03 | Las coordenadas deben validarse si se incluyen. |
| RN-011-04 | Los archivos deben cumplir los límites de formato y tamaño configurados. |
| RN-011-05 | El sistema informa si el reporte no pudo guardarse. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "descripcion": "Residuos acumulados en la vía",
  "categoria": "residuos_sólidos",
  "latitud": 4.711,
  "longitud": -74.0721
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Reporte registrado correctamente",
  "id_reporte": 1,
  "estado": "recibido"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **POST** | `/api/v1/reportes` | Sí | Registra un reporte ciudadano. |
