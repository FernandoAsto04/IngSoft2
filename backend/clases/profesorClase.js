export class ProfesorClase {
  constructor(profesorEntidad) {
    this.id = profesorEntidad.id;
    this.usuario = profesorEntidad.usuario; //Si sale error poner la u mayuscula
  }

  mostrarDatos() {
    return {
      id: this.id,
      nombres: this.usuario.nombres,
      apellidos: this.usuario.apellidos,
      correo: this.usuario.email
    };
  }

  verProfesores(listaDeProfesores) {
  return listaDeProfesores.map(p => new ProfesorClase(p).mostrarDatos());
  }
}
