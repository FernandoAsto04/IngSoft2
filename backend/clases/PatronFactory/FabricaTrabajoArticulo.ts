import Trabajo from "../Trabajo";
import FabricaTrabajo from "./FabricaTrabajo";
import TrabajoArticulo from "./TrabajoArticulo";

interface DatosTrabajo {
    titulo: string;
    descripcion: string;
    FechaDeRegistro: string;
    estado: string;
    observaciones: string;
    profesorasesor: string;
    palabrasclave: string;
    ciclo: string;
}

class FabricaTrabajoArticulo extends FabricaTrabajo {

    override MetodoFabrica(datos: DatosTrabajo): Trabajo {
        return new TrabajoArticulo(
            datos.titulo,
            datos.descripcion,
            datos.FechaDeRegistro,
            datos.estado,
            datos.observaciones,
            datos.profesorasesor,
            datos.palabrasclave,
            datos.ciclo
        );
    }

}

export default FabricaTrabajoArticulo;
