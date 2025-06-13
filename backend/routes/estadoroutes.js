import express from 'express';

import { Estado } from '../patrones/patronDAO/daoto/EstadoTO.js';
import { Trabajo } from '../patrones/patronDAO/daoto/TrabajoTO.js';
const router = express.Router();

// Obtener todos los estados (con trabajos relacionados opcionalmente)
router.get('/', async (req, res) => {
    try {
        const estados = await Estado.findAll({
            include: Trabajo // Puedes quitar esto si no necesitas los trabajos relacionados
        });
        res.json(estados);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los estados', error });
    }
});

// Obtener un estado por ID
router.get('/:id', async (req, res) => {
    try {
        const estado = await Estado.findByPk(req.params.id, {
            include: Trabajo
        });
        if (!estado) return res.status(404).json({ message: 'Estado no encontrado' });
        res.json(estado);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el estado', error });
    }
});

// Crear un nuevo estado
router.post('/', async (req, res) => {
    try {
        const nuevoEstado = await Estado.create(req.body);
        res.status(201).json(nuevoEstado);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear estado', error });
    }
});

// Actualizar un estado existente
router.put('/:id', async (req, res) => {
    try {
        const estado = await Estado.findByPk(req.params.id);
        if (!estado) return res.status(404).json({ message: 'Estado no encontrado' });

        await estado.update(req.body);
        res.json(estado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar estado', error });
    }
});

// Eliminar un estado
router.delete('/:id', async (req, res) => {
    try {
        const estado = await Estado.findByPk(req.params.id);
        if (!estado) return res.status(404).json({ message: 'Estado no encontrado' });

        await estado.destroy();
        res.json({ message: 'Estado eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar estado', error });
    }
});

export default router;
