import Personaje from "./Personaje";

class Sith extends Personaje {

    #nombre;
    #fuerza;

    constructor(nombre, fuerza){

        super(nombre, fuerza);
    }

    usarFuerza(){

        const msg = "el Sith está utilizando la Fuerza para conquistar la galaxia, con su fuerza de = " + this.#fuerza;
    }

    corromper(){

        this.#fuerza -= 5;
        const msg = "El nivel de fuerza ha bajado con unidades, nooo";
    }

    
}

export default Sith;