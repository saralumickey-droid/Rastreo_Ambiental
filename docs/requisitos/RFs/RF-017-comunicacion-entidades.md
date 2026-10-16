# RF — 017 — Comunicación con entidades de aseo

**Historia de usuario relacionada:** HU-018

## Descripción

El sistema debe presentar información de contacto de las entidades de aseo y comunicar avisos generales relacionados con la operación y el cuidado ambiental cuando esta función esté habilitada.

---

## Flujo del proceso

| **Paso** | **Descripción** |
|---|---|
| 1 | El usuario abre la sección de información o avisos. |
| 2 | El sistema muestra contactos y avisos publicados por usuarios autorizados. |
| 3 | El usuario consulta los datos disponibles. |
| 4 | Un funcionario autorizado publica o actualiza un aviso. |
| 5 | El sistema valida y muestra la información vigente. |

---

## Reglas de negocio

| **ID** | **Regla** |
|---|---|
| RN-017-01 | Los contactos deben provenir de información autorizada y mantenerse actualizados. |
| RN-017-02 | Solo roles autorizados pueden publicar avisos oficiales. |
| RN-017-03 | Los avisos deben incluir información clara y pertinente. |
| RN-017-04 | El sistema debe permitir corregir o retirar avisos desactualizados. |
| RN-017-05 | No se deben presentar canales de comunicación inexistentes como si estuvieran activos. |

---

## Inputs / Outputs

### **Entrada (ejemplo)**

```json
{
  "titulo": "Jornada ambiental",
  "mensaje": "Consulte los horarios de recolección de su sector."
}
```

### **Salida (ejemplo)**

```json
{
  "mensaje": "Aviso publicado correctamente"
}
```

---

## Endpoint

| **Método** | **Ruta propuesta** | **Autenticación requerida** | **Descripción** |
|---|---|---|---|
| **GET** | `/api/v1/entidades-aseo/contacto` | Según política | Consulta contactos. |
| **GET** | `/api/v1/avisos` | Según política | Consulta avisos. |
| **POST** | `/api/v1/avisos` | Rol autorizado | Publica un aviso. |

**Nota:** Las rutas y los ejemplos de entrada/salida son propuestas de documentación. Deben ajustarse a los nombres de campos, permisos y endpoints realmente implementados en Rastreo Ambiental. No deben documentarse como funciones existentes si aún no están desarrolladas.
