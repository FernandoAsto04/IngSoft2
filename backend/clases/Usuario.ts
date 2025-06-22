abstract class Usuario {
    nombres: string;
    apellidos: string;
    email: string;
    password:string;
    rol:string;

    constructor (nombres: string, apellidos:string, email:string, password:string, rol:string) {

        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    iniciarSesion():void {
        
    }

    cerrarSesion():void {
        
    }

    actualizarDatos():void {
        
    }

    verTrabajo():void {
        
    }

}

export default Usuario;