import { Trabajo } from "../models/Trabajo.js";
import { Op } from "sequelize";
import { Area } from "../models/Area.js";
import { Estado } from "../models/Estado.js";
import { Tipo } from "../models/Tipo.js";


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

    this.area = trabajoClase.Area || null;
    this.estado = trabajoClase.Estado || null;
    this.tipo = trabajoClase.Tipo || null;
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
  }


  mostrarDatos() {
  let tituloFinal = this.titulo;
  let cicloFinal = this.ciclo;
  let visibleFinal = this.visible;

  // Condicional 1: Si el título está vacío o solo espacios, usar "Sin título"
  if (!this.titulo || this.titulo.trim().length === 0) {
    tituloFinal = "Sin título";
  }

  // Condicional 2: Si el ciclo no tiene el formato correcto (ej: 2025-1), mostrar null
  if (!/^20\d{2}-[12]$/.test(this.ciclo)) {
    cicloFinal = null;
  }

  // Condicional 3: Si visible no es booleano, forzar a false
  if (typeof this.visible !== "boolean") {
    visibleFinal = false;
  }

  return {
    id: this.id,
    titulo: tituloFinal,
    descripcion: this.descripcion,
    fecharegistro: this.fecharegistro,
    observaciones: this.observaciones,
    palabrasclave: this.palabrasclave,
    ciclo: cicloFinal,
    visible: visibleFinal,
    area: this.area ? { id: this.area.id, nombre: this.area.nombre } : null,
    estado: this.estado ? { id: this.estado.id, nombre: this.estado.nombre } : null,
    tipo: this.tipo ? { id: this.tipo.id, nombre: this.tipo.nombre } : null,
  };
}


  static Trabajos(listaTrabajos) {
    return listaTrabajos.map((trabajo) => {
      console.log("Trabajo bruto:", trabajo); 
      const instancia = new TrabajoClase(trabajo);
      return instancia.mostrarDatos();
    });
  }


  static async buscarPorCicloYArea(ciclos = [], areaIds = []) {
    try {
      const where = { visible: true };

      if (ciclos.length) {
        where.ciclo = { [Op.in]: ciclos };
      }

      if (areaIds.length) {
        where.Areaid = { [Op.in]: areaIds };
      }

      const trabajos = await Trabajo.findAll({
        where,
        include: [
          { model: Area, as: "Area", attributes: ["id", "nombre"] },
          { model: Estado, as: "Estado", attributes: ["id", "nombre"] },
          { model: Tipo, as: "Tipo", attributes: ["id", "nombre"] }
        ],
        order: [["fecharegistro", "DESC"]]
      });

      return TrabajoClase.Trabajos(trabajos);
    } catch (error) {
      console.error("Error en buscarPorCicloYArea:", error);
      throw new Error("No se pudieron obtener los trabajos filtrados.");
    }
  }
}
