import { AlumnoDAO } from '../patrones/patronDAO/daocomponent/alumnoDAO.js';

const dao = new AlumnoDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const alumnos = await dao.listarAlumnos();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener alumnos', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const alumno = await dao.obtenerAlumnoPorId(req.params.id);
    if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener alumno', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarAlumno(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Alumno creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear alumno', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarAlumno(data);
    if (error) throw new Error(error);
    res.json({ message: 'Alumno actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar alumno', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarAlumno(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Alumno eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar alumno', message: error.message });
  }
};
