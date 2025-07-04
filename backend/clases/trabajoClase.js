// clases/trabajoClase.js
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

    this.Areaid = trabajoClase.Areaid || trabajoClase.area?.id;
    this.Estadoid = trabajoClase.Estadoid || trabajoClase.estado?.id;
    this.Tipoid = trabajoClase.Tipoid || trabajoClase.tipo?.id;

    this.area = trabajoClase.area || null;
    this.estado = trabajoClase.estado || null;
    this.tipo = trabajoClase.tipo || null;
  }

  mostrarDatos() {
  return {
    id: this.id,
    titulo: this.titulo,
    descripcion: this.descripcion,
    fecharegistro: this.fecharegistro,
    observaciones: this.observaciones,
    palabrasclave: this.palabrasclave,
    ciclo: this.ciclo,
    visible: this.visible,
    area: this.area,
    estado: this.estado,
    tipo: this.tipo
  };
}

  static Trabajos(lista) {
  return lista.map(trabajo => {
    const instancia = new TrabajoClase(trabajo);
    return instancia.mostrarDatos();
  });
}
}
