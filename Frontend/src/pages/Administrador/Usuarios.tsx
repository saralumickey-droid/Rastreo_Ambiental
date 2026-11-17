import {
  useCallback,
  useEffect,
  useState,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";
import {
  getUsers,
  updateUser,
  deleteUser,
  type AdminUser,
} from "../../api/users.api";

const roles: Record<string, string> = {
  administrador: "Administrador",
  funcionario: "Funcionario",
  ciudadano: "Ciudadano",
  conductor: "Conductor",
};

const ADMIN_PRINCIPAL_ID = 3;

type UserForm = {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  direccion: string;
};

const emptyForm: UserForm = {
  nombre: "",
  apellido: "",
  correo: "",
  telefono: "",
  direccion: "",
};

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<UserForm>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const cargarUsuarios = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getUsers();
      setUsuarios(response.usuarios);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No fue posible consultar los usuarios."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void cargarUsuarios();
  }, [cargarUsuarios]);

  function iniciarEdicion(usuario: AdminUser) {
    setEditingId(usuario.id_usuario);
    setMessage("");
    setError("");

    setForm({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
      telefono: usuario.telefono ?? "",
      direccion: usuario.direccion ?? "",
    });
  }

  function cancelarEdicion() {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  }

  function actualizarCampo(name: keyof UserForm, value: string) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function guardarCambios(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (editingId === null) return;

    setSaving(true);
    setError("");
    setMessage("");

    try {
      const response = await updateUser(editingId, {
        nombre: form.nombre.trim(),
        apellido: form.apellido.trim(),
        correo: form.correo.trim(),
        telefono: form.telefono.trim() || null,
        direccion: form.direccion.trim() || null,
      });

      setUsuarios((prev) =>
        prev.map((usuario) =>
          usuario.id_usuario === editingId
            ? response.usuario
            : usuario
        )
      );

      setEditingId(null);
      setForm(emptyForm);
      setMessage(response.message);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No fue posible actualizar el usuario."
      );
    } finally {
      setSaving(false);
    }
  }

  async function eliminarUsuario(usuario: AdminUser) {
    if (usuario.id_usuario === ADMIN_PRINCIPAL_ID) {
      setError("No se puede eliminar al administrador principal.");
      return;
    }

    const confirmar = window.confirm(
      `¿Estás segura de eliminar al usuario ${usuario.nombre} ${usuario.apellido}?\n\nEsta acción no se puede deshacer.`
    );

    if (!confirmar) return;

    setDeletingId(usuario.id_usuario);
    setError("");
    setMessage("");

    try {
      const response = await deleteUser(usuario.id_usuario);

      setUsuarios((prev) =>
        prev.filter(
          (item) => item.id_usuario !== usuario.id_usuario
        )
      );

      if (editingId === usuario.id_usuario) {
        setEditingId(null);
        setForm(emptyForm);
      }

      setMessage(response.message);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No fue posible eliminar el usuario."
      );
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="page-container">
      <Link to="/administrador/dashboard" className="btn btn-dark">
        Volver
      </Link>

      <h2 className="page-title">Gestión de usuarios</h2>

      <button
        className="btn btn-primary"
        onClick={() => void cargarUsuarios()}
        disabled={loading || deletingId !== null}
      >
        {loading ? "Cargando..." : "Actualizar usuarios"}
      </button>

      {error && <div className="error-message">{error}</div>}
      {message && <div className="success-message">{message}</div>}

      {editingId !== null && (
        <form className="auth-form" onSubmit={guardarCambios}>
          <h3>Editar usuario #{editingId}</h3>

          <input
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) =>
              actualizarCampo("nombre", e.target.value)
            }
            minLength={2}
            maxLength={100}
            required
          />

          <input
            placeholder="Apellido"
            value={form.apellido}
            onChange={(e) =>
              actualizarCampo("apellido", e.target.value)
            }
            minLength={2}
            maxLength={100}
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={(e) =>
              actualizarCampo("correo", e.target.value)
            }
            maxLength={150}
            required
          />

          <input
            placeholder="Teléfono"
            value={form.telefono}
            onChange={(e) =>
              actualizarCampo("telefono", e.target.value)
            }
            maxLength={30}
          />

          <input
            placeholder="Dirección"
            value={form.direccion}
            onChange={(e) =>
              actualizarCampo("direccion", e.target.value)
            }
            maxLength={255}
          />

          <button
            type="submit"
            disabled={saving || deletingId !== null}
          >
            {saving ? "Guardando..." : "Guardar cambios"}
          </button>

          <button
            type="button"
            onClick={cancelarEdicion}
            disabled={saving}
          >
            Cancelar
          </button>
        </form>
      )}

      {loading ? (
        <p>Consultando usuarios registrados...</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre completo</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Rol</th>
                <th>Fecha de registro</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.length > 0 ? (
                usuarios.map((usuario) => (
                  <tr key={usuario.id_usuario}>
                    <td>{usuario.id_usuario}</td>
                    <td>
                      {usuario.nombre} {usuario.apellido}
                    </td>
                    <td>{usuario.correo}</td>
                    <td>{usuario.telefono || "No registrado"}</td>
                    <td>
                      {roles[usuario.tipo_usuario] ||
                        usuario.tipo_usuario}
                    </td>
                    <td>
                      {new Date(
                        usuario.fecha_registro
                      ).toLocaleDateString("es-CO")}
                    </td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => iniciarEdicion(usuario)}
                        disabled={
                          deletingId !== null || saving
                        }
                      >
                        Editar
                      </button>

                      {usuario.id_usuario === ADMIN_PRINCIPAL_ID ? (
                        <span>Cuenta protegida</span>
                      ) : (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            void eliminarUsuario(usuario)
                          }
                          disabled={
                            deletingId !== null || saving
                          }
                        >
                          {deletingId === usuario.id_usuario
                            ? "Eliminando..."
                            : "Eliminar"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>
                    No hay usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {!loading && !error && (
        <p>Total de usuarios: {usuarios.length}</p>
      )}
    </div>
  );
}

