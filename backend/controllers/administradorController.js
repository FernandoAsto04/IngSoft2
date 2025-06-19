import { AdministradorDAO } from '../patrones/patronDAO/daocomponent/administradorDAO.js';

const dao = new AdministradorDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const administradores = await dao.listarAdministradores();
    res.json(administradores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener administradores', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const administrador = await dao.obtenerAdministradorPorId(req.params.id);
    if (!administrador) return res.status(404).json({ error: 'Administrador no encontrado' });
    res.json(administrador);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener administrador', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarAdministrador(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Administrador creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear administrador', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarAdministrador(data);
    if (error) throw new Error(error);
    res.json({ message: 'Administrador actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar administrador', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarAdministrador(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Administrador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar administrador', message: error.message });
  }
};
