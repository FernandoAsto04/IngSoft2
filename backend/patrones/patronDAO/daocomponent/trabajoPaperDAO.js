import { TrabajoPaper } from "../daoto/TrabajoPaperTO.js";

export class TrabajoPaperDAO {
  async listar() {
    try {
      return await TrabajoPaper.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertar(data) {
    try {
      await TrabajoPaper.create(data);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizar(data) {
    try {
      const [updated] = await TrabajoPaper.update(data, {
        where: { id: data.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminar(id) {
    try {
      await TrabajoPaper.destroy({ where: { id } });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerPorId(id) {
    try {
      return await TrabajoPaper.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
