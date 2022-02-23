"use strict"

getLista();

function getLista(){
    $.get(
        "listadoRepartidores/listadoRepartidores.php",
        null,
        procesoRespuesta,
        "html"
    );
}

function procesoRespuesta(datos, textStatus, jqXHR){
    let divL = document.querySelector('#listados');
    divL.innerHTML = "";
    divL.innerHTML = datos;
}

document.querySelector("#mnuListaRepartidores").addEventListener("click", getLista, false);