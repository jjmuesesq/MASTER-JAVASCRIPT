'use strict'

/**
 * CALCULADORA:
 * -Pida 2 numeros por pantalla
 * -Si metemos uno mal que nos lo vuelva a pedir
 * -En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y divir esas 2 cifras
 */

 var numero1 = parseInt(prompt("Introduce el primer numero", 0));
 var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

 while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));    
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br>" +
                "la resta es: " + (numero1 - numero2) + "<br>" +
                "la multiplicacion es: " + (numero1 * numero2) + "<br>" +
                "la division es: " + (numero1 / numero2) + "<br>";

var resultado2 = "La suma es: " + (numero1 + numero2) + " \n" +
                "la resta es: " + (numero1 - numero2) + " \n" +
                "la multiplicacion es: " + (numero1 * numero2) + " \n" +
                "la division es: " + (numero1 / numero2) + " \n";

document.write(resultado);
alert(resultado2);
console.log(resultado2);