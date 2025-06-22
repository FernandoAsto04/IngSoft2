import { AreaDAO } from '../patrones/patronDAO/daocomponent/areaDAO.js';

const dao = new AreaDAO();

export const obtenerTodas = async (req, res) => {
  try {
    const areas = await dao.listarAreas();
    res.json(areas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener áreas', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const area = await dao.obtenerAreaPorId(req.params.id);
    if (!area) return res.status(404).json({ error: 'Área no encontrada' });
    res.json(area);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener área', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarArea(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Área creada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear área', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarArea(data);
    if (error) throw new Error(error);
    res.json({ message: 'Área actualizada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar área', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarArea(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Área eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar área', message: error.message });
  }
};
