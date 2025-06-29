import express from "express";
import { ProfesorDAO } from "../patrones/patronDAO/daocomponent/profesorDAO.js";

import {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
} from "../controllers/profesorController.js";

const router = express.Router();
const dao = new ProfesorDAO();

// Rutas CRUD
router.get("/", obtenerTodos);
router.get("/:id", obtenerPorId);
router.post("/", crear);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);

// 🧠 Nueva ruta: filtrar profesores por líneas de investigación
router.post("/lineas", async (req, res) => {
  const { lineaIds } = req.body;

  if (!lineaIds || !Array.isArray(lineaIds) || lineaIds.length === 0) {
    return res.status(400).json({ error: "Debes enviar un arreglo de IDs de líneas." });
  }

  try {
    const profesores = await dao.obtenerPorVariasLineas(lineaIds);
    res.json(profesores);
  } catch (error) {
    console.error("❌ Error al buscar profesores por líneas:", error);
    res.status(500).json({ error: "Error al buscar profesores." });
  }
});

export default router;
