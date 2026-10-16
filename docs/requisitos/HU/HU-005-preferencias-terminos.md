# HU-005 — Preferencias y aceptación de términos

## Identificación

| **Campo** | **Valor** |
|---|---|
| **ID** | HU-005 |
| **Título** | Preferencias y aceptación de términos |
| **Módulo** | Configuración |
| **Prioridad** | Media |
| **Estado** | Por verificar |
| **RF asociados** | RF-005 |

---

## Historia

**Como** usuario, **quiero** guardar mis preferencias y registrar la aceptación de términos y condiciones, **para** usar la plataforma conforme a mis preferencias y las políticas establecidas.

---

## Criterios de Aceptación

### CA-005.1 — Consultar preferencias

- **Dado que** tengo una sesión iniciada,
- **cuando** abro la configuración,
- **entonces** debo ver las preferencias disponibles.

### CA-005.2 — Actualizar preferencias

- **Dado que** estoy en configuración,
- **cuando** cambio una opción y guardo,
- **entonces** el sistema debe conservar la selección.

### CA-005.3 — Aceptar términos

- **Dado que** estoy en el formulario que requiere aceptación,
- **cuando** acepto los términos y continúo,
- **entonces** el sistema debe registrar la aceptación antes de continuar.

### CA-005.4 — Validar aceptación

- **Dado que** el formulario exige aceptar los términos,
- **cuando** intento continuar sin aceptarlos,
- **entonces** el sistema debe solicitar la aceptación.

---

## Endpoints

| **Método** | **Ruta** | **Descripción** |
|---|---|---|
| GET | `/api/v1/usuarios/preferencias` | Consulta las preferencias. |
| PUT | `/api/v1/usuarios/preferencias` | Actualiza las preferencias. |
| POST | `/api/v1/usuarios/aceptacion-terminos` | Registra la aceptación cuando aplica. |


---

## Notas técnicas

- Solo deben mostrarse opciones disponibles en el sistema.
- La aceptación debe registrarse de forma verificable cuando corresponda.
- Las preferencias se asocian al usuario autenticado.
