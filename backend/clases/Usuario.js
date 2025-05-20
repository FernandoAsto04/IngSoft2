class Usuario {

    constructor (nombres, apellidos, email, password, rol) {

        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    saludar() {
        return ("Hola, soy ${this.nombre), tengo ${this.edad) años y mi correo es ${this.correo)")
    }

}

module.exports = Usuario;
