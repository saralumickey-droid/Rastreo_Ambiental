# RF — 018 — Administración de camiones, conductores y operación

**Historia de usuario relacionada:** HU-019

## Descripción

El sistema debe permitir a los roles autorizados administrar los registros de camiones y conductores, asignar vehículos a rutas y registrar información operativa relevante.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El administrador o funcionario autorizado abre el módulo operativo. |
| 2 | Consulta los vehículos y conductores registrados. |
| 3 | Crea o actualiza registros y asignaciones permitidas. |
| 4 | El sistema valida los datos y relaciones entre vehículos, conductores y rutas. |
| 5 | Los cambios quedan disponibles para los módulos correspondientes. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-018-01 | Las operaciones requieren autorización. |
| RN-018-02 | Cada vehículo y conductor debe identificarse de forma única. |
| RN-018-03 | No se deben crear asignaciones incompatibles según las reglas operativas. |
| RN-018-04 | Los datos importados deben validarse antes de guardarse. |
| RN-018-05 | Los cambios relevantes deben quedar registrados cuando exista auditoría. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "placa": "ABC123",
  "estado": "operativo",
  "id_conductor": 10,
  "id_ruta": 2
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
| **GET** | `/api/v1/camiones` | Administrador o funcionario autorizado | Lista camiones. |
| **POST** | `/api/v1/camiones` | Administrador autorizado | Registra un camión. |
| **PUT** | `/api/v1/camiones/{id_camion}` | Administrador autorizado | Actualiza un camión. |
| **GET** | `/api/v1/conductores` | Administrador autorizado | Lista conductores. |

