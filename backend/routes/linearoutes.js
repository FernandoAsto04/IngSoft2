import express from 'express';
import { Linea } from '../patrones/patronDAO/daoto/LineaTO.js';
import { Area } from '../patrones/patronDAO/daoto/AreaTO.js';

const router = express.Router();

// Obtener todas las líneas (con el área relacionada)
router.get('/', async (req, res) => {
    try {
        const lineas = await Linea.findAll({
            include: Area
        });
        res.json(lineas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener líneas', error });
    }
});

// Obtener una línea por ID
router.get('/:id', async (req, res) => {
    try {
        const linea = await Linea.findByPk(req.params.id, {
            include: Area
        });
        if (!linea) return res.status(404).json({ message: 'Línea no encontrada' });
        res.json(linea);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la línea', error });
    }
});

// Crear una nueva línea
router.post('/', async (req, res) => {
    try {
        const nuevaLinea = await Linea.create(req.body);
        res.status(201).json(nuevaLinea);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear línea', error });
    }
});

// Actualizar una línea existente
router.put('/:id', async (req, res) => {
    try {
        const linea = await Linea.findByPk(req.params.id);
        if (!linea) return res.status(404).json({ message: 'Línea no encontrada' });

        await linea.update(req.body);
        res.json(linea);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar línea', error });
    }
});

// Eliminar una línea
router.delete('/:id', async (req, res) => {
    try {
        const linea = await Linea.findByPk(req.params.id);
        if (!linea) return res.status(404).json({ message: 'Línea no encontrada' });

        await linea.destroy();
        res.json({ message: 'Línea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar línea', error });
    }
});

export default router;
