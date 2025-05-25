abstract class Trabajo {
    titulo: string;
    descripcion:string;
    FechaDeRegistro:string;
    estado:string;
    observaciones:string;
    profesorasesor:string;
    palabrasclave:String;
    ciclo:string;

    constructor (titulo:string, descripcion:string, FechaDeRegistro:string, estado:string, observaciones:string, profesorasesor:string, palabrasclave:string, ciclo:string) {

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.FechaDeRegistro = FechaDeRegistro;
        this.estado = estado;
        this.observaciones = observaciones;
        this.profesorasesor = profesorasesor;
        this.palabrasclave = palabrasclave;
        this.ciclo = ciclo;
    }

    guardarTrabajo():void{
    

    }

    eliminarTrabajo():void{
    

    }

    

}

export default Trabajo;