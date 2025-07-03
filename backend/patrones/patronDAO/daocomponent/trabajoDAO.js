import { Trabajo } from "../daoto/TrabajoTO.js";
import { Area } from "../daoto/AreaTO.js";
import { Estado } from "../daoto/EstadoTO.js";
import { Tipo } from "../daoto/TipoTO.js";
import { TrabajoClase } from "../modelo/TrabajoClase.js"; // Asegúrate de tener esto
import { Op } from 'sequelize';

export class TrabajoDAO {
  async listarTrabajos() {
    return await Trabajo.findAll({
      include: [
        { model: Area, attributes: ['id', 'nombre'] },
        { model: Estado, attributes: ['id', 'nombre'] },
        { model: Tipo, attributes: ['id', 'nombre'] }
      ]
    });
  }

  async obtenerTrabajoPorId(id) {
    return await Trabajo.findByPk(id, {
      include: [
        { model: Area, attributes: ['id', 'nombre'] },
        { model: Estado, attributes: ['id', 'nombre'] },
        { model: Tipo, attributes: ['id', 'nombre'] }
      ]
    });
  }

  async insertarTrabajo(data) {
    try {
      const trabajoInstancia = new TrabajoClase(data);
      await trabajoInstancia.guardarTrabajo(); // Aquí se asignan correctamente AreaId, EstadoId, TipoId
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarTrabajo(data) {
    try {
      const trabajo = await Trabajo.findByPk(data.id);
      if (!trabajo) return 'Trabajo no encontrado';
      await trabajo.update(data);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarTrabajo(id) {
    try {
      const trabajo = await Trabajo.findByPk(id);
      if (!trabajo) return 'Trabajo no encontrado';
      await trabajo.destroy();
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async filtrarTrabajosPorCicloYArea(ciclos = [], temas = []) {
    const where = { visible: true };

    if (ciclos.length) {
      where.ciclo = { [Op.in]: ciclos };
    }

    if (temas.length) {
      where.AreaId = { [Op.in]: temas }; // ✅ corregido (antes: Areaid)
    }

    return await Trabajo.findAll({
      where,
      include: [
        { model: Area, attributes: ['id', 'nombre'] },
        { model: Estado, attributes: ['id', 'nombre'] },
        { model: Tipo, attributes: ['id', 'nombre'] }
      ],
      order: [['fecharegistro', 'DESC']]
    });
  }
}
