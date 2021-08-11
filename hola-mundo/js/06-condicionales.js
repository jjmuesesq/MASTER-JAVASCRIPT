'use strict'

//condicional IF
//si A es igual B entonces has algo

var edad1 = 10;
var edad2 = 12

// si pasa esto
if(edad1 > edad2){
    //ejecuta esto
    console.log("Edad 1 es mayor que edad 2");
}else{
    console.log("La edad 1 es inferior");
}

var edad = 31;
var nombre = 'Jhon Jairo';

/*
Operadores relacionales
mayor: >
menor: <
mayor o igual: >=
mayor o igual: <=
igual: ==
distinto: !=
*/

if(edad >= 18){
    //el usuario es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if(edad <= 33){
        console.log("Todavia eres joven");

    }else if(edad >= 70){
        console.log("eres anciano");
        
    }else{
        console.log("eres adulto");
    }
}else{
    //el usuario es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad");    
}

/**OPERADORES LOGICOS 
 *AND(Y): &&
 *OR(O): ||
 *negacion: !
*/

var year = 2028;

//NEGACION

if(year != 2016){
    console.log("el año no es 2016 realmente es: "+year);
}

//AND

if(year >= 2000 && year <= 2025 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era posmoderna");
}

//OR

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("año no registrado");
}
