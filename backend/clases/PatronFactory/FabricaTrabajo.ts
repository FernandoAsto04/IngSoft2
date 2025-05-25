import Trabajo from "../Trabajo"
import FabricaTrabajoArticulo from "./FabricaTrabajoArticulo";
import FabricaTrabajoPaper from "./FabricaTrabajoPaper";
import FabricaTrabajoTesis from "./FabricaTrabajoTesis";


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


abstract class FabricaTrabajo{

    abstract MetodoFabrica(datos: DatosTrabajo): Trabajo;
    static createTrabajo(trabajotipo: string, datos: DatosTrabajo): Trabajo | null {
        let trabajo: Trabajo | null = null;
        if (trabajotipo ==="Articulo"){
            trabajo = new FabricaTrabajoArticulo().MetodoFabrica(datos);

        } 
        if(trabajotipo ==="Paper"){
            trabajo = new FabricaTrabajoPaper().MetodoFabrica(datos);
        }
        
        if(trabajotipo ==="Tesis"){
            trabajo = new FabricaTrabajoTesis().MetodoFabrica(datos);

        }
        return trabajo;
    }

}
export default FabricaTrabajo;