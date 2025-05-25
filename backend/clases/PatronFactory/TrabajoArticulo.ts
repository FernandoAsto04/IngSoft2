import Trabajo from "../Trabajo";

class TrabajoArticulo extends Trabajo {
    constructor(...args: ConstructorParameters<typeof Trabajo>) {
        super(...args);
    }

    guardarTrabajo():void{
    

    }

    eliminarTrabajo():void{
    

    }
}

export default TrabajoArticulo;