import { TrabajoArticulo } from "../daoto/TrabajoArticuloTO.js";

export class TrabajoArticuloDAO {
  async listar() {
    try {
      return await TrabajoArticulo.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertar(data) {
    try {
      await TrabajoArticulo.create(data);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizar(data) {
    try {
      const [updated] = await TrabajoArticulo.update(data, {
        where: { id: data.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminar(id) {
    try {
      await TrabajoArticulo.destroy({ where: { id } });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerPorId(id) {
    try {
      return await TrabajoArticulo.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
