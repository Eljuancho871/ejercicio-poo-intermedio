class Personaje {

    #nombre;
    #fuerza;

    constructor(nombre, fuerza){

        this.#nombre = nombre;
        this.#fuerza = fuerza;
    }

    presentarse(){

        const msg = `Holaaaa mi nombre es ${this.#nombre} y mi nivel de fuerza es de ${this.#fuerza}`;
    }
}

export default Personaje;
