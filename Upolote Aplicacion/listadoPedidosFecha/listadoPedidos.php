<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bdupolote";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$fecha1 = $_GET["fecha1"];


// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT r.nombre as nombre_Repartidor, c.nombre as nombre_cliente , pro.nombre as nombre_producto, p.fecha 
FROM pedido p 
INNER JOIN repartidores r on r.id= p.id_repartidor
INNER JOIN clientes c on c.id= p.id_cliente
INNER JOIN producto pro on pro.id= p.id_producto
WHERE p.fecha = '$fecha1'";
$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .='<datos>';

while ($fila = mysqli_fetch_array($resultados)) {
    $XML .='<pedido>';
        $XML .='<repartidor>'.$fila["nombre_Repartidor"].'</repartidor>';
        $XML .='<cliente>'.$fila["nombre_cliente"].'</cliente>';
        $XML .='<producto>'.$fila["nombre_producto"].'</producto>';
        $XML .='<fecha>'.$fila["fecha"].'</fecha>';
    $XML .='</pedido>';
}

$XML .='</datos>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

echo $XML;

mysqli_close($conexion);
?>