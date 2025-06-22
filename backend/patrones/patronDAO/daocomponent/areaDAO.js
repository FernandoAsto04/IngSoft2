import { Area } from "../daoto/AreaTO.js";

export class AreaDAO {
  async listarAreas() {
    try {
      return await Area.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertarArea(area) {
    try {
      await Area.create(area);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarArea(area) {
    try {
      const [updated] = await Area.update(area, {
        where: { id: area.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarArea(ids) {
    try {
      await Area.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerAreaPorId(id) {
    try {
      return await Area.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
