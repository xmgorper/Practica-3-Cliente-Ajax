<?php
// Configuraci�n BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bdupolote";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];
//Decodifico el objeto persona
$baja = json_decode($datosJSON);

// Creamos la conexi�n al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");


$sql = "DELETE FROM clientes WHERE id='$baja->id'";

$resultado = mysqli_query($conexion, $sql);

if ($resultado) {
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Baja realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de baja: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>