import { TrabajoTesis } from "../daoto/TrabajoTesisTO.js";

export class TrabajoTesisDAO {
  async listar() {
    try {
      return await TrabajoTesis.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertar(data) {
    try {
      await TrabajoTesis.create(data);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizar(data) {
    try {
      const [updated] = await TrabajoTesis.update(data, {
        where: { id: data.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminar(id) {
    try {
      await TrabajoTesis.destroy({ where: { id } });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerPorId(id) {
    try {
      return await TrabajoTesis.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
