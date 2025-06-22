import { EstadoDAO } from '../patrones/patronDAO/daocomponent/estadoDAO.js';

const dao = new EstadoDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const estados = await dao.listarEstados();
    res.json(estados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estados', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const estado = await dao.obtenerEstadoPorId(req.params.id);
    if (!estado) return res.status(404).json({ error: 'Estado no encontrado' });
    res.json(estado);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estado', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarEstado(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Estado creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear estado', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarEstado(data);
    if (error) throw new Error(error);
    res.json({ message: 'Estado actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar estado', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarEstado(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Estado eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar estado', message: error.message });
  }
};
