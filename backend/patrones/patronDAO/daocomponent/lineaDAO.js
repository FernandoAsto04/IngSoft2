import { Linea } from "../daoto/LineaTO.js";

export class LineaDAO {
  async listarLineas() {
    try {
      return await Linea.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertarLinea(linea) {
    try {
      await Linea.create(linea);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarLinea(linea) {
    try {
      const [updated] = await Linea.update(linea, {
        where: { id: linea.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarLinea(ids) {
    try {
      await Linea.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerLineaPorId(id) {
    try {
      return await Linea.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
