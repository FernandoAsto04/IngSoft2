import { UsuarioClase } from "./usuarioClase.js";

export class AdministradorClase extends UsuarioClase {
  constructor(administradorEntidad) {
    super(administradorEntidad.usuario); 
    this.id = administradorEntidad.id;
  }

  mostrarDatos() {
    return {
      id: this.id,
      ...super.mostrarDatosUsuario()
    };
  }
}
