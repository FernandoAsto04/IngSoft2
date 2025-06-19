import { TrabajoTesisDAO } from '../patrones/patronDAO/daocomponent/trabajoTesisDAO.js';

const dao = new TrabajoTesisDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const tesis = await dao.listar();
    res.json(tesis);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajos de tesis', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const tesis = await dao.obtenerPorId(req.params.id);
    if (!tesis) return res.status(404).json({ error: 'Trabajo de tesis no encontrado' });
    res.json(tesis);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajo de tesis', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertar(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Trabajo de tesis creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear trabajo de tesis', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizar(data);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo de tesis actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar trabajo de tesis', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminar(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo de tesis eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar trabajo de tesis', message: error.message });
  }
};
