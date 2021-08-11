'use strict'

// Pruebas con Let y var
// alcance qque tienen las variables y como actuan en funcion a los diferentes bloques
// let actua a nivel de bloque
// var actua a nivel global

//prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero);//valor 50
}

console.log(numero); //valor 50

//prueba con let

var texto = "Curso JS";
console.log(texto); //valor "Curso JS"

if(true){
    let texto = "Curso JS 2";
    console.log(texto);//valor "Curso JS 2"
}

console.log(texto); //valor "Curso JS"