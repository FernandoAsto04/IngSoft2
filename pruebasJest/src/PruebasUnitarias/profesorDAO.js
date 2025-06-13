import { Profesor } from "./Profesor";

export class ProfesorDAO {
  async listarProfesores() {
    return await Profesor.findAll();
  }

  async insertarProfesor(profesor) {
    try {
      await Profesor.create(profesor);
      return null;
    } catch (error) {
      return error.message; 
    }
  }

  async actualizarProfesor(profesor) {
    try {
      const [updated] = await Profesor.update(profesor, {
        where: { id: profesor.id }
      });
      return updated === 0 ? "Error" : null;
    } catch (error) {
      return error.message;
    }
  }

  async eliminarProfesor(ids) {
    try {
      await Profesor.destroy({
        where: {
          id: ids
        }
      });
      return null;
    } catch (error) {
      return error.message;
    }
  }

  async obtenerProfesorPorId(id) {
    return await Profesor.findByPk(id);
  }
}
