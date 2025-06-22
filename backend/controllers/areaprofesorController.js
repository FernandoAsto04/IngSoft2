import { AreaProfesorDAO } from '../patrones/patronDAO/daocomponent/areaProfesorDAO.js';

const dao = new AreaProfesorDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const registros = await dao.listar();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener registros de ÁreaProfesor', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const registro = await dao.obtenerPorId(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Registro de ÁreaProfesor no encontrado' });
    res.json(registro);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener registro', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertar(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Registro de ÁreaProfesor creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear registro', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizar(data);
    if (error) throw new Error(error);
    res.json({ message: 'Registro de ÁreaProfesor actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar registro', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminar(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Registro de ÁreaProfesor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar registro', message: error.message });
  }
};
