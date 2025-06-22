import { Trabajo } from "../daoto/TrabajoTO.js";

export class TrabajoDAO {
  async listarTrabajos() {
    try {
      return await Trabajo.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertarTrabajo(trabajo) {
    try {
      await Trabajo.create(trabajo);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarTrabajo(trabajo) {
    try {
      const [updated] = await Trabajo.update(trabajo, {
        where: { id: trabajo.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarTrabajo(ids) {
    try {
      await Trabajo.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerTrabajoPorId(id) {
    try {
      return await Trabajo.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
