import express from 'express';
import { Usuario } from '../patrones/patronDAO/daoto/UsuarioTO.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        console.log(usuarios);
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear usuario', error });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar usuario', error });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

        await usuario.destroy();
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error });
    }
});

export default router;
