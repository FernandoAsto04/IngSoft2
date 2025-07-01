export class ProfesorClase {
  constructor(profesorEntidad) {
    this.id = profesorEntidad.id;
    this.usuario = profesorEntidad.Usuario;
  }

  mostrarDatos() {
    return {
      id: this.id,
      nombres: this.usuario.nombres,
      apellidos: this.usuario.apellidos,
      correo: this.usuario.email
    };
  }
}
