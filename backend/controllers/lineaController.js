import { LineaDAO } from '../patrones/patronDAO/daocomponent/lineaDAO.js';

const dao = new LineaDAO();

export const obtenerTodas = async (req, res) => {
  try {
    const lineas = await dao.listarLineas();
    res.json(lineas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener líneas', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const linea = await dao.obtenerLineaPorId(req.params.id);
    if (!linea) return res.status(404).json({ error: 'Línea no encontrada' });
    res.json(linea);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener línea', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarLinea(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Línea creada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear línea', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarLinea(data);
    if (error) throw new Error(error);
    res.json({ message: 'Línea actualizada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar línea', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarLinea(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Línea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar línea', message: error.message });
  }
};
