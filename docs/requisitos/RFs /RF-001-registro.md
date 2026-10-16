# RF-001 — Registro de usuarios

**Historia de usuario relacionada:** HU-001

## Descripción

El sistema **Rastreo Ambiental** debe permitir el registro de nuevos usuarios mediante un formulario que solicite nombre, correo electrónico y contraseña. La información debe validarse antes de almacenarse en la base de datos, garantizando que el correo no esté registrado previamente y que la contraseña cumpla con los requisitos de seguridad. El usuario tendrá acceso al sistema según el rol que tenga asignado.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario ingresa al formulario de registro de Rastreo Ambiental. |
| 2 | El usuario proporciona su nombre, correo electrónico y contraseña. |
| 3 | El sistema valida que los campos obligatorios estén completos y tengan un formato correcto. |
| 4 | El sistema verifica que el correo electrónico no se encuentre registrado en la base de datos. |
| 5 | Si los datos son inválidos, el sistema muestra los mensajes de error correspondientes. |
| 6 | Si el correo ya existe, el sistema informa que no es posible completar el registro con esa dirección. |
| 7 | Si los datos son válidos, el sistema genera un hash seguro de la contraseña. |
| 8 | El sistema almacena la información del usuario en la base de datos y asigna el rol correspondiente según las reglas de registro. |
| 9 | El sistema confirma que el registro se realizó correctamente. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| **RN-001** | El nombre del usuario es obligatorio y debe contener entre 2 y 100 caracteres. |
| **RN-002** | El correo electrónico es obligatorio y debe tener un formato válido. |
| **RN-003** | El correo electrónico debe ser único en el sistema. |
| **RN-004** | La contraseña es obligatoria y debe cumplir con los requisitos de seguridad definidos. |
| **RN-005** | La contraseña debe almacenarse como hash seguro y nunca en texto plano. |
| **RN-006** | El sistema no debe permitir registros con campos obligatorios vacíos. |
| **RN-007** | El usuario debe tener un rol asignado entre los perfiles permitidos: ciudadano, funcionario, conductor o administrador. |
| **RN-008** | El sistema debe informar al usuario si el registro fue exitoso o si ocurrió un error. |
| **RN-009** | La información registrada debe almacenarse en la base de datos de Rastreo Ambiental. |
| **RN-010** | Las respuestas del sistema no deben exponer contraseñas ni información sensible. |

---

## Inputs / Outputs

### **Entrada (formulario de registro)**

```json
{
  "nombre": "string",
  "correo": "string",
  "clave": "string"
}
```

### **Salida exitosa (HTTP 201)**

```json
{
  "mensaje": "Usuario registrado correctamente",
  "usuario": {
    "id_usuario": 1,
    "nombre": "string",
    "correo": "string",
    "tipo_usuario": "ciudadano",
    "fecha_registro": "timestamp"
  }
}
```

### **Salida de error por validación (HTTP 422)**

```json
{
  "error": "Los datos ingresados no son válidos"
}
```

### **Salida de error por correo existente (HTTP 409)**

```json
{
  "error": "El correo electrónico ya se encuentra registrado"
}
```

---

## Endpoint

| **Método** | **Ruta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **POST** | `/api/v1/usuarios/registro` | No | Registra un nuevo usuario en Rastreo Ambiental. |

**Nota:** La ruta propuesta debe coincidir con la implementada en el backend. La asignación de roles debe controlarse para impedir que una persona se registre por sí misma como administradora.
Endpoint
Método	Ruta	Autenticación requerida	Descripción
POST	/api/v1/usuarios/registro	No	Registra un nuevo usuario en Rastreo Ambiental.
Nota: La ruta propuesta debe ajustarse a la que tengas implementada en tu backend. La asignación de roles debe controlarse para impedir que una persona se registre por sí misma como administradora.
