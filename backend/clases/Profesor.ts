import Usuario from './Usuario';

class Profesor extends Usuario {
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

    observarSubido(): void {
        
    }
}

export default Profesor;