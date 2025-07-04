export class UsuarioClase {
  constructor(usuarioEntidad) {
    this.id = usuarioEntidad.id;
    this.nombres = usuarioEntidad.nombres;
    this.apellidos = usuarioEntidad.apellidos;
    this.email = usuarioEntidad.email;
    this.contrasenia = usuarioEntidad.contrasenia;
    this.rol = usuarioEntidad.rol;

    // Relaciones opcionales
    this.alumnos = usuarioEntidad.Alumnos || [];
    this.profesores = usuarioEntidad.Profesores || [];
    this.administradores = usuarioEntidad.Administradores || [];
  }

  esAdministrador() {
    return this.rol === 'administrador';
  }

  esAlumno() {
    return this.rol === 'alumno';
  }

  esProfesor() {
    return this.rol === 'profesor';
  }

  mostrarDatosUsuario() {
    return {
      id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      correo: this.email
    };
  }
}
