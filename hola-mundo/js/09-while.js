'use strict'

//BUCLE WHILE

var year = 2021;

while(year != 1991){
    //ejecuta esto
    console.log("Estamos en el año: "+year);

    if(year == 2000){
        break;
    }

    year--;
}

//BUCLE DO WHILE

var years = 30;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
}while(years > 25)
