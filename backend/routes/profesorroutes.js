import express from "express";


import {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
  mostrarDatos,
  buscarPorLineas
} from "../controllers/profesorController.js";

const router = express.Router();

// Rutas CRUD
router.get("/", obtenerTodos);
router.get("/:id", obtenerPorId);
router.post("/", crear);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);
router.get("/mostrarDatos/:id", mostrarDatos);
router.post("/buscar-por-lineas", buscarPorLineas);


export default router;
