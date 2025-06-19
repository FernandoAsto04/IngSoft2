import { TrabajoPaperDAO } from '../patrones/patronDAO/daocomponent/trabajoPaperDAO.js';

const dao = new TrabajoPaperDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const papers = await dao.listar();
    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajos de tipo paper', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const paper = await dao.obtenerPorId(req.params.id);
    if (!paper) return res.status(404).json({ error: 'Trabajo paper no encontrado' });
    res.json(paper);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajo paper', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertar(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Trabajo paper creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear trabajo paper', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizar(data);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo paper actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar trabajo paper', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminar(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo paper eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar trabajo paper', message: error.message });
  }
};
