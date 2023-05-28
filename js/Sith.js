import Personaje from "./Personaje.js";
const $vida_real_darth = document.querySelector("#vida_real_darth");
const $win_yoda = document.querySelector("#win_yoda");

class Sith extends Personaje {

    #nombre = this.get_nombre();
    #fuerza = this.get_fuerza();

    constructor(nombre, fuerza){

        super(nombre, fuerza);
    }

    usarFuerza(){

        const msg = `${this.#nombre} está utilizando la Fuerza para conquistar la galaxia, con su fuerza de = ${this.#fuerza}`;
        return msg;
    }

    corromper(){

        this.#fuerza -= 5;
        const msg = `Nivel de fuerza de ${this.#nombre} ha bajado cinco unidades, actual fuerza = ${this.#fuerza}`;
        return msg;
    }

    entrenar(){

        
        let msg;
        if(this.#fuerza >= 100){

            msg = `${this.#nombre} tienes el 100% de la vida, no puedes tener mas`;
        }else{

            this.#fuerza += 10;
            msg = `${this.#nombre} subio 10 unidades en su fuerza, actual = ${this.#fuerza}`;
        }
        
        return msg;
    }

    bars_life(){

        $vida_real_darth.style.width = `${this.#fuerza}%`;
        if (this.#fuerza <= 0){

            $win_yoda.style.display = "block"
        }
    }
    
}

export default Sith;