import express from 'express';
import { Profesor } from '../patrones/patronDAO/daoto/ProfesorTO.js';
import { Area } from '../patrones/patronDAO/daoto/AreaTO.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const profesores = await Profesor.findAll({
            include: Area // Opcional: Incluye las áreas relacionadas
        });
        res.json(profesores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener profesores', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const profesor = await Profesor.findByPk(req.params.id, {
            include: Area
        });
        if (!profesor) return res.status(404).json({ message: 'Profesor no encontrado' });
        res.json(profesor);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el profesor', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoProfesor = await Profesor.create(req.body);
        res.status(201).json(nuevoProfesor);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear profesor', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const profesor = await Profesor.findByPk(req.params.id);
        if (!profesor) return res.status(404).json({ message: 'Profesor no encontrado' });

        await profesor.update(req.body);
        res.json(profesor);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar profesor', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const profesor = await Profesor.findByPk(req.params.id);
        if (!profesor) return res.status(404).json({ message: 'Profesor no encontrado' });

        await profesor.destroy();
        res.json({ message: 'Profesor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar profesor', error });
    }
});

export default router;
