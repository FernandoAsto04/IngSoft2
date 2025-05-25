"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Profesor extends Usuario_1.default {
    constructor(nombres, apellidos, email, password, rol) {
        super(nombres, apellidos, email, password, rol);
    }
    iniciarSesion() {
    }
    cerrarSesion() {
    }
    actualizarDatos() {
    }
    verTrabajo() {
    }
    observarSubido() {
    }
}
exports.default = Profesor;
