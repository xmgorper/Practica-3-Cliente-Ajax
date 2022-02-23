"use strict"

document.querySelector("#btnAceptarAltaPersona").addEventListener("click", validarAltaCliente, false);

//Validación del formulario AltaCliente
function validarAltaCliente(){
	let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    // Validación de todos los campos
    let sTxtNombre = frmAltaCliente.txtNombreCliente.value.trim();
    let sTxtApellido = frmAltaCliente.txtApellidoCliente.value.trim();
    let sTxtTelefono = frmAltaCliente.txtTelefonoCliente.value.trim();
    let sTxtDireccion = frmAltaCliente.txtDireccionCliente.value.trim();

    if(sTxtNombre == ""){
    	sErrores += "\nDebe añadir un nombre";
    	bValido = false;
    }

    if(sTxtApellido == ""){
    	sErrores += "\nDebe añadir un apellido";
    	bValido = false;
    }

    if(sTxtTelefono == ""){
    	sErrores += "\nDebe añadir un telefono";
    	bValido = false;
    }

    if(sTxtDireccion == ""){
    	sErrores += "\nDebe añadir una direccion";
    	bValido = false;
    }

    if(!bValido){
    	alert(sErrores);
    }else{
    	altaCliente();
    }
}

function altaCliente(oEvento){
    var oCliente = {
        nombre: frmAltaCliente.txtNombreCliente.value.trim(),
        apellido: frmAltaCliente.txtApellidoCliente.value.trim(),
        telefono: frmAltaCliente.txtTelefonoCliente.value.trim(),
        direccion: frmAltaCliente.txtDireccionCliente.value.trim()
    };
    var sParametros = "datosCliente=" + JSON.stringify(oCliente);

    $.get("altaCliente/altaCliente.php", sParametros, procesoRespuestaAltaCliente, "json");
}

function procesoRespuestaAltaCliente(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaCliente.reset();
        $("#frmAltaCliente").parent().hide("normal");
    }
}