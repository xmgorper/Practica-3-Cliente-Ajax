<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bdupolote";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];
//Decodifico el objeto persona
$baja = json_decode($datosJSON);

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_report(MYSQLI_REPORT_OFF);

$sql = "DELETE FROM pedido  WHERE id='$baja->id'";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Baja realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}

/*try{
    mysqli_query($conexion,$sql);
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
}
catch(Exception $e){
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".$e->getMessage();
}*/

echo json_encode($respuesta);

mysqli_close($conexion);
?>