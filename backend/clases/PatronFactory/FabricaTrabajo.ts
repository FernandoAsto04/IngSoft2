import Trabajo from "../Trabajo"


abstract class FabricaTrabajo{

    abstract MetodoFabrica(): Trabajo;
    static createTrabajo(trabajotipo: string): Trabajo | null {
        let trabajo: Trabajo | null = null;
        if (trabajotipo ==="Articulo"){
            trabajo = new Fabrica

        } 
        if(trabajotipo ==="Paper"){

        }
        
        if(trabajotipo ==="Tesis"){


        }
        return trabajo;
    }

}
export default FabricaTrabajo;