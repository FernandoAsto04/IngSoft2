import { AreaProfesor } from "../daoto/AreaProfesorTO.js";

export class AreaProfesorDAO {
  async listar() {
    try {
      return await AreaProfesor.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertar(data) {
    try {
      await AreaProfesor.create(data);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizar(data) {
    try {
      const [updated] = await AreaProfesor.update(data, {
        where: { id: data.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminar(id) {
    try {
      await AreaProfesor.destroy({ where: { id } });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerPorId(id) {
    try {
      return await AreaProfesor.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
