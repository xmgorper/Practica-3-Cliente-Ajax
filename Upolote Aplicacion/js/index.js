// Carga dinámica de formularios
$("#mnuAltaProducto").click(abrirAltaProducto);
$("#mnuAltaCliente").click(abrirAltaCliente);
$("#mnuBajaCliente").click(abrirBajaCliente);
$("#mnuAltaRepartidor").click(abrirAltaRepartidor);
$("#mnuAltaPedido").click(abrirAltaPedido);
$("#mnuCancelarPedido").click(abrirCancelarPedido);
$("#mnuListaClientes").click(abrirListaClientes);
$("#mnuListaRepartidores").click(abrirListaRepartidores);
$("#mnuListaProductos").click(abrirListaProductos);
$("#mnuListaPedidos").click(abrirListaPedidos);

function abrirAltaProducto() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaProducto')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaProducto').size() == 0) {
    if (document.querySelector("#frmAltaProducto") == null){
        $("<div>").appendTo('#formularios').load("altaProducto/altaProducto.html",
            function() {
                $.getScript("altaProducto/altaProducto.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaProducto').parent().show("normal");
    }
}

function abrirAltaCliente() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaCliente')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaCliente').size() == 0) {
    if (document.querySelector("#frmAltaCliente") == null){
        $("<div>").appendTo('#formularios').load("altaCliente/altaCliente.html",
            function() {
                $.getScript("altaCliente/altaCliente.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaCliente').parent().show("normal");
    }
}

function abrirBajaCliente() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmBajaPersona')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmBajaPersona').size() == 0) {
    if (document.querySelector("#frmBajaPersona") == null){
        $("<div>").appendTo('#formularios').load("bajaCliente/bajaCliente.html",
            function() {
                $.getScript("bajaCliente/bajaCliente.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmBajaPersona').parent().show("normal");
    }
}

function abrirAltaRepartidor() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaRepartidor')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaRepartidor').size() == 0) {
    if (document.querySelector("#frmAltaRepartidor") == null){
        $("<div>").appendTo('#formularios').load("altaRepartidor/altaRepartidor.html",
            function() {
                $.getScript("altaRepartidor/altaRepartidor.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaRepartidor').parent().show("normal");
    }
}

function abrirAltaPedido() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaPedido')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaPedido').size() == 0) {
    if (document.querySelector("#frmAltaPedido") == null){
        $("<div>").appendTo('#formularios').load("altaPedido/altaPedido.html",
            function() {
                $.getScript("altaPedido/altaPedido.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaPedido').parent().show("normal");
    }
}

function abrirCancelarPedido() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmBajaPedido')").parent("div").hide("normal");
    

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmBajaPedido').size() == 0) {
    if (document.querySelector("#frmBajaPedido") == null){
        $("<div>").appendTo('#formularios').load("cancelarPedido/bajaPedido.html",
            function() {
                $.getScript("cancelarPedido/bajaPedido.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmBajaPedido').parent().show("normal");
    }
}

function abrirListaClientes() {

    // Oculto todos los formularios menos este
    $("form").parent("div").hide("normal");
    $("table").parent("div").show("normal");

    $.getScript("listadoClientes/listadoClientes.js");

    
}

function abrirListaRepartidores() {

    // Oculto todos los formularios menos este
    $("form").parent("div").hide("normal");
    $("table").parent("div").show("normal");

    $.getScript("listadoRepartidores/listadoRepartidores.js");

    
}

function abrirListaProductos() {

    // Oculto todos los formularios menos este
    $("form").parent("div").hide("normal");
    $("table").parent("div").show("normal");

    $.getScript("listadoProductos/listadoProductos.js");

    
}

function abrirListaPedidos() {
    // Oculto todos los formularios menos este
    $("form:not('#frmListadoPedidos')").parent("div").hide("normal");
    let divL = document.querySelector('#listados');
    divL.innerHTML = null;
    $("table").parent("div").show("normal");


    // Verifico si ya he cargado el formulario antes
    // if ($('#frmListadoPedidos').size() == 0) {
    if (document.querySelector("#frmListadoPedidos") == null){
        $("<div>").appendTo('#formularios').load("listadoPedidosFecha/listadoPedidos.html",
            function() {
                $.getScript("listadoPedidosFecha/listadoPedidos.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmListadoPedidos').parent().show("normal");
    }
}