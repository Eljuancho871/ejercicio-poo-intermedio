class Personaje {

    #nombre;
    #fuerza;

    constructor(nombre, fuerza){

        this.#nombre = nombre;
        this.#fuerza = fuerza;
    }

    presentarse(){

        const msg = `Holaaaa mi nombre es ${this.#nombre} y mi nivel de fuerza es de ${this.#fuerza}`;
        console.log(msg);
    }

    get_fuerza(){
        return this.#fuerza;
    }

    get_nombre(){
        return this.#nombre;
    }
}

export default Personaje;
