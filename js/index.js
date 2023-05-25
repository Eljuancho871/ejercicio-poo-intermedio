import MaestroJedi from "./MaestroJedi.js";
import Sith from "./Sith.js";

// JODA

const yoda = new MaestroJedi("yoda", 100);
yoda.presentarse();
yoda.usarFuerza();
yoda.enseñar();

console.log("-------------------------------------------")
console.log("-------------------------------------------")

// Sith

const darthVader = new Sith("Darth Vader", 200);
darthVader.presentarse();
darthVader.usarFuerza();
darthVader.corromper();