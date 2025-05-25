import Usuario from './Usuario';

class Administrador extends Usuario {

    codAlumno: string;

    constructor(nombres: string, apellidos: string, email: string, password: string, rol: string) {
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

export default Administrador;