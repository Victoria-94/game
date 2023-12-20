'use strict'
function Jugador (vikname, vidas, carta){
    this.vikname=vikname,
    this.vidas=vidas,
    this.carta=carta,
    this.disminuirVida= function(){
        this.vidas--

    }
    this.changecard= function(){
        this.carta++
    }
}
let jug1=new Jugador("Victoria", 3,7);
jug1.disminuirVida();
jug1.changecard(9);

let etiquetaPJug1= document.getElementById("jugador1");
etiquetaPJug1.innerHTML=` Nombre del jugador 1: ${jug1.vikname}`;

let etiquetaVidas1= document.getElementById("vidas1");
etiquetaVidas1.innerHTML= `La cantidad de vidas es: ${jug1.vidas}`;

let jug2=new Jugador("Susana", 3,7);
jug2.disminuirVida();
jug2.changecard(8);

let etiquetaPJug2= document.getElementById("jugador2");
etiquetaPJug2.innerHTML=` Nombre del jugador 2:${jug2.vikname}`;

let etiquetaVidas2= document.getElementById("vidas2");
etiquetaVidas2.innerHTML= `La cantidad de vidas es: ${jug2.vidas}`;


let boton= document.getElementById("go");
boton.addEventListener('click', function(){
    if(jug1.carta>jug2.carta){
        alert("gano el jugador 1");
    } else{  
        alert("gano el jugador 2");}
   
})

