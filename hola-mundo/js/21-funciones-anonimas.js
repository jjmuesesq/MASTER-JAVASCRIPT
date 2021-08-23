'use strict'

// Funciones anonimas
// callback => funcion que se ejecuta dentro de otra
// Es una función que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

function suma(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//callback
suma(5, 7,
    function(dato){
        console.log("La suma es: ", dato);
    },
    function(dato){
        console.log("La suma por dos es: ", (dato*2));
    }
);
