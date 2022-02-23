"use strict"

getLista();

function getLista(){
    $.get(
        "listadoProductos/listadoProductos.php",
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

document.querySelector("#mnuListaProductos").addEventListener("click", getLista, false);