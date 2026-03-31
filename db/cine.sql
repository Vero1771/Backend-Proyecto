-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-03-2026 a las 22:36:28
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
-- Base de datos: `cine`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asientos`
--

CREATE TABLE `asientos` (
  `id_asiento` int(11) NOT NULL,
  `nombre` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asientos`
--

INSERT INTO `asientos` (`id_asiento`, `nombre`) VALUES
(1, 'A1'),
(2, 'A2'),
(3, 'A3'),
(4, 'A4'),
(5, 'B1'),
(6, 'B2'),
(7, 'B3'),
(8, 'C1'),
(9, 'C2'),
(10, 'D1'),
(11, 'E1'),
(12, 'E2'),
(13, 'E3'),
(14, 'E4'),
(15, 'E5'),
(16, 'E6'),
(17, 'F1'),
(18, 'F2'),
(19, 'F3'),
(20, 'F4'),
(21, 'G1'),
(22, 'G2'),
(23, 'G3'),
(24, 'G4'),
(25, 'G5'),
(26, 'H1'),
(27, 'H2'),
(28, 'H3'),
(29, 'I1'),
(30, 'I2'),
(31, 'J1'),
(32, 'J2'),
(33, 'J3'),
(34, 'J4'),
(35, 'J5'),
(36, 'J6'),
(37, 'J7'),
(38, 'J8'),
(39, 'K1'),
(40, 'K2'),
(41, 'K3'),
(42, 'K4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre`) VALUES
(1, 'Acción'),
(2, 'Ciencia Ficción'),
(3, 'Drama'),
(4, 'Comedia'),
(5, 'Aventura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificacion_peliculas`
--

CREATE TABLE `clasificacion_peliculas` (
  `id_clasificacion` int(11) NOT NULL,
  `nombre` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clasificacion_peliculas`
--

INSERT INTO `clasificacion_peliculas` (`id_clasificacion`, `nombre`) VALUES
(1, 'PG-13'),
(2, 'R'),
(3, 'G'),
(4, 'PG'),
(5, 'NC-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `directores`
--

CREATE TABLE `directores` (
  `id_director` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `directores`
--

INSERT INTO `directores` (`id_director`, `nombre`, `apellido`) VALUES
(1, 'Anthony', 'Russo'),
(2, 'Joe', 'Russo'),
(3, 'Christopher', 'Nolan'),
(4, 'Frank', 'Darabont'),
(5, 'Tim', 'Miller'),
(6, 'Steven', 'Spielberg'),
(7, 'Lana', 'Wachowski'),
(8, 'Lilly', 'Wachowski'),
(9, 'Robert', 'Zemeckis');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas`
--

CREATE TABLE `entradas` (
  `id_entrada` int(11) NOT NULL,
  `id_venta` int(11) DEFAULT NULL,
  `id_funcion` int(11) DEFAULT NULL,
  `id_asiento` int(10) NOT NULL,
  `precio` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `entradas`
--

INSERT INTO `entradas` (`id_entrada`, `id_venta`, `id_funcion`, `id_asiento`, `precio`) VALUES
(1, 1, 1, 1, 12.50),
(2, 1, 1, 2, 12.50),
(3, 1, 1, 3, 12.50),
(4, 1, 1, 4, 12.50),
(5, 2, 2, 5, 12.50),
(6, 2, 2, 6, 12.50),
(7, 2, 2, 7, 12.50),
(8, 3, 3, 8, 12.50),
(9, 3, 3, 9, 12.50),
(10, 4, 4, 10, 12.50),
(11, 5, 5, 11, 12.50),
(12, 5, 5, 12, 12.50),
(13, 5, 5, 13, 12.50),
(14, 5, 5, 14, 12.50),
(15, 5, 5, 15, 12.50),
(16, 5, 5, 16, 12.50),
(17, 6, 6, 17, 12.50),
(18, 6, 6, 18, 12.50),
(19, 6, 6, 19, 12.50),
(20, 6, 6, 20, 12.50),
(21, 7, 7, 21, 12.50),
(22, 7, 7, 22, 12.50),
(23, 7, 7, 23, 12.50),
(24, 7, 7, 24, 12.50),
(25, 7, 7, 25, 12.50),
(26, 8, 8, 26, 12.50),
(27, 8, 8, 27, 12.50),
(28, 8, 8, 28, 12.50),
(29, 9, 9, 29, 12.50),
(30, 9, 9, 30, 12.50),
(31, 10, 10, 31, 12.50),
(32, 10, 10, 32, 12.50),
(33, 10, 10, 33, 12.50),
(34, 10, 10, 34, 12.50),
(35, 10, 10, 35, 12.50),
(36, 10, 10, 36, 12.50),
(37, 10, 10, 37, 12.50),
(38, 10, 10, 38, 12.50),
(39, 11, 11, 39, 12.50),
(40, 11, 11, 40, 12.50),
(41, 11, 11, 41, 12.50),
(42, 11, 11, 42, 12.50),
(43, 19, 5, 5, 15.00),
(44, 20, 5, 6, 15.00),
(45, NULL, 5, 7, 15.00),
(46, NULL, 5, 8, 15.00),
(47, NULL, 5, 9, 15.00),
(48, NULL, 5, 10, 15.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funciones`
--

CREATE TABLE `funciones` (
  `id_funcion` int(11) NOT NULL,
  `id_pelicula` int(11) DEFAULT NULL,
  `id_sala` int(11) DEFAULT NULL,
  `fecha_hora` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `funciones`
--

INSERT INTO `funciones` (`id_funcion`, `id_pelicula`, `id_sala`, `fecha_hora`) VALUES
(1, 1, 1, '2023-10-01 18:00:00'),
(2, 1, 2, '2023-10-02 20:00:00'),
(3, 2, 3, '2023-10-03 19:30:00'),
(4, 3, 4, '2023-10-04 17:00:00'),
(5, 4, 1, '2023-10-05 21:00:00'),
(6, 5, 2, '2023-10-06 15:00:00'),
(7, 6, 3, '2023-10-07 19:00:00'),
(8, 7, 4, '2023-10-08 18:30:00'),
(9, 8, 1, '2023-10-09 20:00:00'),
(10, 1, 3, '2023-10-10 19:00:00'),
(11, 2, 4, '2023-10-11 17:30:00'),
(12, 1, 2, '2025-08-14 19:52:00'),
(13, 1, 1, '2025-08-04 17:27:00'),
(14, 2, 2, '2025-08-15 17:29:00'),
(15, 2, 2, '2025-08-17 18:37:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodos_pago`
--

CREATE TABLE `metodos_pago` (
  `id_metodo` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `metodos_pago`
--

INSERT INTO `metodos_pago` (`id_metodo`, `nombre`) VALUES
(1, 'Transferencia Bancaria'),
(2, 'Tarjeta de Crédito'),
(3, 'Efectivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id_pelicula` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `anio` int(11) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `id_clasificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id_pelicula`, `titulo`, `anio`, `duracion`, `id_clasificacion`) VALUES
(1, 'Avengers: Endgame', 2019, 181, 1),
(2, 'Interstellar', 2014, 169, 1),
(3, 'The Shawshank Redemption', 1994, 142, 2),
(4, 'Deadpool', 2016, 108, 2),
(5, 'Jurassic Park', 1993, 127, 1),
(6, 'Inception', 2010, 148, 1),
(7, 'The Matrix', 1999, 136, 2),
(8, 'Forrest Gump', 1994, 142, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas_categorias`
--

CREATE TABLE `peliculas_categorias` (
  `id_pelicula_categoria` int(11) NOT NULL,
  `id_pelicula` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas_categorias`
--

INSERT INTO `peliculas_categorias` (`id_pelicula_categoria`, `id_pelicula`, `id_categoria`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 2),
(4, 2, 3),
(5, 3, 3),
(6, 4, 1),
(7, 4, 4),
(8, 5, 2),
(9, 5, 5),
(10, 6, 1),
(11, 6, 2),
(12, 7, 1),
(13, 7, 2),
(14, 8, 3),
(15, 8, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas_directores`
--

CREATE TABLE `peliculas_directores` (
  `id_pelicula_director` int(11) NOT NULL,
  `id_pelicula` int(11) NOT NULL,
  `id_director` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas_directores`
--

INSERT INTO `peliculas_directores` (`id_pelicula_director`, `id_pelicula`, `id_director`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 3, 4),
(5, 4, 5),
(6, 5, 6),
(7, 6, 3),
(8, 7, 7),
(9, 7, 8),
(10, 8, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `en_stock` tinyint(1) NOT NULL DEFAULT 0,
  `id_proveedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `cantidad`, `precio_unitario`, `en_stock`, `id_proveedor`) VALUES
(1, 'cotufas', 50, 10.00, 1, 1),
(2, 'samba', 50, 2.00, 1, 3),
(3, 'refresco', 50, 8.00, 1, 2),
(4, 'combo tequeños', 25, 5.00, 1, 4),
(5, 'cocosete', 50, 5.00, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `id_proveedor` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `empresa` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id_proveedor`, `nombre`, `correo`, `telefono`, `empresa`) VALUES
(1, 'Carlos Méndez', 'ventas@maizoro.com', '5551234567', 'Maizoro Snacks S.A.'),
(2, 'Ana Rodríguez', 'contacto@refrescosunidos.com', '3339876543', 'Bebidas Globales'),
(3, 'Luis García', 'logistica@confitexmax.mx', '8114567890', 'Confitex Industrial'),
(4, 'Sofía Martínez', 's.martinez@techcine.com', '9982233445', 'TechCine Products'),
(5, 'Jorge Pérez', 'ventas@dulcesmex.com', '2226677889', 'Dulces Tradicionales S.A.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salas`
--

CREATE TABLE `salas` (
  `id_sala` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `id_sucursal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salas`
--

INSERT INTO `salas` (`id_sala`, `nombre`, `capacidad`, `id_sucursal`) VALUES
(1, 'Sala IMAX', 200, 1),
(2, 'Sala VIP', 100, 1),
(3, 'Sala 3D', 150, 1),
(4, 'Sala Estándar', 120, 1),
(5, 'Sala 2 ', 10, 2),
(6, 'Sala 3 ', 50, 2),
(7, 'Sala 4', 122, 2),
(8, 'Sala 5', 121, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `id_sucursal` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`id_sucursal`, `nombre`, `estado`, `ciudad`, `direccion`) VALUES
(1, 'CineCentral Norte', 'CDMX', 'Ciudad de México', 'Av. Reforma 222, Col. Juárez'),
(2, 'CineStar Galerías', 'Jalisco', 'Guadalajara', 'Av. Vallarta 3959, Don Bosco Vallarta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` enum('admin','user') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `email`, `password`, `rol`) VALUES
(1, 'admin@gmail.com', '$2b$10$D2k/5ZVKofkoc6BwqUlHsuN3qZj7a8DkqJ1BSk6ElmLNDa3Lu92qm', 'admin'),
(2, 'user@gmail.com', '$2b$10$F7sWz0XQF.NamuPmwFVNGO/uF7774wyyHbfENJlkP8KBe1Y1j4772', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL,
  `id_metodo` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `id_metodo`, `fecha`, `total`, `id_usuario`) VALUES
(1, 1, '2023-10-01 17:50:00', 50.00, NULL),
(2, 2, '2023-10-02 19:45:00', 37.50, NULL),
(3, 3, '2023-10-03 19:20:00', 25.00, NULL),
(4, 1, '2023-10-04 16:50:00', 12.50, NULL),
(5, 2, '2023-10-05 20:50:00', 75.00, NULL),
(6, 3, '2023-10-06 14:45:00', 50.00, NULL),
(7, 1, '2023-10-07 18:50:00', 62.50, NULL),
(8, 2, '2023-10-08 18:20:00', 37.50, NULL),
(9, 3, '2023-10-09 19:50:00', 25.00, NULL),
(10, 1, '2023-10-10 18:45:00', 100.00, NULL),
(11, 2, '2023-10-11 17:20:00', 50.00, NULL),
(12, 1, '2026-01-01 17:50:00', 20.00, NULL),
(13, 2, '2026-01-02 19:45:00', 4.00, NULL),
(14, 3, '2026-01-03 19:20:00', 40.00, NULL),
(15, 1, '2026-01-04 16:50:00', 10.00, NULL),
(16, 2, '2026-01-05 20:50:00', 20.00, NULL),
(17, 1, '2026-03-24 14:36:24', 12.00, 2),
(18, 1, '2026-03-24 14:36:29', 5.00, 2),
(19, 1, '2026-03-24 14:37:25', 15.00, 2),
(20, 1, '2026-03-24 14:37:34', 15.00, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_productos`
--

CREATE TABLE `ventas_productos` (
  `id_venta_producto` int(11) NOT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_venta` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas_productos`
--

INSERT INTO `ventas_productos` (`id_venta_producto`, `id_producto`, `id_venta`, `cantidad`, `subtotal`) VALUES
(1, 1, 12, 2, 20.00),
(2, 2, 13, 2, 4.00),
(3, 3, 14, 5, 40.00),
(4, 4, 15, 2, 10.00),
(5, 5, 16, 4, 20.00),
(6, 1, 17, 1, 10.00),
(7, 2, 17, 1, 2.00),
(8, 4, 18, 1, 5.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asientos`
--
ALTER TABLE `asientos`
  ADD PRIMARY KEY (`id_asiento`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `clasificacion_peliculas`
--
ALTER TABLE `clasificacion_peliculas`
  ADD PRIMARY KEY (`id_clasificacion`);

--
-- Indices de la tabla `directores`
--
ALTER TABLE `directores`
  ADD PRIMARY KEY (`id_director`);

--
-- Indices de la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`id_entrada`),
  ADD KEY `id_venta` (`id_venta`),
  ADD KEY `id_funcion` (`id_funcion`),
  ADD KEY `id_asiento` (`id_asiento`);

--
-- Indices de la tabla `funciones`
--
ALTER TABLE `funciones`
  ADD PRIMARY KEY (`id_funcion`),
  ADD KEY `id_pelicula` (`id_pelicula`),
  ADD KEY `id_sala` (`id_sala`);

--
-- Indices de la tabla `metodos_pago`
--
ALTER TABLE `metodos_pago`
  ADD PRIMARY KEY (`id_metodo`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id_pelicula`),
  ADD KEY `id_clasificacion` (`id_clasificacion`);

--
-- Indices de la tabla `peliculas_categorias`
--
ALTER TABLE `peliculas_categorias`
  ADD PRIMARY KEY (`id_pelicula_categoria`),
  ADD KEY `id_pelicula` (`id_pelicula`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `peliculas_directores`
--
ALTER TABLE `peliculas_directores`
  ADD PRIMARY KEY (`id_pelicula_director`),
  ADD KEY `id_pelicula` (`id_pelicula`),
  ADD KEY `id_director` (`id_director`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_proveedor` (`id_proveedor`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`id_proveedor`);

--
-- Indices de la tabla `salas`
--
ALTER TABLE `salas`
  ADD PRIMARY KEY (`id_sala`),
  ADD KEY `id_sucursal` (`id_sucursal`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`id_sucursal`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `id_metodo` (`id_metodo`),
  ADD KEY `ventas_ibfk_2` (`id_usuario`);

--
-- Indices de la tabla `ventas_productos`
--
ALTER TABLE `ventas_productos`
  ADD PRIMARY KEY (`id_venta_producto`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_venta` (`id_venta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asientos`
--
ALTER TABLE `asientos`
  MODIFY `id_asiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clasificacion_peliculas`
--
ALTER TABLE `clasificacion_peliculas`
  MODIFY `id_clasificacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `directores`
--
ALTER TABLE `directores`
  MODIFY `id_director` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `entradas`
--
ALTER TABLE `entradas`
  MODIFY `id_entrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `funciones`
--
ALTER TABLE `funciones`
  MODIFY `id_funcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `metodos_pago`
--
ALTER TABLE `metodos_pago`
  MODIFY `id_metodo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id_pelicula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `peliculas_categorias`
--
ALTER TABLE `peliculas_categorias`
  MODIFY `id_pelicula_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `peliculas_directores`
--
ALTER TABLE `peliculas_directores`
  MODIFY `id_pelicula_director` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `id_proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `salas`
--
ALTER TABLE `salas`
  MODIFY `id_sala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `id_sucursal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `ventas_productos`
--
ALTER TABLE `ventas_productos`
  MODIFY `id_venta_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD CONSTRAINT `entradas_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`) ON DELETE CASCADE,
  ADD CONSTRAINT `entradas_ibfk_2` FOREIGN KEY (`id_funcion`) REFERENCES `funciones` (`id_funcion`),
  ADD CONSTRAINT `entradas_ibfk_3` FOREIGN KEY (`id_asiento`) REFERENCES `asientos` (`id_asiento`);

--
-- Filtros para la tabla `funciones`
--
ALTER TABLE `funciones`
  ADD CONSTRAINT `funciones_ibfk_1` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id_pelicula`),
  ADD CONSTRAINT `funciones_ibfk_2` FOREIGN KEY (`id_sala`) REFERENCES `salas` (`id_sala`);

--
-- Filtros para la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `peliculas_ibfk_1` FOREIGN KEY (`id_clasificacion`) REFERENCES `clasificacion_peliculas` (`id_clasificacion`);

--
-- Filtros para la tabla `peliculas_categorias`
--
ALTER TABLE `peliculas_categorias`
  ADD CONSTRAINT `peliculas_categorias_ibfk_1` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id_pelicula`) ON DELETE CASCADE,
  ADD CONSTRAINT `peliculas_categorias_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE CASCADE;

--
-- Filtros para la tabla `peliculas_directores`
--
ALTER TABLE `peliculas_directores`
  ADD CONSTRAINT `peliculas_directores_ibfk_1` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id_pelicula`) ON DELETE CASCADE,
  ADD CONSTRAINT `peliculas_directores_ibfk_2` FOREIGN KEY (`id_director`) REFERENCES `directores` (`id_director`) ON DELETE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`id_proveedor`);

--
-- Filtros para la tabla `salas`
--
ALTER TABLE `salas`
  ADD CONSTRAINT `salas_ibfk_1` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursales` (`id_sucursal`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_metodo`) REFERENCES `metodos_pago` (`id_metodo`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE SET NULL;

--
-- Filtros para la tabla `ventas_productos`
--
ALTER TABLE `ventas_productos`
  ADD CONSTRAINT `ventas_productos_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `ventas_productos_ibfk_2` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
