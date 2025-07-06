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

    if (!Array.isArray(lineaIds) || lineaIds.length === 0) return [];

    const lineas = await Linea.findAll({
      where: { id: lineaIds },
      attributes: ["Areaid"]
    });

    const areaIds = lineas.map((l) => l.Areaid);
    if (areaIds.length === 0) return [];

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
    return profesores;
  }


}
