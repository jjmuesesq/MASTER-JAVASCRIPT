'use strict'

//PARAMETROS REST y SPREAD
console.log("**************************************************************");

// realiza rest de parametros
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("naranja", "manzana", "sandia", "pera", "melon", "coco");

console.log("**************************************************************");

var frutas = ["naranja", "manzana"];

//realiza un spread de parametros
listadoFrutas(...frutas, "pera", "melon", "coco", "mora");

console.log("**************************************************************");