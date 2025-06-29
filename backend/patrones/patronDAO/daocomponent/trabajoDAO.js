import { Trabajo } from "../daoto/TrabajoTO.js";
import { Area } from "../daoto/AreaTO.js";
import { Estado } from "../daoto/EstadoTO.js";  

import { Op } from 'sequelize';

export class TrabajoDAO {
  async listarTrabajos() {
    return await Trabajo.findAll({
      include: [
        { model: Area, as: 'area', attributes: ['id', 'nombre'] },
        { model: Estado, as: 'estado', attributes: ['id', 'nombre'] }
      ]
    });
  }

  async obtenerTrabajoPorId(id) {
    return await Trabajo.findByPk(id, {
      include: [
        { model: Area, as: 'area', attributes: ['id', 'nombre'] },
        { model: Estado, as: 'estado', attributes: ['id', 'nombre'] }
      ]
    });
  }

  async insertarTrabajo(data) {
    try {
      await Trabajo.create(data);
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
      where.Areaid = { [Op.in]: temas };
    }

    return await Trabajo.findAll({
      where,
      include: [
        {
          model: Area,
          as: 'Area',
          attributes: ['id', 'nombre']
        },
        {
          model: Estado,
          as: 'Estado',
          attributes: ['id', 'nombre']
        }
      ],
      order: [['fecharegistro', 'DESC']]
    });
  }
}