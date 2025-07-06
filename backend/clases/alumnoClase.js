import { UsuarioClase } from "./usuarioClase.js";

export class AlumnoClase extends UsuarioClase {
  constructor(alumnoEntidad) {
    super(alumnoEntidad.usuario);
    this.id = alumnoEntidad.id;
    this.codAlumno = alumnoEntidad.codAlumno;
  }

  mostrarDatos() {
    return {
      id: this.id,
      codAlumno: this.codAlumno,
      ...super.mostrarDatosUsuario()
    };
  }
}
