'use strict'
//VARIABLES = Es un contenedor de información

//var define una variable global o local en una funcion sin inportar el ambito del bloque
var pais = "Colombia";
var continente = "Latinoamerica";
var antiguedad = 2021;
var pais_continente = pais + ' ' + continente;

//let permite definir variable delimitando su alcance al bloque, declaracion o expresion que se esta usando
let prueba = 'hola';
alert(prueba);

pais = "Ecuador";
continente = "Suramerica";


console.log(pais, continente, antiguedad);
alert(pais_continente);