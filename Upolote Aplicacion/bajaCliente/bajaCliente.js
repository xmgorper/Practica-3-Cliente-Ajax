rellenarCombo();

$("#btnAceptarBajaPersona").click(function() {
    let baja = {
        id: frmBajaPersona.txtIdBajaCliente.value.trim(),
    };

      $.ajax({
        url: "bajaCliente/bajaCliente.php",
        data: "datos=" + JSON.stringify(baja),
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaAltaTurismo
    });
    });
  
  function respuestaAltaTurismo(respuesta) {
    console.log(respuesta);
    let datos = JSON.parse(respuesta);
    console.log(datos);
    if (datos["error"]) {
        alert(datos["mensaje"]);
    } else {
        alert(datos["mensaje"]);
        frmBajaPersona.reset();
        $("#frmBajaPersona").parent().hide("normal");
        rellenarCombo();
    }
  }

  function rellenarCombo(oEVento) {
    let oE = oEVento || window.event;
  
  
    $.get("bajaCliente/getClientesBaja.php", null, rellenaComboClientes, 'xml');
    
  
  }
  
  function rellenaComboClientes(data, status, oXHRS) {
  
    console.log(data);
  
  
    var oOptions = data.querySelectorAll("cliente");
    var sOptions="";
    console.log(oOptions);
    console.log(sOptions);
  
    //Cargar options
    for (var i = 0; i < oOptions.length; i++) {
        sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
        sOptions += '">' + oOptions[i].querySelector("nombre").textContent;
        sOptions += "</option>";
        
    }
    
  
    document.getElementById("txtIdBajaCliente").innerHTML=sOptions;
  
  }