import { Asesoria } from "../daoto/AsesoriaTO.js";

export class AsesoriaDAO {
  async listarAsesorias() {
    try {
      return await Asesoria.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertarAsesoria(asesoria) {
    try {
      await Asesoria.create(asesoria);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarAsesoria(asesoria) {
    try {
      const [updated] = await Asesoria.update(asesoria, {
        where: { id: asesoria.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarAsesoria(ids) {
    try {
      await Asesoria.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerAsesoriaPorId(id) {
    try {
      return await Asesoria.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
