import Usuario from './Usuario';

class Alumno extends Usuario {

    codAlumno: string;

    constructor(nombres: string, apellidos: string, email: string, password: string, rol: string, codAlumno: string) {
        super(nombres, apellidos, email, password, rol);
    }

    iniciarSesion(): void {
        
    }

    cerrarSesion(): void {
       
    }

    actualizarDatos(): void {
        
    }

    verTrabajo(): void {
        
    }

}

export default Alumno;