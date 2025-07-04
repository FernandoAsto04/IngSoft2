import { UsuarioClase } from "./usuarioClase.js";

export class AdministradorClase extends UsuarioClase {
  constructor(administradorEntidad) {
    super(
      administradorEntidad.usuario.nombres,
      administradorEntidad.usuario.apellidos,
      administradorEntidad.usuario.email
    );
    this.id = administradorEntidad.id;
  }

  mostrarDatos() {
    return {
      id: this.id,
      ...super.mostrarDatos()
    };
  }
}