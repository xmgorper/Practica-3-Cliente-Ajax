-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2022 a las 13:36:35
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdupolote`
--

-- --------------------------------------------------------

--

--
drop database if exists bdupolote;
--
-- Base de datos: `bdupolote`
--
CREATE DATABASE IF NOT EXISTS `bdupolote` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bdupolote`;

-- Estructura de tabla para la tabla `clientes`

CREATE TABLE `clientes` (
  `id` int AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `telefono` int(9) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





CREATE TABLE `producto` (
  `id` int AUTO_INCREMENT,
  `tipoAlcohol` varchar(50) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `precio` double NOT NULL,
  `refresco` varchar(30) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repartidores`
--

CREATE TABLE `repartidores` (
  `id` int AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `vehiculo` varchar(30) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `repartidores`
--

CREATE TABLE `pedido` (
  `id` int AUTO_INCREMENT,
  `id_repartidor` int(9) NOT NULL,
  `id_cliente` int(9) NOT NULL,
  `id_producto` int(9) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





--

--
--
-- Restricciones para tablas volcadas
--

ALTER TABLE pedido
  ADD CONSTRAINT pedido_ibfk_1 FOREIGN KEY (id_producto) REFERENCES producto(id) ON DELETE CASCADE;
ALTER TABLE pedido
  ADD CONSTRAINT pedido_ibfk_2 FOREIGN KEY (id_repartidor) REFERENCES repartidores(id) ON DELETE CASCADE;
ALTER TABLE pedido
  ADD CONSTRAINT pedido_ibfk_3 FOREIGN KEY (id_cliente) REFERENCES clientes(id) ON DELETE CASCADE;

--

INSERT INTO `repartidores` (`id`,`nombre`, `apellidos`, `telefono`, `vehiculo`) VALUES
(1,'Lola', 'Montes', '625181716', 'Moto'),
(2,'Iñigo', 'Pastor', '623141617', 'Moto'),
(3,'Lucia', 'Mourin', '625292826', 'Bicicleta'),
(4,'Susana', 'Martinez', '629181010', 'Bicicleta'),
(5,'Erika', 'Yanes', '627282920', 'Bicicleta'),
(6,'Manuel', 'Garcia', '689363534', 'Coche');

INSERT INTO `producto` (`id`,`tipoAlcohol`, `nombre`, `precio`, `refresco`) VALUES
(1,'Whisky', 'Ballantines', 24, 'CocaCola'),
(2,'Vodka', 'Belvedere', 28, 'Fanta de limón'),
(3,'Ginebra', 'Bombay Sapphire', 24, 'Fanta de limón'),
(4,'Ron', 'Brugal', 20, 'CocaCola'),
(5,'Vodka', 'Eristoff', 20, 'CocaCola'),
(6,'Whisky', 'Grants', 20, 'CocaCola'),
(7,'Whisky', 'Green Label', 30, 'Redbull'),
(8,'Vodka', 'Grey Goose', 21, 'Fanta de limón'),
(9,'Ron', 'Puntacana', 23, 'Redbull'),
(10,'Ginebra', 'Tanqueray', 20, 'CocaCola');


INSERT INTO `clientes` (`id`,`nombre`, `apellidos`, `telefono`, `direccion`) VALUES
(1,'Juan', 'Gomez', 623172651, 'Ignacio Sanchez Mejias'),
(2,'Ana', 'Muñoz', 678216374, 'Reverte'),
(3,'Daniel', 'Romero', 655242326, 'Espartero'),
(4,'Luisa', 'Montero', 677342516, 'Cazalla '),
(5,'Francisco', 'Salguero', 632112233, 'Cisne'),
(6,'Maria', 'Barroso', 642181917, 'Tortomillo'),
(7,'Ezequiel', 'Vazquez', 634282726, 'Sierra Monte');

INSERT INTO `pedido` (`id`,`id_repartidor`, `id_cliente`, `id_producto`, `fecha`) VALUES
(1,1, 1, 1, '2022-02-09'),
(2,2, 2, 2, '2022-02-01'),
(3,3, 3, 3, '2022-02-16'),
(4,4, 4, 4, '2022-02-08'),
(5,5, 5, 5, '2022-02-06'),
(6,6, 6, 6, '2022-01-11');

--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
