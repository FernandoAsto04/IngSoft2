export class AlumnoClase extends UsuarioClase {
  constructor(alumnoEntidad) {
    super(
      alumnoEntidad.usuario.nombres,
      alumnoEntidad.usuario.apellidos,
      alumnoEntidad.usuario.email
    );
    this.id = alumnoEntidad.id;
    this.codAlumno = alumnoEntidad.codAlumno;
  }

  mostrarDatos() {
    return {
      id: this.id,
      codAlumno: this.codAlumno,
      ...super.mostrarDatos()
    };
  }
}