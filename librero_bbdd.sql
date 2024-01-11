-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-01-2024 a las 06:44:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `librero_bbdd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `ISBN` decimal(15,0) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `autor` varchar(200) NOT NULL,
  `precio_unitario` decimal(9,2) DEFAULT NULL,
  `PAGINAS` int(11) DEFAULT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `NOVEDAD` char(1) DEFAULT NULL,
  `id_tema_libro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`ISBN`, `titulo`, `autor`, `precio_unitario`, `PAGINAS`, `imagen`, `stock`, `NOVEDAD`, `id_tema_libro`) VALUES
(1, 'El Viaje Interdimensional', 'Alicia Sanchez', 20.99, 320, 'Interestelar.png', 50, 'T', 1),
(2, 'El Enigma del Pasado', 'Roberrt Gomez', 18.50, 280, 'EnigmaDelPasado.png', 35, 'F', 2),
(3, 'Caminos del Pasado', 'Juan Rodriguez', 25.00, 400, 'CaminoPasado.png', 20, 'T', 3),
(4, 'El Reino Magico', 'Maria Perez', 22.75, 350, 'ReinoMagico.png', 40, 'T', 4),
(5, 'Descrubriendo el Universo', 'Luiz', 28.99, 450, 'DescubriendoELUniverso.png', 15, 'F', 5),
(6, 'Blaze Runner', 'David Johnson', 24.50, 380, 'BladeRunner.png', 25, 'T', 1),
(7, 'Sombres en la Noche', 'Marta Gutierrez', 19.75, 310, 'SombraDeNoche.png', 30, 'T', 2),
(8, 'Revoluciones y Tranformaciones', 'Ana Garcia', 26.50, 420, 'Revoluciones.png', 18, 'F', 3),
(9, 'El Bosque Encantado', 'Javier Lopez', 21.99, 340, 'ElBosqueEncando.png', 35, 'T', 4),
(10, 'Maravillas del Cosmos', 'Laura Torres', 29.99, 480, 'MaravillasDelCosmos.png', 12, 'T', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas_pedido`
--

CREATE TABLE `lineas_pedido` (
  `NUM_ORDEN` int(11) NOT NULL,
  `ID_PEDIDO` int(11) NOT NULL,
  `ISBN` decimal(15,0) NOT NULL,
  `FECHA_ALTA` date DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL,
  `PRECIO_VENTA` decimal(9,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `ID_PEDIDO` int(11) NOT NULL,
  `DIRECCION_ENTREGA` varchar(50) DEFAULT NULL,
  `ESTADO` varchar(30) NOT NULL,
  `FECHA_ALTA` date DEFAULT NULL,
  `USERNAME` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `ID_PERFIL` int(11) NOT NULL,
  `DESCRIPCION` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `perfiles`
--

INSERT INTO `perfiles` (`ID_PERFIL`, `DESCRIPCION`) VALUES
(1, 'ROL_ADMON'),
(2, 'ROL_CLIENTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `id_tema` int(11) NOT NULL,
  `desc_tema` varchar(50) NOT NULL,
  `ABREVIATURA` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`id_tema`, `desc_tema`, `ABREVIATURA`) VALUES
(1, 'Ciencia Ficcion', 'CF'),
(2, 'Misterio', 'M'),
(3, 'Historia', 'H'),
(4, 'Fantasia', 'F'),
(5, 'Ciencia', 'C');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `USERNAME` varchar(15) NOT NULL,
  `PASSWORD` varchar(20) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `APELLIDO` varchar(50) DEFAULT NULL,
  `ENABLED` int(11) DEFAULT 1,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `FECHA_ALTA` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`USERNAME`, `PASSWORD`, `EMAIL`, `NOMBRE`, `APELLIDO`, `ENABLED`, `DIRECCION`, `FECHA_ALTA`) VALUES
('ramon', 'ramoncin', 'ramon@lib.com', 'Ramon', 'Godb', 1, 'Calle pez nº 3, Madrid', '2022-12-21'),
('tomas', 'tomasin', 'tomas@gmail.com', 'Tomas', 'Escu', 1, 'Calle nuez nº 23, Sevilla', '2023-11-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_perfiles`
--

CREATE TABLE `usuario_perfiles` (
  `USERNAME` varchar(15) NOT NULL,
  `ID_PERFIL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_perfiles`
--

INSERT INTO `usuario_perfiles` (`USERNAME`, `ID_PERFIL`) VALUES
('ramon', 1),
('tomas', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`ISBN`),
  ADD KEY `ID_TEMA` (`id_tema_libro`);

--
-- Indices de la tabla `lineas_pedido`
--
ALTER TABLE `lineas_pedido`
  ADD PRIMARY KEY (`NUM_ORDEN`),
  ADD KEY `ID_PEDIDO` (`ID_PEDIDO`),
  ADD KEY `ISBN` (`ISBN`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`ID_PEDIDO`),
  ADD KEY `USERNAME` (`USERNAME`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`ID_PERFIL`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id_tema`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`USERNAME`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`);

--
-- Indices de la tabla `usuario_perfiles`
--
ALTER TABLE `usuario_perfiles`
  ADD PRIMARY KEY (`USERNAME`,`ID_PERFIL`),
  ADD KEY `ID_PERFIL` (`ID_PERFIL`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lineas_pedido`
--
ALTER TABLE `lineas_pedido`
  MODIFY `NUM_ORDEN` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `ID_PEDIDO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `ID_PERFIL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `libros_ibfk_1` FOREIGN KEY (`id_tema_libro`) REFERENCES `temas` (`ID_TEMA`);

--
-- Filtros para la tabla `lineas_pedido`
--
ALTER TABLE `lineas_pedido`
  ADD CONSTRAINT `lineas_pedido_ibfk_1` FOREIGN KEY (`ID_PEDIDO`) REFERENCES `pedidos` (`ID_PEDIDO`),
  ADD CONSTRAINT `lineas_pedido_ibfk_2` FOREIGN KEY (`ISBN`) REFERENCES `libros` (`ISBN`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`USERNAME`) REFERENCES `usuarios` (`USERNAME`);

--
-- Filtros para la tabla `usuario_perfiles`
--
ALTER TABLE `usuario_perfiles`
  ADD CONSTRAINT `usuario_perfiles_ibfk_1` FOREIGN KEY (`USERNAME`) REFERENCES `usuarios` (`USERNAME`),
  ADD CONSTRAINT `usuario_perfiles_ibfk_2` FOREIGN KEY (`ID_PERFIL`) REFERENCES `perfiles` (`ID_PERFIL`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
