import express from 'express';
import { Alumno } from '../patrones/patronDAO/daoto/AlumnoTO.js';

const router = express.Router();

// Obtener todos los alumnos
router.get('/', async (req, res) => {
    try {
        const alumnos = await Alumno.findAll();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener alumnos', error });
    }
});

// Obtener un alumno por ID
router.get('/:id', async (req, res) => {
    try {
        const alumno = await Alumno.findByPk(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });
        res.json(alumno);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el alumno', error });
    }
});

// Crear un nuevo alumno
router.post('/', async (req, res) => {
    try {
        const nuevoAlumno = await Alumno.create(req.body);
        res.status(201).json(nuevoAlumno);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear alumno', error });
    }
});

// Actualizar un alumno existente
router.put('/:id', async (req, res) => {
    try {
        const alumno = await Alumno.findByPk(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });

        await alumno.update(req.body);
        res.json(alumno);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar alumno', error });
    }
});

// Eliminar un alumno
router.delete('/:id', async (req, res) => {
    try {
        const alumno = await Alumno.findByPk(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });

        await alumno.destroy();
        res.json({ message: 'Alumno eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar alumno', error });
    }
});

export default router;
