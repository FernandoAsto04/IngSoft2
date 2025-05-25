"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Trabajo_1 = __importDefault(require("./Trabajo"));
class TipoTrabajo extends Trabajo_1.default {
    constructor(nombre, titulo, descripcion, FechaDeRegistro, estado, observaciones, profesorasesor, palabrasclave, ciclo) {
        super(titulo, descripcion, FechaDeRegistro, estado, observaciones, profesorasesor, palabrasclave, ciclo);
        this.nombre = nombre;
    }
    guardarTrabajo() {
        console.log(`Guardando el tipo de trabajo "${this.nombre}" con título "${this.titulo}"`);
    }
}
exports.default = TipoTrabajo;
