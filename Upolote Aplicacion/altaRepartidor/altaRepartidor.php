<?php
// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bdupolote";
$usuario   = "root";
$password  = "";

extract($_POST);

$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");



$sql = "INSERT INTO repartidores (nombre, apellidos, telefono, vehiculo) VALUES ('$nombre','$apellidos','$telefono','$vehiculo');";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}
mysqli_close($conexion);


echo json_encode($respuesta);
?>