rellenarCombo();


function rellenarCombo(oEVento) {
    let oE = oEVento || window.event;
  
  
    $.get("cancelarPedido/getPedidosBaja.php", null, rellenaComboClientes, 'xml');
    
  
  }
  
  function rellenaComboClientes(data, status, oXHRS) {
  
    console.log(data);
  
  
    var oOptions = data.querySelectorAll("pedido");
    var sOptions="";
    console.log(oOptions);
    console.log(sOptions);
  
    //Cargar options
    for (var i = 0; i < oOptions.length; i++) {
        sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
        sOptions += '">' + oOptions[i].querySelector("id").textContent;
        sOptions += "</option>";
        
    }
    
  
    document.getElementById("txtIdCancelarPedido").innerHTML=sOptions;
  
  }

  function objetoXHR() {
    if (window.XMLHttpRequest) {
      // El navegador implementa la interfaz XHR de forma nativa
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      var versionesIE = new Array(
        "MsXML2.XMLHTTP.5.0",
        "MsXML2.XMLHTTP.4.0",
        "MsXML2.XMLHTTP.3.0",
        "MsXML2.XMLHTTP",
        "Microsoft.XMLHTTP"
      );
      for (var i = 0; i < versionesIE.length; i++) {
        try {
          return new ActiveXObject(versionesIE[i]);
        } catch (errorControlado) {} //Capturamos el error,
      }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
  }

  $("#btnAceptarBajaPedido").click(function() {
    let baja = {
        id: frmBajaPedido.txtIdCancelarPedido.value.trim(),
    };
        
      $.ajax({
        url: "cancelarPedido/bajaPedido.php",
        data: "datos=" + JSON.stringify(baja),
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaBajaPedido
    });
    
  });
  
  function respuestaBajaPedido(resultado) {
    console.log(resultado);
    let datos = JSON.parse(resultado);
    console.log(datos);
    if (datos["error"]) {
        alert(datos["mensaje"]);
    } else {
        alert(datos["mensaje"]);
        frmBajaPedido.reset();
        $("#frmBajaPedido").parent("div").hide("normal");
        rellenarCombo();
    }
  }