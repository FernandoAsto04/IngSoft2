"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Endpoint_1 = __importDefault(require("../clases/Endpoint"));
// @ts-ignore
const Usuario_js_1 = __importDefault(require("../models/Usuario.js"));
class UsuarioController extends Endpoint_1.default {
    async get(req, res) {
        const id = req.params.id;
        try {
            const usuario = await Usuario_js_1.default.findAll();
            //findByPk()
            if (usuario) {
                res.status(200).json(usuario);
            }
            else {
                res.status(404).send("Usuario no encontrado");
            }
        }
        catch (error) {
            res.status(500).send("Error en el servidor");
        }
    }
}
exports.default = UsuarioController;
