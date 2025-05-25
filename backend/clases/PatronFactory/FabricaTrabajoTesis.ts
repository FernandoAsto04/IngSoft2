import FabricaTrabajo from "./FabricaTrabajo";
import Trabajo from "../Trabajo";
import TrabajoTesis from "./TrabajoTesis";

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


class FabricaTrabajoTesis extends FabricaTrabajo{

    override MetodoFabrica(datos: DatosTrabajo): Trabajo {
        return new TrabajoTesis(
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

export default FabricaTrabajoTesis;