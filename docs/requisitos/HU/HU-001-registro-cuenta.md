# HU-001 — Registro de cuenta

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-001 |
| **Título** | Registro de cuenta |
| **Módulo** | Autenticación |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-001 |

---

## Historia

**Como** usuario nuevo, **quiero** crear una cuenta proporcionando mi nombre, correo electrónico y contraseña, **para** poder acceder a las funcionalidades de Rastreo Ambiental.

---

## Criterios de Aceptación

### CA-001.1 — Formulario de registro

- **Dado que** estoy en la página de registro,
- **cuando** veo el formulario,
- **entonces** debo encontrar campos para nombre, correo electrónico y contraseña.

### CA-001.2 — Validación de nombre

- **Dado que** estoy completando el registro,
- **cuando** ingreso un nombre vacío o inválido y envío el formulario,
- **entonces** debo ver un mensaje que indique que el nombre es obligatorio o no válido.

### CA-001.3 — Validación de correo

- **Dado que** estoy completando el registro,
- **cuando** ingreso un correo con formato incorrecto,
- **entonces** debo ver un mensaje que solicite un correo válido.

### CA-001.4 — Contraseña obligatoria

- **Dado que** estoy completando el registro,
- **cuando** dejo la contraseña vacía y envío el formulario,
- **entonces** debo ver un mensaje que indique que la contraseña es obligatoria.

### CA-001.5 — Registro exitoso

- **Dado que** ingresé datos válidos,
- **cuando** envío el formulario,
- **entonces** el sistema debe crear mi cuenta y confirmar el resultado.

### CA-001.6 — Correo duplicado

- **Dado que** intento registrarme con un correo ya registrado,
- **cuando** envío el formulario,
- **entonces** debo recibir un mensaje que indique que el correo ya está registrado.

### CA-001.7 — Protección de contraseña

- **Dado que** mi cuenta se registra correctamente,
- **cuando** el sistema guarda mis datos,
- **entonces** mi contraseña debe almacenarse protegida y nunca en texto plano.

### CA-001.8 — Enlace a inicio de sesión

- **Dado que** estoy en el registro,
- **cuando** ya tengo una cuenta,
- **entonces** debo encontrar un enlace para iniciar sesión.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| POST | `/api/v1/usuarios/registro` | Registra una cuenta de usuario. |


---

## Notas técnicas

- La contraseña debe almacenarse mediante un algoritmo de hash seguro.
- El correo debe ser único y tener formato válido.
- El rol ciudadano se asigna desde el backend cuando corresponda.
