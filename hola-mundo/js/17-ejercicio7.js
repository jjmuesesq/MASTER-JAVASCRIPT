'use strict'

/**
 * tabla de multiplicar de un numero introducido por pantalla
 */

var numero = parseInt(prompt("¿De que numero quieres la tabla?", 1));
document.write("<h1>Tabla del " + numero + "</h1>");

for(var i = 1; i<= 10; i++){
    
    //para mostrar en el body de la pagina web
    document.write(i + ' x ' + numero + " = " + (i*numero)+ "<br>");

}

// TODAS LAS TABLAS DE MULTIPLICAR


for(var j = 1; j<= 10; j++){
    document.write("<h1>Tabla del " + j + "</h1>");
    for(var i = 1; i<= 10; i++){
        
        //para mostrar en el body de la pagina web
        document.write(i + ' x ' + j + " = " + (i*j)+ "<br>");

    }
}
