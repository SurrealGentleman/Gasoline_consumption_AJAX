-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 23 2024 г., 14:04
-- Версия сервера: 8.0.29
-- Версия PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `Gasoline_consumption`
--

-- --------------------------------------------------------

--
-- Структура таблицы `transport`
--

CREATE TABLE `transport` (
  `Вид_транспорта` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Марка_автомобиля` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Расход_бензина_на_100км` varchar(4) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `transport`
--

INSERT INTO `transport` (`Вид_транспорта`, `Марка_автомобиля`, `Расход_бензина_на_100км`) VALUES
('Грузовой', 'Газель', '16'),
('Грузовой', 'УАЗ', '14'),
('Грузовой', 'ЗИЛ', '30'),
('Грузовой', 'Mercedes — Benz', '22'),
('Грузовой', 'Volkswagen', '10.5'),
('Грузовой', 'Mitsubishi ', '11'),
('Легковой', 'ВАЗ', '6.5'),
('Легковой', 'Toyota', '7'),
('Легковой', 'Renault', '6'),
('Легковой', 'Range Rover', '10.4'),
('Легковой', 'Kia ', '8');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
