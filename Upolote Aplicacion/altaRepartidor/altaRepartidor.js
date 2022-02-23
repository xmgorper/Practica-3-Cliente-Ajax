
$("#btnAceptarAltaRepartidor").click(AltaRepartidor);

function AltaRepartidor(oEvento){
    let oE=oEvento || window.event;
    oE.preventDefault

    //Post ajax sin jquery
    let oAjax = instanciarXHR();
    let sParametros = "&nombre="+frmAltaRepartidor.txtNombreRepartidor.value;
    sParametros+= "&apellidos="+frmAltaRepartidor.txtApellidoRepartidor.value;
    sParametros+= "&telefono="+frmAltaRepartidor.txtTelefonoRepartidor.value;
    sParametros+= "&vehiculo="+frmAltaRepartidor.txtVehiculo.value;
    sParametros = encodeURI(sParametros);

    oAjax.open("POST",encodeURI("altaRepartidor/altaRepartidor.php"));

    oAjax.addEventListener("readystatechange", procesoRespuestaAltaRepartidor, false);

    oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    oAjax.send(sParametros);
}

function procesoRespuestaAltaRepartidor(){

    let oAjax=this;
    if (oAjax.readyState == 4 && oAjax.status == 200) {
        
        let oRespuesta = JSON.parse(oAjax.responseText);
        
        
        if (oRespuesta.error == 0) { 
            frmAltaRepartidor.reset();

            let valido=document.querySelectorAll('#frmAltaRepartidor div.valid-feedback');        
            for (const cosa of valido) {
                cosa.style.display="none";
            }
        }
        alert(oRespuesta.mensaje);
    }
}

function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}