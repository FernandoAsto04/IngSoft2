export class TrabajoClase {
  constructor(trabajoClase) {
    this.id = trabajoClase.id;
    this.titulo = trabajoClase.titulo;
    this.descripcion = trabajoClase.descripcion;
    this.fecharegistro = trabajoClase.fecharegistro;
    this.observaciones = trabajoClase.observaciones;
    this.palabrasclave = trabajoClase.palabrasclave;
    this.ciclo = trabajoClase.ciclo;
    this.visible = trabajoClase.visible;

    this.area = trabajoClase.Area;
    this.estado = trabajoClase.Estado;
    this.tipo = trabajoClase.Tipo;
  }

  
}
