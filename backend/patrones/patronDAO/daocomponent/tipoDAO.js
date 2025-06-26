import { Tipo } from "../daoto/tipoTO.js"

export class TipoDAO {
  async listarTipos() {
    try {
      return await Tipo.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertarTipo(tipo) {
    try {
      await Tipo.create(tipo);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarTipo(tipo) {
    try {
      const [updated] = await Tipo.update(tipo, {
        where: { id: tipo.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarTipo(ids) {
    try {
      await Tipo.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerTipoPorId(id) {
    try {
      return await Tipo.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}