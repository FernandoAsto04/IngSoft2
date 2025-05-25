"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trabajo {
    constructor(titulo, descripcion, FechaDeRegistro, estado, observaciones, profesorasesor, palabrasclave, ciclo) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.FechaDeRegistro = FechaDeRegistro;
        this.estado = estado;
        this.observaciones = observaciones;
        this.profesorasesor = profesorasesor;
        this.palabrasclave = palabrasclave;
        this.ciclo = ciclo;
    }
    guardarTrabajo() {
    }
    eliminarTrabajo() {
    }
}
exports.default = Trabajo;
