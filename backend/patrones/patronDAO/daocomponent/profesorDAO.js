import { Profesor } from "../daoto/ProfesorTO.js";
import { Area } from "../daoto/AreaTO.js";
import { Linea } from "../daoto/LineaTO.js";
import { Asesoria } from "../daoto/AsesoriaTO.js";
import { Usuario } from "../daoto/UsuarioTO.js";
import { ProfesorClase } from "../../../clases/profesorClase.js";

export class ProfesorDAO {
  async obtenerPorVariasLineas(lineaIds) {
    const lineas = await Linea.findAll({
      where: { id: lineaIds },
      attributes: ["Areaid"]
    });

    const areaIds = lineas.map(l => l.Areaid);
    if (areaIds.length === 0) return [];

    return await Profesor.findAll({
      include: [
        {
          model: Area,
          as: "AreasAsignadas",
          where: { id: areaIds },
          through: { attributes: [] },
          include: {
            model: Linea,
            as: "Lineas",
            attributes: ["nombre"]
          }
        },
        {
          model: Asesoria,
          as: "Asesorias",
          attributes: ["horario", "lugar", "link"]
        },
        {
          model: Usuario,
          as: "Usuario",
          attributes: ["nombres", "apellidos", "email"]
        }
      ]
    });
  }

  async obtenerProfesorConDatos(id) {
    const profesorEntidad = await Profesor.findOne({
      where: { id },
      include: {
        model: Usuario,
        as: "Usuario",
        attributes: ["nombres", "apellidos", "email"]
      }
    });

    if (!profesorEntidad) return null;

    const profesor = new ProfesorClase(profesorEntidad);
    return profesor.mostrarDatos();
  }


}



