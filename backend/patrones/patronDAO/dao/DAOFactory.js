import { AdministradorDAO } from "../daocomponent/administradorDAO";
import { AlumnoDAO } from "../daocomponent/alumnoDAO";
import { AreaDAO } from "../daocomponent/areaDAO";
import { AsesoriaDAO } from "../daocomponent/asesoriaDAO";
import { EstadoDAO } from "../daocomponent/estadoDAO";
import { LineaDAO } from "../daocomponent/lineaDAO";
import { ProfesorDAO } from "../daocomponent/profesorDAO";
import { TrabajoDAO } from "../daocomponent/trabajoDAO";
import { UsuarioDAO } from "../daocomponent/usuarioDAO";
import {AreaProfesorDAO} from "../daocomponent/areaProfesorDAO";



class DAOFactory {
  static getUsuarioDAO() {
    return new UsuarioDAO();
  }

  static getprofesorDAO() {
    return new ProfesorDAO();
  }

  static getestadoDAO() {
    return new EstadoDAO();
  }

  static gettrabajoDAO() {
    return new TrabajoDAO();
  }

  static getlineaDAO() {
    return new LineaDAO();
  }
  
  static getasesoriaDAO() {
    return new AsesoriaDAO();
  }

  static getareaDAO() {
    return new AreaDAO();
  }

  static getalumnoDAO() {
    return new AlumnoDAO();
  }

  static getadministradorDAO() {
    return new AdministradorDAO();
  }

  static getareaprofesorDAO() {
    return new AreaProfesorDAO();
  }

  
}

export default DAOFactory;
