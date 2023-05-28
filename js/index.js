import MaestroJedi from "./MaestroJedi.js";
import Sith from "./Sith.js";

const yoda = new MaestroJedi("yoda", 100);
const darthVader = new Sith("Darth Vader", 100);
const $msg = document.querySelector("#msg");
let finish = false;

const batalla = (yoda, darthVader) => {

    message_and_verify_life(yoda.presentarse(), "yoda");
    message_and_verify_life(darthVader.presentarse(), "Darth Vader");

    document.addEventListener("click", e => {

        if(finish == false){

            if(e.target.id == "atacar_dart"){

                message_and_verify_life(yoda.corromper(), "yoda");
                scroll_bottom();
                yoda.bars_life();
            }
    
            if(e.target.id == "atacar_yoda" ){
    
                message_and_verify_life(darthVader.corromper(), "Darth Vader");
                scroll_bottom();
                darthVader.bars_life();
            }
    
            if(e.target.id == "defenderse_dart" ){
    
                message_and_verify_life(darthVader.entrenar(), "Darth Vader");
                scroll_bottom();
                darthVader.bars_life();
            }
    
            if(e.target.id == "defenderse_yoda" ){
    
                message_and_verify_life(yoda.entrenar(), "yoda");
                scroll_bottom();
                yoda.bars_life();
            }
        }
    })

}

const message_and_verify_life = (msg, personaje) => {

    let $li = document.createElement("li");
    $li.innerText = msg;
    let life = Number(msg.split(" ")[msg.split(" ").length - 1]);

    if(life <= 0){

        $li.innerText = personaje + " ha muerto :(";
        finish = true;
    }

    if (personaje == "yoda") $li.style.color = "#3acf3a" ;

    $msg.appendChild($li);
}

const scroll_bottom = () => {

    let $msg_content = document.querySelector(".msg");
    $msg_content.scrollTop += 100000
}

batalla(yoda, darthVader);