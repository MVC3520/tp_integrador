-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-11-2023 a las 02:54:57
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
-- Base de datos: `integrador_cac`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oradores`
--

CREATE TABLE `oradores` (
  `id_orador` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `tema` varchar(100) NOT NULL,
  `fecha_alta` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `oradores`
--

INSERT INTO `oradores` (`id_orador`, `nombre`, `apellido`, `mail`, `tema`, `fecha_alta`) VALUES
(1, 'Juan', 'Perez', 'juan@example.com', 'Tema 1', '2022-01-01'),
(2, 'Maria', 'Lopez', 'maria@example.com', 'Tema 2', '2022-01-02'),
(3, 'Pedro', 'Gomez', 'pedro@example.com', 'Tema 3', '2022-01-03'),
(4, 'Laura', 'Rodriguez', 'laura@example.com', 'Tema 4', '2022-01-04'),
(5, 'Carlos', 'Fernandez', 'carlos@example.com', 'Tema 5', '2022-01-05'),
(6, 'Ana', 'Martinez', 'ana@example.com', 'Tema 6', '2022-01-06'),
(7, 'Luis', 'Gonzalez', 'luis@example.com', 'Tema 7', '2022-01-07'),
(8, 'Sofia', 'Sanchez', 'sofia@example.com', 'Tema 8', '2022-01-08'),
(9, 'Diego', 'Torres', 'diego@example.com', 'Tema 9', '2022-01-09'),
(10, 'Carolina', 'Ramirez', 'carolina@example.com', 'Tema 10', '2022-01-10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `oradores`
--
ALTER TABLE `oradores`
  ADD PRIMARY KEY (`id_orador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `oradores`
--
ALTER TABLE `oradores`
  MODIFY `id_orador` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
