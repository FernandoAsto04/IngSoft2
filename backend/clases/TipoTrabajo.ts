import Trabajo from "./Trabajo";

class TipoTrabajo extends Trabajo {
    nombre: string;

    constructor(
        nombre: string,
        titulo: string,
        descripcion: string,
        FechaDeRegistro: string,
        estado: string,
        observaciones: string,
        profesorasesor: string,
        palabrasclave: string,
        ciclo: string
    ) {
        super(titulo, descripcion, FechaDeRegistro, estado, observaciones, profesorasesor, palabrasclave, ciclo);
        this.nombre = nombre;
    }

    guardarTrabajo(): void {
        console.log(`Guardando el tipo de trabajo "${this.nombre}" con título "${this.titulo}"`);
    }
}

export default TipoTrabajo;