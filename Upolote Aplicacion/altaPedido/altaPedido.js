localStorage.clear();
muestraProductosGetJson(); //Esto está hecho con Local Storage y Json
muestraClientesGetJson();
muestraRepartidoresGetJson();


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
   
  function muestraProductosGetJson(oEvento) {

    let oE = oEvento || window.event;

    if (localStorage["productos"] != undefined) {
      let y= localStorage.getItem('productos');
      let llenaLista1= JSON.parse(y);
        var sOptions="";
        for (var i = 0; i < llenaLista1.length; i++) {
          sOptions += '<option value="' + llenaLista1[i].id;
          sOptions += '">' + llenaLista1[i].nombre;
          sOptions += "</option>";
          
      }   
      document.getElementById("lstProducto").innerHTML=sOptions; 
    }
    
    else {
        oAJAX = objetoXHR();
        oAJAX.addEventListener("readystatechange", cargarLocalStorage);
        oAJAX.open("GET", "altaPedido/getProductos.php", true);
        oAJAX.send();
           
    }
    
}

function cargarLocalStorage(data) {
    
    if (this.readyState == 4 && this.status == 200) {

        console.log(data);
        localStorage["productos"]=data.target.response;
          let y= localStorage.getItem('productos');
          let llenaLista1= JSON.parse(y);
          var sOptions="";
          for (var i = 0; i < llenaLista1.length; i++) {
            sOptions += '<option value="' + llenaLista1[i].id;
            sOptions += '">' + llenaLista1[i].nombre;
            sOptions += "</option>";
            
        }   
        document.getElementById("lstProducto").innerHTML=sOptions; 

    }

}

function muestraClientesGetJson(oEvento) {

    let oE = oEvento || window.event;

    if (localStorage["clientes"] != undefined) {
      let x= localStorage.getItem('clientes');
      let llenaLista= JSON.parse(x);
        var sOptions="";
        for (var i = 0; i < llenaLista.length; i++) {
          sOptions += '<option value="' + llenaLista[i].id;
          sOptions += '">' + llenaLista[i].nombre;
          sOptions += "</option>";
          
      }   
      document.getElementById("lstCliente").innerHTML=sOptions; 
    }
    
    else {
        oAJAX = objetoXHR();
        oAJAX.addEventListener("readystatechange", cargarLocalStorage1);
        oAJAX.open("GET", "altaPedido/getClientes.php", true);
        oAJAX.send();
           
    }
    
}

function cargarLocalStorage1(data) {
    
    if (this.readyState == 4 && this.status == 200) {

        console.log(data);
        localStorage["clientes"]=data.target.response;
          let x= localStorage.getItem('clientes');
          let llenaLista= JSON.parse(x);
          var sOptions="";
          for (var i = 0; i < llenaLista.length; i++) {
            sOptions += '<option value="' + llenaLista[i].id;
            sOptions += '">' + llenaLista[i].nombre;
            sOptions += "</option>";
            
        }   
        document.getElementById("lstCliente").innerHTML=sOptions; 

    }

}

function muestraRepartidoresGetJson(oEvento) {

    let oE = oEvento || window.event;

    if (localStorage["repartidores"] != undefined) {
      let z= localStorage.getItem('repartidores');
      let llenaLista3= JSON.parse(z);
        var sOptions="";
        for (var i = 0; i < llenaLista3.length; i++) {
          sOptions += '<option value="' + llenaLista3[i].id;
          sOptions += '">' + llenaLista3[i].nombre;
          sOptions += "</option>";
          
      }   
      document.getElementById("lstRepartidor").innerHTML=sOptions; 
    }
    
    else {
        oAJAX = objetoXHR();
        oAJAX.addEventListener("readystatechange", cargarLocalStorage2);
        oAJAX.open("GET", "altaPedido/getRepartidores.php", true);
        oAJAX.send();
           
    }
    
}

function cargarLocalStorage2(data) {
    
    if (this.readyState == 4 && this.status == 200) {

        console.log(data);
        localStorage["repartidores"]=data.target.response;
          let z= localStorage.getItem('repartidores');
          let llenaLista3= JSON.parse(z);
          var sOptions="";
          for (var i = 0; i < llenaLista3.length; i++) {
            sOptions += '<option value="' + llenaLista3[i].id;
            sOptions += '">' + llenaLista3[i].nombre;
            sOptions += "</option>";
            
        }   
        document.getElementById("lstRepartidor").innerHTML=sOptions; 

    }

}


$("#btnAceptarPedido").click(function() {
    let pedido = {
        producto: frmAltaPedido.lstProducto.value.trim(),
        repartidor: frmAltaPedido.lstRepartidor.value.trim(),
        cliente: frmAltaPedido.lstCliente.value.trim(),
        fecha: frmAltaPedido.txtFechaPedido.value.trim(),
    };
    
    if(pedido.producto.length == 0|| pedido.repartidor.length == 0|| pedido.cliente.length == 0|| pedido.fecha==false){
      alert("faltan datos por rellenar");
    }
    
    else{
      $.ajax({
        url: "altaPedido/altaPedido.php",
        data: "datos=" + JSON.stringify(pedido),
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaAltaPedido
    });
    }
  });
  
  function respuestaAltaPedido(resultado) {
    console.log(resultado);
    let datos = JSON.parse(resultado);
    console.log(datos);
    if (datos["error"]) {
        alert(datos["mensaje"]);
    } else {
        alert(datos["mensaje"]);
        frmAltaPedido.reset();
        $("#frmAltaPedido").parent("div").hide("normal");
    }
  }