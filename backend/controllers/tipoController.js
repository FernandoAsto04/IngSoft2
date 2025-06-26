import { TipoDAO } from '../patrones/patronDAO/daocomponent/tipoDAO.js';

const dao = new TipoDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const tipos = await dao.listarTipos();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tipos', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const tipo = await dao.obtenerTiposPorId(req.params.id);
    if (!tipo) return res.status(404).json({ error: 'Tipo no encontrado' });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tipo', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarTipo(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Tipo creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear tipo', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarTipo(data);
    if (error) throw new Error(error);
    res.json({ message: 'Tipo actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar tipo', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarTipo(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Tipo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar tipo', message: error.message });
  }
};