import { Trabajo } from "../models/Trabajo.js";

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

    // Acepta el formato directo con ID (Areaid, Estadoid, Tipoid)
    this.Areaid = trabajoClase.Areaid || trabajoClase.area?.id;
    this.Estadoid = trabajoClase.Estadoid || trabajoClase.estado?.id;
    this.Tipoid = trabajoClase.Tipoid || trabajoClase.tipo?.id;
  }


    async guardarTrabajo() {
    if (!this.titulo || this.titulo.trim() === "") {
      throw new Error("El título del trabajo es obligatorio.");
    }

    if (!this.descripcion || this.descripcion.trim().length < 10) {
      throw new Error("La descripción debe tener al menos 10 caracteres.");
    }

    if (!this.fecharegistro || isNaN(Date.parse(this.fecharegistro))) {
      throw new Error("Fecha de registro inválida.");
    }

    if (this.palabrasclave && typeof this.palabrasclave !== "string") {
      throw new Error("Las palabras clave deben ser un texto.");
    }

    if (!this.ciclo || !/^20\d{2}-[12]$/.test(this.ciclo)) {
      throw new Error("El ciclo debe tener el formato correcto (ej. 2025-1).");
    }

    if (typeof this.visible !== "boolean") {
      throw new Error("El campo 'visible' debe ser booleano.");
    }

    if (!this.Areaid || !Number.isInteger(this.Areaid)) {
      throw new Error("Área no válida.");
    }

    if (!this.Estadoid || !Number.isInteger(this.Estadoid)) {
      throw new Error("Estado no válido.");
    }

    if (!this.Tipoid || !Number.isInteger(this.Tipoid)) {
      throw new Error("Tipo no válido.");
    }

    try {
      const nuevoTrabajo = await Trabajo.create({
        titulo: this.titulo,
        descripcion: this.descripcion,
        fecharegistro: new Date(this.fecharegistro),
        observaciones: this.observaciones,
        palabrasclave: this.palabrasclave,
        ciclo: this.ciclo,
        visible: this.visible,
        Areaid: this.Areaid,
        Estadoid: this.Estadoid,
        Tipoid: this.Tipoid,
      });

      this.id = nuevoTrabajo.id;
      return nuevoTrabajo;
    } catch (error) {
      console.error("Error en guardarTrabajo:", error);
      throw new Error("Error al guardar el trabajo en la base de datos.");
    }
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
      area: this.area ? { id: this.area.id, nombre: this.area.nombre } : null,
      estado: this.estado ? { id: this.estado.id, nombre: this.estado.nombre } : null,
      tipo: this.tipo ? { id: this.tipo.id, nombre: this.tipo.nombre } : null,
    };
  }

  static Trabajos(listaTrabajos) {
    return listaTrabajos.map((trabajo) => {
      const instancia = new TrabajoClase(trabajo);
      return instancia.mostrarDatos();
    });
  }
}
