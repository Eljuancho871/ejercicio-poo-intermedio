import Personaje from "./Personaje.js";

class Jedi extends Personaje {

    #nombre = this.get_nombre();
    #fuerza = this.get_fuerza();

    constructor(nombre, fuerza){

        super(nombre, fuerza);
    }

    usarFuerza(){

        const msg = `el ${this.#nombre} está utilizando la Fuerza para proteger la galaxia, su fuerza = ${this.#fuerza}`;
        console.log(msg);
    }

    entrenar(){

        this.#fuerza += 10;
        const msg = `El ${this.#nombre} subio 10 unidades en su fuerza, actual = (${this.#fuerza})`;
        console.log(msg);
    }
}

export default Jedi;