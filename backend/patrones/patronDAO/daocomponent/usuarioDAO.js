import { Usuario } from "../daoto/UsuarioTO.js";
import { Alumno } from "../daoto/AlumnoTO.js";
import { Profesor } from "../daoto/ProfesorTO.js";
import { Administrador } from "../daoto/AdministradorTO.js";

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
