import Trabajo from "../Trabajo";
import FabricaTrabajo from "./FabricaTrabajo";
import TrabajoArticulo from "./TrabajoArticulo";

class FabricaTrabajoArticulo extends FabricaTrabajo{

    override MetodoFabrica(): Trabajo {
        return new TrabajoArticulo(titulo: string, descripcion: string, FechaDeRegistro: string, estado: string, observaciones: string, profesorasesor: string, palabrasclave: string, ciclo: string): TrabajoArticulo;
    }

}

export default FabricaTrabajoArticulo;