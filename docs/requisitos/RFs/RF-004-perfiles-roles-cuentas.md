# RF — 004 — Gestión de perfiles, roles y cuentas

**Historia de usuario relacionada:** HU-005

## Descripción

El sistema debe permitir consultar y actualizar datos personales y administrar cuentas según los permisos del usuario. Los roles contemplados son ciudadano, funcionario, conductor y administrador.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre su perfil o un administrador autorizado consulta la gestión de usuarios. |
| 2 | El sistema muestra los datos permitidos. |
| 3 | El usuario modifica los campos habilitados. |
| 4 | El sistema valida y guarda los cambios. |
| 5 | Las acciones de suspensión o eliminación se permiten solo a usuarios autorizados. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-004-01 | Cada usuario solo puede editar su propio perfil, salvo permisos explícitos. |
| RN-004-02 | Solo personal autorizado puede modificar roles. |
| RN-004-03 | No se pueden elevar privilegios editando el perfil propio. |
| RN-004-04 | Los datos se validan antes de guardarse. |
| RN-004-05 | Las respuestas no deben exponer contraseñas ni datos sensibles. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "nombre": "Nuevo nombre",
  "telefono": "3000000000",
  "direccion": "Dirección de ejemplo"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Perfil actualizado correctamente"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/usuarios/perfil` | Sí | Consulta el perfil propio. |
| **PUT** | `/api/v1/usuarios/perfil` | Sí | Actualiza datos personales. |
| **GET** | `/api/v1/usuarios` | Administrador | Lista usuarios. |
| **PATCH** | `/api/v1/usuarios/{id}/estado` | Administrador | Suspende o reactiva una cuenta. |

**Nota:** Las rutas y los ejemplos de entrada/salida son propuestas de documentación. Deben ajustarse a los nombres de campos, permisos y endpoints realmente implementados en Rastreo Ambiental. No deben documentarse como funciones existentes si aún no están desarrolladas.
