'use strict'

//OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 % numero2;
// var operacion = numero1 * numero2;
// var operacion = numero1 - numero2;
// var operacion = numero1 + numero2;
// var operacion = numero1 / numero2;

alert("Resultado de la operacion es: "+operacion)

//TIPOS DE DATOS
var numero_entero = 44;
// var cadena_texto = "hola que tal";
// var cadena_texto = "hola 'que' tal";
var cadena_texto = 'hola "que" tal';
var verdadero_falso = true;

//FUNCIONES
var numero_falso = "33.4";
console.log(cadena_texto, verdadero_falso, Number(numero_falso)+7);
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7);

console.log(String(numero_entero) + ' texto concatenado');
console.log(String(numero_entero) + 4);

//TIPO DE DATO
console.log(typeof(numero_entero));
console.log(typeof(cadena_texto));
console.log(typeof(verdadero_falso));
console.log(typeof(numero_falso));