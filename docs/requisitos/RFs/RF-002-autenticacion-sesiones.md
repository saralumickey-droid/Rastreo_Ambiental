# RF — 002 — Autenticación y gestión de sesiones

**Historia de usuario relacionada:** HU-002

## Descripción

El sistema debe autenticar usuarios mediante sus credenciales, permitir el cierre seguro de sesión y controlar los intentos de acceso fallidos.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario ingresa correo y contraseña. |
| 2 | El backend valida las credenciales. |
| 3 | Si son incorrectas, muestra un mensaje genérico y registra el intento. |
| 4 | Si son correctas, crea la sesión o token definido por el sistema. |
| 5 | Al cerrar sesión, el sistema invalida la sesión cuando la arquitectura lo permita. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-002-01 | La autenticación debe validarse en el backend. |
| RN-002-02 | Los errores no deben revelar si el correo está registrado. |
| RN-002-03 | Los intentos fallidos deben contabilizarse. |
| RN-002-04 | Tras cinco intentos fallidos consecutivos se aplica el bloqueo temporal definido. |
| RN-002-05 | El acceso debe respetar el rol y los permisos del usuario. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "correo": "usuario@ejemplo.com",
  "clave": "********"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Inicio de sesión exitoso",
  "token": "token_de_sesion",
  "usuario": {
    "id_usuario": 1,
    "tipo_usuario": "ciudadano"
  }
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **POST** | `/api/v1/auth/login` | No | Autentica al usuario. |
| **POST** | `/api/v1/auth/logout` | Sí, según implementación | Cierra la sesión. |
