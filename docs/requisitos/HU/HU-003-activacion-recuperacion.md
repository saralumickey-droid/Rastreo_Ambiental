# HU-003 — Activación y recuperación de cuenta

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-003 |
| **Título** | Activación y recuperación de cuenta |
| **Módulo** | Autenticación |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-003 |

---

## Historia

**Como** usuario registrado, **quiero** activar mi cuenta o recuperar mi contraseña mediante un enlace enviado a mi correo, **para** habilitar mi cuenta o recuperar el acceso de forma segura.

---

## Criterios de Aceptación

### CA-003.1 — Solicitud de recuperación

- **Dado que** estoy en la pantalla de recuperación,
- **cuando** ingreso mi correo y envío la solicitud,
- **entonces** el sistema debe informar que se procesó la solicitud sin revelar si la cuenta existe.

### CA-003.2 — Enlace temporal

- **Dado que** solicité recuperar mi contraseña,
- **cuando** recibo el correo de recuperación,
- **entonces** debo recibir un enlace con un token temporal.

### CA-003.3 — Token válido

- **Dado que** abrí el enlace recibido,
- **cuando** el token es válido y no ha expirado,
- **entonces** debo poder continuar con el proceso de recuperación.

### CA-003.4 — Token inválido

- **Dado que** abrí un enlace inválido, vencido o usado,
- **cuando** el sistema valida el token,
- **entonces** debo ver un mensaje indicando que el enlace ya no es válido.

### CA-003.5 — Cambio de contraseña

- **Dado que** tengo un token de recuperación válido,
- **cuando** ingreso y confirmo una nueva contraseña,
- **entonces** el sistema debe actualizar la contraseña y confirmar el cambio.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| POST | `/api/v1/auth/activar-cuenta` | Activa la cuenta mediante un token, si está implementado. |
| POST | `/api/v1/auth/recuperar-clave` | Solicita un enlace de recuperación. |
| POST | `/api/v1/auth/restablecer-clave` | Actualiza la contraseña mediante token. |


---

## Notas técnicas

- Los tokens deben ser aleatorios, temporales y de un solo uso.
- La recuperación no debe revelar si un correo está registrado.
- La nueva contraseña debe cumplir las reglas de seguridad.
