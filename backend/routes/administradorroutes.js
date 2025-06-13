import express from 'express';
import { Administrador } from '../patrones/patronDAO/daoto/AdministradorTO.js';

const router = express.Router();

// Obtener todos los administradores
router.get('/', async (req, res) => {
    try {
        const administradores = await Administrador.findAll();
        res.json(administradores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener administradores', error });
    }
});

// Obtener un administrador por ID
router.get('/:id', async (req, res) => {
    try {
        const administrador = await Administrador.findByPk(req.params.id);
        if (!administrador) return res.status(404).json({ message: 'Administrador no encontrado' });
        res.json(administrador);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el administrador', error });
    }
});

// Crear un nuevo administrador
router.post('/', async (req, res) => {
    try {
        const nuevoAdministrador = await Administrador.create(req.body);
        res.status(201).json(nuevoAdministrador);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear administrador', error });
    }
});

// Actualizar un administrador existente
router.put('/:id', async (req, res) => {
    try {
        const administrador = await Administrador.findByPk(req.params.id);
        if (!administrador) return res.status(404).json({ message: 'Administrador no encontrado' });

        await administrador.update(req.body);
        res.json(administrador);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar administrador', error });
    }
});

// Eliminar un administrador
router.delete('/:id', async (req, res) => {
    try {
        const administrador = await Administrador.findByPk(req.params.id);
        if (!administrador) return res.status(404).json({ message: 'Administrador no encontrado' });

        await administrador.destroy();
        res.json({ message: 'Administrador eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar administrador', error });
    }
});

export default router;
