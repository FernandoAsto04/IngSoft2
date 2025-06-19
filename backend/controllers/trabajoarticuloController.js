import { TrabajoArticuloDAO } from '../patrones/patronDAO/daocomponent/trabajoArticuloDAO.js';

const dao = new TrabajoArticuloDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const articulos = await dao.listar();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajos de artículo', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const articulo = await dao.obtenerPorId(req.params.id);
    if (!articulo) return res.status(404).json({ error: 'Trabajo de artículo no encontrado' });
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajo de artículo', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertar(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Trabajo de artículo creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear trabajo de artículo', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizar(data);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo de artículo actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar trabajo de artículo', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminar(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo de artículo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar trabajo de artículo', message: error.message });
  }
};
