import Personaje from "./Personaje.js";

class Sith extends Personaje {

    #nombre = this.get_nombre();
    #fuerza = this.get_fuerza();

    constructor(nombre, fuerza){

        super(nombre, fuerza);
    }

    usarFuerza(){

        const msg = `el ${this.#nombre} está utilizando la Fuerza para conquistar la galaxia, con su fuerza de = ${this.#fuerza}`;
        console.log(msg);
    }

    corromper(){

        this.#fuerza -= 5;
        const msg = `El nivel de fuerza de ${this.#nombre} ha bajado cinco unidades, nooo, actual fuerza = ${this.#fuerza}`;
        console.log(msg);
    }

    
}

export default Sith;