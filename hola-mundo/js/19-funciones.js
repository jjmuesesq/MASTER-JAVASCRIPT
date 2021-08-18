'use strict'

//FUNCIONES
//Una funcion es una agrupación reuitilizable de un conjunto de instrucciones

//======================================================================================
//Defino la función
function calculadora(){
    // Conjunto de instrucciones a ejecutar
    
    console.log("Hola soy la calculadora");
    console.log("Si soy yo");

    return "Hola soy la calculadora";
}

// console.log(calculadora(), calculadora());

//invocar o llamar a la función
var resultado = calculadora();
console.log(resultado);
console.log("*******************************************************");

//=======================================================================================
//Defino la función - PARAMETROS
function calculadora2(numero1, numero2){
    // Conjunto de instrucciones a ejecutar
    
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("*******************************************************");
    // return "Hola soy la calculadora";
}

//invocar o llamar a la función
calculadora2(12, 8);
calculadora2(98, 2);

for(var i=1; i <=10; i++){
    console.log("=======================================================");
    console.log(i);
    calculadora2(i, 8);
}

//  PARAMETROS OPCIONALES

//=======================================================================================
//Defino la función - PARAMETROS OPCIONALES

function calculadora3(numero1, numero2, mostrar = false){
    // Conjunto de instrucciones a ejecutar
    
    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicacion: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
        console.log(mostrar);
        console.log("*******************************************************");
        // return "Hola soy la calculadora";
    }else{
        document.write("Suma: " + (numero1+numero2)+"<br>");
        document.write("Resta: " + (numero1-numero2)+"<br>");
        document.write("Multiplicacion: " + (numero1*numero2)+"<br>");
        document.write("División: " + (numero1/numero2)+"<br>"); 
    }

}

//invocar o llamar a la función

calculadora3(1, 4);
calculadora3(2, 5, true);

//==========================================================================================
//FUNCIONES DENTRO DE OTRAS


function porConsola(numero1, numero2){

    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));   
    console.log("*******************************************************");
}
function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2)+"<br>");
    document.write("Resta: " + (numero1-numero2)+"<br>");
    document.write("Multiplicacion: " + (numero1*numero2)+"<br>");
    document.write("División: " + (numero1/numero2)+"<br>"); 
}

function calculadora4(numero1, numero2, mostrar = false){
    // Conjunto de instrucciones a ejecutar
    
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }

    return true;
}

calculadora4(1, 4);
calculadora4(2, 5, true);
calculadora4(4, 5, true);