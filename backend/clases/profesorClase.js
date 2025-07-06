import { UsuarioClase } from "./usuarioClase.js";

export class ProfesorClase extends UsuarioClase {
  constructor(profesorEntidad) {
    super(profesorEntidad.usuario);

    this.id = profesorEntidad.id;
  }

  mostrarDatos() {
    return {
      id: this.id,
      ...super.mostrarDatosUsuario()
    };
  }
}
