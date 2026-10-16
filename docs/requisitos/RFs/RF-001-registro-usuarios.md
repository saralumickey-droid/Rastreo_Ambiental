# RF — 001 — Registro de usuarios

**Historia de usuario relacionada:** HU-001

## Descripción

El sistema debe permitir registrar usuarios con nombre, correo electrónico y contraseña, validando los datos y protegiendo la contraseña antes de almacenarla.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre el formulario de registro. |
| 2 | Ingresa nombre, correo y contraseña. |
| 3 | El sistema valida los campos y el formato del correo. |
| 4 | El backend verifica que el correo no esté registrado. |
| 5 | Si los datos son válidos, guarda el usuario con la contraseña protegida y confirma el resultado. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-001-01 | El nombre y el correo son obligatorios. |
| RN-001-02 | El correo debe tener un formato válido y ser único. |
| RN-001-03 | La contraseña debe cumplir los requisitos de seguridad definidos. |
| RN-001-04 | La contraseña nunca debe guardarse en texto plano. |
| RN-001-05 | El registro público no debe permitir asignarse el rol administrador. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "nombre": "Usuario Ejemplo",
  "correo": "usuario@ejemplo.com",
  "clave": "********"
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Usuario registrado correctamente",
  "usuario": {
    "id_usuario": 1,
    "nombre": "Usuario Ejemplo",
    "correo": "usuario@ejemplo.com",
    "tipo_usuario": "ciudadano"
  }
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **POST** | `/api/v1/usuarios/registro` | No | Registra un usuario. |

