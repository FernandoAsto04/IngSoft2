class Trabajo {

    constructor (titulo, descripcion, FechaDeRegistro, estado, observaciones, profesorasesor, palabrasclave, ciclo) {

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.FechaDeRegistro = FechaDeRegistro;
        this.estado = estado;
        this.observaciones = observaciones;
        this.profesorasesor = profesorasesor;
        this.palabrasclave = palabrasclave;
        this.ciclo = ciclo;
    }

    guardarTrabajo(){
    return "falta implementar el comportamiento";

    }

    eliminarTrabajo(){
    return "falta implementar el comportamiento";

    }

    

}

module.exports = Trabajo;