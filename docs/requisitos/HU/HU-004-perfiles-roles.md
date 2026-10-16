# HU-004 — Gestión de perfiles, roles y cuentas

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-004 |
| **Título** | Gestión de perfiles, roles y cuentas |
| **Módulo** | Usuarios |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-004 |

---

## Historia

**Como** usuario registrado, **quiero** consultar y actualizar mis datos personales, y como administrador gestionar las cuentas autorizadas, **para** mantener la información actualizada y controlar los permisos de acceso.

---

## Criterios de Aceptación

### CA-004.1 — Consultar perfil

- **Dado que** tengo una sesión iniciada,
- **cuando** abro mi perfil,
- **entonces** debo ver mis datos personales permitidos.

### CA-004.2 — Actualizar perfil

- **Dado que** estoy en mi perfil,
- **cuando** modifico datos válidos y guardo,
- **entonces** el sistema debe guardar los cambios y confirmarlos.

### CA-004.3 — Validar cambios

- **Dado que** estoy editando mi perfil,
- **cuando** ingreso datos inválidos,
- **entonces** debo recibir mensajes de validación.

### CA-004.4 — Administrar usuarios

- **Dado que** tengo rol administrador,
- **cuando** abro el módulo de usuarios,
- **entonces** debo poder consultar las cuentas disponibles según los permisos.

### CA-004.5 — Suspender cuenta

- **Dado que** tengo permiso de administración,
- **cuando** suspendo una cuenta,
- **entonces** el sistema debe actualizar su estado y registrar el cambio cuando exista auditoría.

### CA-004.6 — Proteger roles

- **Dado que** soy un usuario regular,
- **cuando** intento cambiar mi rol desde mi perfil,
- **entonces** el sistema debe impedir que me asigne permisos privilegiados.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/usuarios/perfil` | Consulta el perfil propio. |
| PUT | `/api/v1/usuarios/perfil` | Actualiza los datos propios. |
| GET | `/api/v1/usuarios` | Lista usuarios para administración. |
| PATCH | `/api/v1/usuarios/{id}/estado` | Cambia el estado de una cuenta autorizadamente. |


---

## Notas técnicas

- Cada usuario solo puede modificar su propia información, salvo permisos administrativos.
- Los roles se validan en el backend.
- No se deben exponer contraseñas ni datos sensibles.
