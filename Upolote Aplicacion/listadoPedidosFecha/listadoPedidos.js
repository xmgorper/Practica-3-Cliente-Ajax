document.getElementById("btnAceptarListadoPedido").addEventListener("click", muestraTurismoGetXml, false);

function muestraTurismoGetXml(oEVento) {
  let oE = oEVento || window.event;
  let fecha1= frmListadoPedidos.txtFechaPedido.value.trim();

 
  $.ajax({
    url: "listadoPedidosFecha/listadoPedidos.php",
    type: "GET",
    async: true,
    data: ("fecha1=" + fecha1),
    dataType: "xml",
    //success: respuestaJson2
}).done(listarPedidos);

}


function listarPedidos(data, status, oXHR){
  var oOptions = data.querySelectorAll("pedido");
  console.log(oOptions);
  var table = "<table class='table table-dark'>";
  table += "<thead><tr><th scope='col'>Repartidor</th><th scope='col'>Cliente</th><th scope='col'>Producto</th><th scope='col'>Fecha</th></thead>";

  for (let i = 0; i < oOptions.length; i++) {
    table +=
      "<tr><td scope='row'>" +
      oOptions[i].querySelector("repartidor").textContent +
      "</td><td scope='row'>" +
      oOptions[i].querySelector("cliente").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("producto").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("fecha").textContent +
      "</td></tr>";
  }
  table += "</table>";
  let divL = document.querySelector('#listados');
  divL.innerHTML = null;
  $("#listados").html(table);
  
}