import express from 'express';
import { Area } from '../patrones/patronDAO/daoto/AreaTO.js';
import { Trabajo } from '../patrones/patronDAO/daoto/TrabajoTO.js';

const router = express.Router();

// Obtener todas las áreas (con trabajos relacionados)
router.get('/', async (req, res) => {
    try {
        const areas = await Area.findAll({
            include: Trabajo
        });
        res.json(areas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener áreas', error });
    }
});

// Obtener un área por ID
router.get('/:id', async (req, res) => {
    try {
        const area = await Area.findByPk(req.params.id, {
            include: Trabajo
        });
        if (!area) return res.status(404).json({ message: 'Área no encontrada' });
        res.json(area);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el área', error });
    }
});

// Crear una nueva área
router.post('/', async (req, res) => {
    try {
        const nuevaArea = await Area.create(req.body);
        res.status(201).json(nuevaArea);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear área', error });
    }
});

// Actualizar un área existente
router.put('/:id', async (req, res) => {
    try {
        const area = await Area.findByPk(req.params.id);
        if (!area) return res.status(404).json({ message: 'Área no encontrada' });

        await area.update(req.body);
        res.json(area);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar área', error });
    }
});

// Eliminar un área
router.delete('/:id', async (req, res) => {
    try {
        const area = await Area.findByPk(req.params.id);
        if (!area) return res.status(404).json({ message: 'Área no encontrada' });

        await area.destroy();
        res.json({ message: 'Área eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar área', error });
    }
});

export default router;
