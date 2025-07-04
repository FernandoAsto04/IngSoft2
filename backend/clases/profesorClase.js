import { UsuarioClase } from "./usuarioClase.js";

export class ProfesorClase extends UsuarioClase {
  constructor(profesorEntidad) {
    super(
      profesorEntidad.usuario.nombres,
      profesorEntidad.usuario.apellidos,
      profesorEntidad.usuario.email
    );
    this.id = profesorEntidad.id;
  }

  mostrarDatos() {
    return {
      id: this.id,
      ...super.mostrarDatos()
    };
  }
}
