
# RF-002 — Validación del formato de correo electrónico

**Historia de usuario relacionada:** HU-002

## Descripción

El sistema **Rastreo Ambiental** debe validar que el correo electrónico ingresado por el usuario durante el registro o inicio de sesión tenga un formato válido antes de procesar la solicitud. Si la dirección no cumple con el formato establecido, el sistema debe mostrar un mensaje de error e impedir el envío de los datos hasta que se corrija.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario ingresa su correo electrónico en el formulario de registro o inicio de sesión. |
| 2 | El sistema verifica que el campo no esté vacío. |
| 3 | El sistema comprueba que el correo tenga una estructura válida, incluyendo el nombre de usuario, el símbolo `@` y el dominio. |
| 4 | Si el correo no cumple con el formato requerido, el sistema muestra un mensaje de validación. |
| 5 | Si el correo tiene un formato válido, el sistema permite continuar con el proceso correspondiente. |
| 6 | El backend realiza nuevamente la validación antes de procesar la solicitud. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| **RN-020** | El campo de correo electrónico es obligatorio en los formularios que lo requieran. |
| **RN-021** | El correo electrónico debe cumplir con un formato válido, incluyendo un nombre de usuario, `@` y un dominio. |
| **RN-022** | El sistema no debe permitir el envío de formularios con un correo electrónico de formato inválido. |
| **RN-023** | El sistema debe mostrar un mensaje claro cuando el correo electrónico no cumpla con el formato requerido. |
| **RN-024** | La validación debe realizarse en el frontend y repetirse en el backend para garantizar la integridad de los datos. |
| **RN-025** | El sistema debe aceptar direcciones válidas con diferentes dominios, como `.com`, `.co` y `.edu.co`. |

---

## Inputs / Outputs

### **Entrada (campo de correo electrónico)**

```json
{
  "correo": "usuario@ejemplo.com"
}
```

### **Salida exitosa (HTTP 200)**

Cuando la validación se realiza en el backend:

```json
{
  "valido": true,
  "mensaje": "El formato del correo electrónico es válido"
}
```

### **Salida de error (HTTP 422)**

Cuando el correo no cumple con el formato requerido:

```json
{
  "error": "Formato de correo electrónico inválido"
}
```

---

## Endpoint

| **Método** | **Ruta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **POST** | `/api/v1/usuarios/registro` | No | Valida el formato del correo durante el registro de usuarios. |
| **POST** | `/api/v1/auth/login` | No | Valida el formato del correo antes de intentar autenticar al usuario. |

**Nota:** La validación del correo electrónico se implementa normalmente dentro de los formularios y endpoints de registro e inicio de sesión. No es necesario crear un endpoint independiente exclusivamente para esta función. Las rutas deben coincidir con las implementadas en el backend de Rastreo Ambiental.
