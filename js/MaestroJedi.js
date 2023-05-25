import Jedi from "./Jedi";

class MaestroJedi extends Jedi {

    #nombre;
    #fuerza;

    constructor(nombre, fuerza) {
        
        super(nombre, fuerza);
    }

    enseñar(){

        this.fuerza += 20;
        const msg = "El nivel de fuerza ha subido 20 unidades";
    }
}


export default MaestroJedi;