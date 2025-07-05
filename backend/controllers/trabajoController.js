import { TrabajoDAO } from '../patrones/patronDAO/daocomponent/trabajoDAO.js';
import { Trabajo } from "../models/Trabajo.js";
import { Area } from "../models/Area.js";
import { Estado } from "../models/Estado.js";
import { Tipo } from "../models/Tipo.js";



const dao = new TrabajoDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const trabajos = await dao.listarTrabajos();
    res.json(trabajos);
  } catch (error) {
    console.error("❌ Error general en obtenerTodos:", error);
    res.status(500).json({ error: "Error al obtener trabajos" });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const trabajo = await dao.obtenerTrabajoPorId(req.params.id);
    if (!trabajo) return res.status(404).json({ error: 'Trabajo no encontrado' });
    res.json(trabajo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajo', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarTrabajo(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Trabajo creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear trabajo', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarTrabajo(data);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar trabajo', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarTrabajo(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Trabajo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar trabajo', message: error.message });
  }
};

export const filtrar = async (req, res) => {
  try {
    const { ciclos = [], temas = [] } = req.body;
    const trabajosFiltrados = await dao.filtrarTrabajosPorCicloYArea(ciclos, temas);
    res.json(trabajosFiltrados);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar trabajos", message: error.message });
  }
};
