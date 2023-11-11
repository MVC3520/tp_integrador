-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2023 a las 23:14:06
-- Versión del servidor: 8.0.33
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mi_base_de_datos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `dni` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `apellidos` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`dni`, `nombre`, `apellidos`) VALUES
('11111111A', 'Juan', 'Pérez'),
('22222222B', 'María', 'Gómez'),
('33333333C', 'Pedro', 'Sánchez'),
('44444444D', 'Laura', 'Fernández'),
('55555555E', 'Carlos', 'Martínez'),
('66666666F', 'Ana', 'López'),
('77777777G', 'Luis', 'Rodríguez'),
('88888888H', 'Sofía', 'Díaz'),
('99999999I', 'Miguel', 'Hernández'),
('12345678J', 'Elena', 'Vega');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int NOT NULL,
  `concepto` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `clientes_dni` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `concepto`, `clientes_dni`) VALUES
(1, 'Compra 1', '11111111A'),
(2, 'Compra 2', '22222222B'),
(3, 'Compra 3', '33333333C'),
(4, 'Compra 4', '44444444D'),
(5, 'Compra 5', '55555555E'),
(6, 'Compra 6', '66666666F'),
(7, 'Compra 7', '77777777G'),
(8, 'Compra 8', '88888888H'),
(9, 'Compra 9', '99999999I'),
(10, 'Compra 10', '12345678J');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineascompra`
--

CREATE TABLE `lineascompra` (
  `numero` int NOT NULL,
  `compras_id` int NOT NULL,
  `producto` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `importe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lineascompra`
--

INSERT INTO `lineascompra` (`numero`, `compras_id`, `producto`, `importe`) VALUES
(1, 1, 'Producto 1', 10.5),
(2, 2, 'Producto 2', 20.75),
(3, 3, 'Producto 3', 15.3),
(4, 4, 'Producto 4', 8.5),
(5, 5, 'Producto 5', 12.2),
(6, 6, 'Producto 6', 30),
(7, 7, 'Producto 7', 18.75),
(8, 8, 'Producto 8', 25.5),
(9, 9, 'Producto 9', 14.9),
(10, 10, 'Producto 10', 22);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
