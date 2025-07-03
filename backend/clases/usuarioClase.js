export class UsuarioClase {
  constructor(usuarioEntidad) {
    this.id = UsuarioClase.id;
    this.nombres = UsuarioClase.nombres;
    this.apellidos = UsuarioClase.apellidos;
    this.email = UsuarioClase.email;
    this.contrasenia = UsuarioClase.contrasenia;
    this.rol = UsuarioClase.rol;

    // Relaciones opcionales
    this.alumnos = UsuarioClase.Alumnos || [];
    this.profesores = UsuarioClase.Profesores || [];
    this.administradores = UsuarioClase.Administradores || [];
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
}
