import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router = Router();
const controller = new UsuarioController();

router.get("/usuarios/:id", (req, res) => controller.get(req, res));

export default router;

