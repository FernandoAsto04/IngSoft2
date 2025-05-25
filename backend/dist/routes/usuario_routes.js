"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const router = (0, express_1.Router)();
const controller = new UsuarioController_1.default();
router.get("/usuarios/:id", (req, res) => controller.get(req, res));
exports.default = router;
