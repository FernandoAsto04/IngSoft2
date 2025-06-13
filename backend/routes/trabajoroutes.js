import express from 'express';
import { Trabajo } from '../patrones/patronDAO/daoto/TrabajoTO.js';
import { TrabajoArticulo } from '../patrones/patronDAO/daoto/TrabajoArticuloTO.js';
import { TrabajoPaper } from '../patrones/patronDAO/daoto/TrabajoPaperTO.js';
import { TrabajoTesis } from '../patrones/patronDAO/daoto/TrabajoTesisTO.js';


const router = express.Router();

// Obtener todos los trabajos (con relaciones opcionales)
router.get('/', async (req, res) => {
    try {
        const trabajos = await Trabajo.findAll({
            include: [TrabajoArticulo, TrabajoPaper, TrabajoTesis]
        });
        res.json(trabajos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los trabajos', error });
    }
});

// Obtener un trabajo por ID
router.get('/:id', async (req, res) => {
    try {
        const trabajo = await Trabajo.findByPk(req.params.id, {
            include: [TrabajoArticulo, TrabajoPaper, TrabajoTesis]
        });
        if (!trabajo) return res.status(404).json({ message: 'Trabajo no encontrado' });
        res.json(trabajo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el trabajo', error });
    }
});

// Crear un nuevo trabajo
router.post('/', async (req, res) => {
    try {
        const nuevoTrabajo = await Trabajo.create(req.body);
        res.status(201).json(nuevoTrabajo);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el trabajo', error });
    }
});

// Actualizar un trabajo existente
router.put('/:id', async (req, res) => {
    try {
        const trabajo = await Trabajo.findByPk(req.params.id);
        if (!trabajo) return res.status(404).json({ message: 'Trabajo no encontrado' });

        await trabajo.update(req.body);
        res.json(trabajo);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el trabajo', error });
    }
});

// Eliminar un trabajo
router.delete('/:id', async (req, res) => {
    try {
        const trabajo = await Trabajo.findByPk(req.params.id);
        if (!trabajo) return res.status(404).json({ message: 'Trabajo no encontrado' });

        await trabajo.destroy();
        res.json({ message: 'Trabajo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el trabajo', error });
    }
});

export default router;
