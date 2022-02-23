"use strict"

document.querySelector("#btnAceptarAltaProducto").addEventListener("click", validarAltaProducto, false);

//Validación del formulario AltaProducto
function validarAltaProducto(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    // Validación de todos los campos
    let sTipoAlc = frmAltaProducto.txtTipoAlcohol.value.trim();
    let sNombre = frmAltaProducto.txtNombre.value.trim();
    let iPrecio = frmAltaProducto.txtPrecio.value.trim();
    let sRefresco = frmAltaProducto.txtRefresco.value.trim();

    if(sTipoAlc == ""){
    	sErrores += "\nDebe añadir un tipo de alcohol";
    	bValido = false;
    }

    if(sNombre == ""){
    	sErrores += "\nDebe añadir un nombre";
    	bValido = false;
    }

    if(iPrecio == ""){
    	sErrores += "\nDebe añadir un precio";
    	bValido = false;
    }

    if(sRefresco == ""){
    	sErrores += "\nDebe añadir un refresco";
    	bValido = false;
    }

    if(!bValido){
    	alert(sErrores);
    }else{
    	altaProducto();
    }
}

function altaProducto(oEvento){
    var oProducto = {
        tipoAlc: frmAltaProducto.txtTipoAlcohol.value.trim(),
        nombre: frmAltaProducto.txtNombre.value.trim(),
        precio: frmAltaProducto.txtPrecio.value.trim(),
        refresco: frmAltaProducto.txtRefresco.value.trim()
    };
    var sParametros = "datosProducto=" + JSON.stringify(oProducto);

    $.post("altaProducto/altaProducto.php", sParametros, procesoRespuestaAltaProducto, "json");
}

function procesoRespuestaAltaProducto(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaProducto.reset();
        $("#frmAltaProducto").hide();
    }
}