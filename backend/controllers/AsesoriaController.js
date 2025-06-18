import {AsesoriaDAO} from '../patrones/patronDAO/daocomponent/asesoriaDAO.js'
import {Profesor} from '../patrones/patronDAO/daoto/ProfesorTO.js'


const dao = new AsesoriaDAO();

export const obtenerTodas = async (req, res) => {
  try {
    const asesorias = await dao.listarAsesorias();
    res.json(asesorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener asesorías', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const asesoria = await dao.obtenerAsesoriaPorId(req.params.id);
    if (!asesoria) return res.status(404).json({ error: 'Asesoría no encontrada' });
    res.json(asesoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener asesoría', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarAsesoria(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Asesoría creada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear asesoría', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarAsesoria(data);
    if (error) throw new Error(error);
    res.json({ message: 'Asesoría actualizada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar asesoría', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarAsesoria(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Asesoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar asesoría', message: error.message });
  }
};
