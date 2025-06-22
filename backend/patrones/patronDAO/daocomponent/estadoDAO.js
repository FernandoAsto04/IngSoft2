import { Estado } from "../daoto/EstadoTO.js"

export class EstadoDAO {
  async listarEstados() {
    try {
      return await Estado.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertarEstado(estado) {
    try {
      await Estado.create(estado);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarEstado(estado) {
    try {
      const [updated] = await Estado.update(estado, {
        where: { id: estado.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarEstado(ids) {
    try {
      await Estado.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerEstadoPorId(id) {
    try {
      return await Estado.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}