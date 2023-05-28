import Jedi from "./Jedi.js";

class MaestroJedi extends Jedi {

    #nombre = this.get_nombre();
    #fuerza = this.get_fuerza();

    constructor(nombre, fuerza) {
        
        super(nombre, fuerza);
    }

    enseñar(){

        this.#fuerza += 20;
        const msg = `Nivel de fuerza de ${this.#nombre} ha subido 20 unidades, fuerza actual = ${this.#fuerza}`;
        return msg;
    }
}


export default MaestroJedi;