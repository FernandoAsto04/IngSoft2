
import express from 'express';
import {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar, 
  filtrar
} from '../controllers/trabajoController.js';

const router = express.Router();

router.get('/', obtenerTodos);
router.get('/:id', obtenerPorId);
router.post('/', crear);
router.put('/:id', actualizar);
router.delete('/:id', eliminar);
router.post('/filtro', filtrar);

export default router;
