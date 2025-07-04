import { UsuarioDAO } from '../patrones/patronDAO/daocomponent/usuarioDAO.js';
import { Usuario } from '../models/Usuario.js';

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
    const datos = await dao.obtenerUsuarioPorId(req.params.id);
    if (!datos) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos", message: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    // Insertar directamente la contraseña como texto plano (solo para pruebas)
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

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Comparación directa de contraseña en texto plano
    if (usuario.contrasenia !== password) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      usuario: {
        id: usuario.id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        email: usuario.email,
        rol: usuario.rol
      }
    });

  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor', error });
  }
};
