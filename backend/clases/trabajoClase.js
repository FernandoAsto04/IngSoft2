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


  mostrarDatosTrabajo() {
  let tituloFinal = this.titulo;
  let cicloFinal = this.ciclo;
  let visibleFinal = this.visible;

  if (!this.titulo || this.titulo.trim().length === 0) {
    tituloFinal = "Sin título";
  }
  
  if (!/^20\d{2}-[12]$/.test(this.ciclo)) {
    cicloFinal = null;
  }

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
      return instancia.mostrarDatosTrabajo();
    });
  }


  static async buscarPorCicloYArea(ciclos = [], areaIds = []) {
    try {
      const where = { visible: true };

      // Camino 1: Validar ciclos
      if (!Array.isArray(ciclos)) {
        console.warn("ciclos no es un arreglo");
        return [];
      }

      if (ciclos.length > 0) {
        const ciclosValidos = ciclos.filter(c => /^20\d{2}-[12]$/.test(c));
        if (ciclosValidos.length === 0) {
          console.warn("Ningún ciclo tiene formato válido");
          return [];
        }
        where.ciclo = { [Op.in]: ciclosValidos };
      }

      // Camino 2: Validar áreas
      if (!Array.isArray(areaIds)) {
        console.warn("areaIds no es un arreglo");
        return [];
      }

      if (areaIds.length > 0) {
        const areasValidas = areaIds.filter(id => Number.isInteger(id));
        if (areasValidas.length === 0) {
          console.warn("Ningún área es válida");
          return [];
        }
        where.Areaid = { [Op.in]: areasValidas };
      }

      // Camino 3: Ejecutar búsqueda
      const trabajos = await Trabajo.findAll({
        where,
        include: [
          { model: Area, as: "Area", attributes: ["id", "nombre"] },
          { model: Estado, as: "Estado", attributes: ["id", "nombre"] },
          { model: Tipo, as: "Tipo", attributes: ["id", "nombre"] }
        ],
        order: [["fecharegistro", "DESC"]]
      });

      // Camino 4: Validar resultados
      if (trabajos.length === 0) {
        console.warn("No se encontraron trabajos con los filtros dados");
      }

      return TrabajoClase.Trabajos(trabajos);
    } catch (error) {
      console.error("Error en buscarPorCicloYArea:", error);
      throw new Error("No se pudieron obtener los trabajos filtrados.");
    }
  }

}
