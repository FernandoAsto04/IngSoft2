import { Administrador } from "../daoto/AdministradorTO.js";

export class AdministradorDAO {
  async listarAdministradores() {
    try {
      return await Administrador.findAll();
    } catch (error) {
      return error.message;
    } 
  }

  async insertarAdministrador(administrador) {
    try {
      await Administrador.create(administrador);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarAdministrador(administrador) {
    try {
      const [updated] = await Administrador.update(administrador, {
        where: { id: administrador.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarAdministrador(ids) {
    try {
      await Administrador.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerAdministradorPorId(id) {
    try {
      return await Administrador.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
