import { Alumno } from "../daoto/AlumnoTO.js";

export class AlumnoDAO {
  async listarAlumnos() {
    try {
      return await Alumno.findAll();
    } catch (error) {
      return error.message;
    }
  }

  async insertarAlumno(alumno) {
    try {
      await Alumno.create(alumno);
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async actualizarAlumno(alumno) {
    try {
      const [updated] = await Alumno.update(alumno, {
        where: { id: alumno.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarAlumno(ids) {
    try {
      await Alumno.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerAlumnoPorId(id) {
    try {
      return await Alumno.findByPk(id);
    } catch (error) {
      return error.message;
    }
  }
}
