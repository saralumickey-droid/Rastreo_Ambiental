# HU-002 — Inicio y cierre de sesión

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-002 |
| **Título** | Inicio y cierre de sesión |
| **Módulo** | Autenticación |
| **Prioridad** | Alta |
| **Estado** | Por verificar |
| **RF asociados** | RF-002 |

---

## Historia

**Como** usuario registrado, **quiero** iniciar y cerrar sesión con mis credenciales, **para** acceder de forma segura a las opciones permitidas para mi rol.

---

## Criterios de Aceptación

### CA-002.1 — Credenciales válidas

- **Dado que** estoy en el inicio de sesión,
- **cuando** ingreso mi correo y contraseña correctos,
- **entonces** el sistema debe autenticarme y llevarme al módulo que corresponda a mi rol.

### CA-002.2 — Credenciales incorrectas

- **Dado que** estoy en el inicio de sesión,
- **cuando** ingreso credenciales incorrectas,
- **entonces** debo ver un mensaje de error sin revelar información sensible.

### CA-002.3 — Campos obligatorios

- **Dado que** estoy en el inicio de sesión,
- **cuando** dejo vacío un campo obligatorio,
- **entonces** debo ver un mensaje que indique qué dato falta.

### CA-002.4 — Bloqueo por intentos

- **Dado que** he realizado cuatro intentos fallidos consecutivos,
- **cuando** vuelvo a ingresar credenciales incorrectas,
- **entonces** el sistema debe bloquear temporalmente el acceso al alcanzar cinco intentos fallidos.

### CA-002.5 — Cierre de sesión

- **Dado que** tengo una sesión iniciada,
- **cuando** selecciono cerrar sesión,
- **entonces** el sistema debe finalizar mi sesión y devolverme a una pantalla pública.

### CA-002.6 — Control de acceso

- **Dado que** tengo una sesión iniciada,
- **cuando** intento entrar a una opción de otro rol sin permiso,
- **entonces** el sistema debe denegar el acceso.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| POST | `/api/v1/auth/login` | Valida las credenciales e inicia sesión. |
| POST | `/api/v1/auth/logout` | Finaliza la sesión, si aplica según la implementación. |


---

## Notas técnicas

- La autenticación debe validarse en el backend.
- Los intentos fallidos deben contabilizarse.
- Las rutas protegidas deben validar la sesión y los permisos del usuario.
