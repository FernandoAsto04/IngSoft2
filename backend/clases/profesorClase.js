import { Profesor } from "../models/Profesor.js";
import { Usuario } from "../models/Usuario.js";
import { Area } from "../models/Area.js";
import { Linea } from "../models/Linea.js";
import { Op } from "sequelize";
import { UsuarioClase } from "./usuarioClase.js";
import { Asesoria } from "../models/Asesoria.js";

export class ProfesorClase extends UsuarioClase {
  constructor(profesorEntidad) {
    super(profesorEntidad.Usuario); // Asegúrate de que el alias sea "Usuario"
    this.id = profesorEntidad.id;
  }

  mostrarDatos() {
    return {
      id: this.id,
      ...super.mostrarDatosUsuario()
    };
  }

  static Profesores(lista) {
    return lista.map((p) => new ProfesorClase(p).mostrarDatos());
  }

  static async buscarPorLineas(lineaIds = []) {
  console.log("🔍 Línea IDs recibidos:", lineaIds);

  if (!Array.isArray(lineaIds)) {
    console.warn("líneaIds no es un arreglo");
    return [];
  }

  if (lineaIds.length === 0) {
    console.warn("líneaIds está vacío");
    return [];
  }

  const lineas = await Linea.findAll({
    where: { id: lineaIds },
    attributes: ["Areaid"]
  });

  const areaIds = lineas.map((l) => l.Areaid);

  if (areaIds.length === 0) {
    console.warn("No se encontraron áreas para las líneas dadas");
    return [];
  }

  const profesores = await Profesor.findAll({
    include: [
      {
        model: Area,
        where: { id: { [Op.in]: areaIds } },
        through: { attributes: [] },
        include: [
          {
            model: Linea,
            attributes: ["nombre"]
          }
        ]
      },
      {
        model: Asesoria,
        as: "Asesorias",
        attributes: ["horario", "lugar", "link"]
      },
      {
        model: Usuario,
        attributes: ["nombres", "apellidos", "email"]
      }
    ]
  });

  console.log("📦 Profesores encontrados:", profesores.length);

  if (profesores.length === 0) {
    console.warn("⚠️ No se encontraron profesores para las áreas dadas");
  }

  return profesores;
}


}
