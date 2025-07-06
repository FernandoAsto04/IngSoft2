import { Profesor } from "../daoto/ProfesorTO.js";
import { Area } from "../daoto/AreaTO.js";
import { Linea } from "../daoto/LineaTO.js";
import { Asesoria } from "../daoto/AsesoriaTO.js";
import { Usuario } from "../daoto/UsuarioTO.js";
import { ProfesorClase } from "../../../clases/profesorClase.js";

export class ProfesorDAO {
  async buscarPorLineas(lineaIds) {
    return await ProfesorClase.buscarPorLineas(lineaIds);
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

  async obtenerUsuarioPorId(id) {
    const entidad = await Usuario.findByPk(id, {
      include: [Alumno, Profesor, Administrador]
    });

    if (!entidad) return null;

    if (entidad.Profesor) return new ProfesorClase(entidad.Profesor).mostrarDatos();
    if (entidad.Alumno) return new AlumnoClase(entidad.Alumno).mostrarDatos();
    if (entidad.Administrador) return new AdministradorClase(entidad.Administrador).mostrarDatos();

    return null;
  }

}



