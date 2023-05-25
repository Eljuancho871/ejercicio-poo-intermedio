import Personaje from "./Personaje";

class Jedi extends Personaje {

    #nombre;
    #fuerza;

    constructor(nombre, fuerza){

        super(nombre, fuerza);
    }

    usarFuerza(){

        const msg = "el Jedi está utilizando la Fuerza para proteger la galaxia, su fuerza = " + this.#fuerza;
    }

    entrenar(){

        this.#fuerza += 10;
        const msg = "El jedi subio 10 unidades en su fuerza (" + this.fuerza + ")";
    }
}

export default Jedi;