import express from 'express';
import { Asesoria } from '../patrones/patronDAO/daoto/AsesoriaTO.js';
import { Profesor } from '../patrones/patronDAO/daoto/ProfesorTO.js';

const router = express.Router();

// Obtener todas las asesorías (con profesor asociado)
router.get('/', async (req, res) => {
    try {
        const asesorias = await Asesoria.findAll({
            include: Profesor
        });
        res.json(asesorias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener asesorías', error });
    }
});

// Obtener una asesoría por ID
router.get('/:id', async (req, res) => {
    try {
        const asesoria = await Asesoria.findByPk(req.params.id, {
            include: Profesor
        });
        if (!asesoria) return res.status(404).json({ message: 'Asesoría no encontrada' });
        res.json(asesoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la asesoría', error });
    }
});

// Crear una nueva asesoría
router.post('/', async (req, res) => {
    try {
        const nuevaAsesoria = await Asesoria.create(req.body);
        res.status(201).json(nuevaAsesoria);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear asesoría', error });
    }
});

// Actualizar una asesoría existente
router.put('/:id', async (req, res) => {
    try {
        const asesoria = await Asesoria.findByPk(req.params.id);
        if (!asesoria) return res.status(404).json({ message: 'Asesoría no encontrada' });

        await asesoria.update(req.body);
        res.json(asesoria);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar asesoría', error });
    }
});

// Eliminar una asesoría
router.delete('/:id', async (req, res) => {
    try {
        const asesoria = await Asesoria.findByPk(req.params.id);
        if (!asesoria) return res.status(404).json({ message: 'Asesoría no encontrada' });

        await asesoria.destroy();
        res.json({ message: 'Asesoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar asesoría', error });
    }
});

export default router;
