"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Alumno extends Usuario_1.default {
    constructor(nombres, apellidos, email, password, rol, codAlumno) {
        super(nombres, apellidos, email, password, rol);
        this.codAlumno = codAlumno;
    }
    iniciarSesion() {
    }
    cerrarSesion() {
    }
    actualizarDatos() {
    }
    verTrabajo() {
    }
}
exports.default = Alumno;
