import { ProfesorDAO } from '../patrones/patronDAO/daocomponent/profesorDAO.js';

const dao = new ProfesorDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const profesores = await dao.listarProfesores();
    res.json(profesores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener profesores', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const profesor = await dao.obtenerProfesorPorId(req.params.id);
    if (!profesor) return res.status(404).json({ error: 'Profesor no encontrado' });
    res.json(profesor);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener profesor', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarProfesor(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Profesor creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear profesor', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarProfesor(data);
    if (error) throw new Error(error);
    res.json({ message: 'Profesor actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar profesor', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarProfesor(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Profesor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar profesor', message: error.message });
  }
};

export const mostrarDatos = async (req, res) => {
  try {
    const { id } = req.params;

    const datos = await dao.obtenerProfesorConDatos(id);

    if (!datos) {
      return res.status(404).json({ error: "Profesor no encontrado" });
    }

    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: "Error al mostrar datos", message: error.message });
  }
};