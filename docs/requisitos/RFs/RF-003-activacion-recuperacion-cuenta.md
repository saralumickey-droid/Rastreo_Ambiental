# RF — 003 — Activación y recuperación de cuentas

**Historia de usuario relacionada:** HU-003, HU-004

## Descripción

El sistema debe permitir activar cuentas mediante un enlace enviado por correo y recuperar el acceso mediante un token temporal para restablecer la contraseña.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario solicita activación o recuperación. |
| 2 | El sistema genera un token seguro y temporal. |
| 3 | Envía un enlace al correo registrado. |
| 4 | El usuario abre el enlace y el sistema valida el token. |
| 5 | Para recuperar el acceso, el usuario registra una nueva contraseña. |
| 6 | El sistema actualiza la cuenta y marca el token como utilizado. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-003-01 | Los tokens deben ser seguros, temporales y no predecibles. |
| RN-003-02 | Los tokens vencidos o utilizados no pueden reutilizarse. |
| RN-003-03 | La solicitud de recuperación no debe revelar si el correo existe. |
| RN-003-04 | La nueva contraseña debe cumplir los requisitos definidos. |
| RN-003-05 | La activación debe actualizar el estado de la cuenta. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "correo": "usuario@ejemplo.com"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Si los datos corresponden a una cuenta, recibirás instrucciones por correo."
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **POST** | `/api/v1/auth/activar-cuenta` | No | Valida el enlace de activación. |
| **POST** | `/api/v1/auth/recuperar-clave` | No | Solicita recuperación. |
| **POST** | `/api/v1/auth/restablecer-clave` | No | Restablece la contraseña. |
