import { UsuarioDAO } from '../patrones/patronDAO/daocomponent/usuarioDAO.js';

const dao = new UsuarioDAO();

export const obtenerTodos = async (req, res) => {
  try {
    const usuarios = await dao.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios', message: error.message });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const usuario = await dao.obtenerUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario', message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const error = await dao.insertarUsuario(req.body);
    if (error) throw new Error(error);
    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario', message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    const error = await dao.actualizarUsuario(data);
    if (error) throw new Error(error);
    res.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar usuario', message: error.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const error = await dao.eliminarUsuario(req.params.id);
    if (error) throw new Error(error);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario', message: error.message });
  }
};
