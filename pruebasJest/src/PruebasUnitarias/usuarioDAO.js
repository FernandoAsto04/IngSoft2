import { Usuario } from "./Usuario.js";
import { Alumno } from "./Alumno.js";
import { Profesor } from "./Profesor.js";
import { Administrador } from "./Administrador.js";

export class UsuarioDAO {
  async listarUsuarios() {
    return await Usuario.findAll({
      include: [Alumno, Profesor, Administrador]
    });
  }

  async insertarUsuario(usuario) {
    try {
      await Usuario.create(usuario);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarUsuario(usuario) {
    try {
      const [updated] = await Usuario.update(usuario, {
        where: { id: usuario.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarUsuario(ids) {
    try {
      await Usuario.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerUsuarioPorId(id) {
    return await Usuario.findByPk(id, {
      include: [Alumno, Profesor, Administrador]
    });
  }
}
