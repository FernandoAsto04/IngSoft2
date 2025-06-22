
import express from 'express';
import {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
} from '../controllers/usuarioController.js';

import { login  } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', obtenerTodos);
router.get('/:id', obtenerPorId);
router.post('/', crear);
router.put('/:id', actualizar);
router.delete('/:id', eliminar);
router.post('/login', login);

export default router;
