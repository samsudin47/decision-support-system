-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2025 at 04:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `decision_support_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `alternatives`
--

CREATE TABLE `alternatives` (
  `id` int(11) NOT NULL,
  `kode` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alternatives`
--

INSERT INTO `alternatives` (`id`, `kode`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'A1', 'Fast P', '2024-11-14 18:08:09', '2024-11-14 18:08:09'),
(2, 'A2', 'Prompt SP', '2024-11-14 18:16:08', '2024-11-14 19:00:12'),
(3, 'A3', 'Intuis 3 P', '2024-11-14 19:57:24', '2024-11-14 19:57:24'),
(76, 'A4', 'Pure 3AX', '2024-12-30 14:55:40', '2024-12-30 14:55:40'),
(77, 'A5', 'Pure 7AX', '2024-12-30 14:58:55', '2024-12-30 14:58:55');

-- --------------------------------------------------------

--
-- Table structure for table `criteria`
--

CREATE TABLE `criteria` (
  `id` int(11) NOT NULL,
  `kode` varchar(255) NOT NULL,
  `kriteriaId` varchar(255) NOT NULL,
  `bobot` float NOT NULL,
  `type` enum('Cost','Benefit') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `criteria`
--

INSERT INTO `criteria` (`id`, `kode`, `kriteriaId`, `bobot`, `type`, `createdAt`, `updatedAt`) VALUES
(1, 'C1', 'Harga', 5, 'Benefit', '2024-11-17 01:20:33', '2025-01-01 04:07:35'),
(2, 'C2', 'Filter Suara', 4, 'Benefit', '2024-11-17 01:24:02', '2024-12-10 16:28:36'),
(3, 'C3', 'Microphone', 3, 'Benefit', '2024-11-17 01:24:31', '2024-12-10 16:28:44'),
(4, 'C4', 'Populer', 2, 'Benefit', '2024-11-17 01:25:01', '2024-12-10 16:28:52'),
(5, 'C5', 'Daya Tahan', 1, 'Benefit', '2024-11-17 01:25:50', '2024-12-10 16:29:00');

-- --------------------------------------------------------

--
-- Table structure for table `data_user`
--

CREATE TABLE `data_user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_user`
--

INSERT INTO `data_user` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Syamsuddin', 'mohamadsamsudin@gmail.com', '$2a$10$UPBNRGZOTcscXoXCzUGjUe.Vc4rUCsPKJ/avrzwSX0yPloWZz9sEi', '2024-11-10 12:00:14', '2024-11-10 12:00:14'),
(2, 'Andrian', 'anddrian12@gmail.com', '$2a$10$B6iCmwfZIiHjLk4gFDYMjeB35ichgER/aah3yll043ojX4Nwz8H1y', '2024-11-10 13:18:30', '2024-11-10 13:18:30'),
(3, 'mohamadhasan', 'mohamadhasan@gmail.com', '$2a$10$YlQ0Nw4q89T7aBcWbkbk3Oxv7gkzYs5YBC71HwLNHqqsjxrbERboi', '2024-11-11 14:02:42', '2024-11-11 14:02:42'),
(4, 'rahma', 'putrinurrahmamaulida@gmail.com', '$2a$10$foC57rUr9juZdqDwKr//Xeyyn81OS6hJ4bCrLtcK7NlQ8cbrbexrC', '2024-11-11 14:21:30', '2024-11-11 14:21:30'),
(5, 'Yuri', 'yuribagus@gmail.com', '$2a$10$B52olEJ4M7SxHdwx6vCJTO/cSMpAvtzdyOeLh6r9v.SkDU2uj74OW', '2024-11-11 15:30:29', '2024-11-11 15:30:29'),
(6, 'mohamadsamsudin', 'mohamadsamsudin21@gmail.com', '$2a$10$yvgLfDxsg8d7vXB.Kl4oMu7WRkPLQ68/GizsEkxyVsyjXTMHUd6BO', '2024-11-11 23:49:35', '2024-11-11 23:49:35'),
(7, 'admin', 'admin@gmail.com', '$2a$10$FH70MSA/1W6ohjF8t5.YPeMGg.jEaKPwp/c2Ky3vp4aO.ynC8AUEq', '2024-11-12 15:08:20', '2024-11-12 15:08:20'),
(8, 'agilPanji', 'agilpanjisetiawan@gmail.com', '$2a$10$kP2NPlPbSOJwgG80F9mAxOg4kz4PbSI48ZDl8RJI3Fin6OUV5ePDu', '2024-11-23 04:21:10', '2024-11-23 04:21:10'),
(9, 'user', 'user@gmail.com', '$2a$10$JuD/qo1nkfhkT9couFOBDeSa7fdULLo38DEZ0Gd41KnZXGAoJZWMa', '2024-11-30 04:16:24', '2024-11-30 04:16:24'),
(10, 'sammaDev', 'samma@gmail.com', '$2a$10$Jhq1vanSqtb10WABNMu3XeZohS50S1P8pbdDjxFcH/Vgilg2gcY0O', '2024-12-22 07:41:06', '2024-12-22 07:41:06'),
(11, 'sammaDev', 'sama@gmail.com', '$2a$10$Cn9lVB/5ndzp800LHZo11ei0MhlYxa.fJjVmc4fd6NCB.2Hejvg16', '2024-12-30 15:39:28', '2024-12-30 15:39:28'),
(12, 'sammmmmohammad', 'mohamadsammmmm@gmail.com', '$2a$10$NDJpgh6LB9siIRzcu6gT2eYU/TWnObNjvHQ3Gn/4ii/O3LcgLYc/6', '2024-12-30 15:40:06', '2024-12-30 15:40:06');

-- --------------------------------------------------------

--
-- Table structure for table `penilaian_alternatif`
--

CREATE TABLE `penilaian_alternatif` (
  `id` int(11) NOT NULL,
  `periode` date NOT NULL,
  `nilai` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `alternativeId` int(11) DEFAULT NULL,
  `kriteriaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `penilaian_alternatif`
--

INSERT INTO `penilaian_alternatif` (`id`, `periode`, `nilai`, `createdAt`, `updatedAt`, `alternativeId`, `kriteriaId`) VALUES
(1, '2024-12-21', 1, '2024-11-25 13:43:51', '2024-12-21 15:37:58', 1, 1),
(73, '2024-12-21', 1, '2024-11-27 08:02:06', '2024-12-21 15:38:15', 1, 2),
(74, '2024-12-21', 1, '2024-11-27 08:02:24', '2024-12-21 15:38:33', 1, 3),
(75, '2024-12-21', 4, '2024-11-27 08:02:57', '2024-12-21 15:38:45', 1, 4),
(76, '2024-12-21', 4, '2024-11-27 08:03:22', '2024-12-21 15:38:58', 1, 5),
(77, '2024-12-21', 2, '2024-11-27 08:03:47', '2024-12-21 15:39:15', 2, 1),
(78, '2024-12-21', 1, '2024-11-27 08:04:11', '2024-12-21 15:39:28', 2, 2),
(79, '2024-12-21', 2, '2024-11-27 08:04:11', '2024-12-21 15:39:39', 2, 3),
(80, '2024-12-21', 5, '2024-11-27 08:04:11', '2024-12-21 15:39:48', 2, 4),
(81, '2024-12-21', 4, '2024-11-27 08:04:11', '2024-12-21 15:39:58', 2, 5),
(82, '2024-12-21', 3, '2024-11-27 08:05:30', '2024-12-21 17:29:13', 3, 1),
(83, '2024-12-21', 3, '2024-11-27 08:05:30', '2024-12-21 17:29:20', 3, 2),
(84, '2024-12-21', 3, '2024-11-27 08:05:30', '2024-12-21 17:29:30', 3, 3),
(85, '2024-12-21', 2, '2024-11-27 08:05:30', '2024-12-21 17:29:37', 3, 4),
(86, '2024-12-21', 5, '2024-11-27 08:05:30', '2024-12-21 17:29:44', 3, 5),
(87, '2024-12-21', 4, '2024-11-27 08:06:31', '2024-12-30 14:56:02', 76, 1),
(88, '2024-12-21', 3, '2024-11-27 08:06:31', '2024-12-30 14:56:29', 76, 2),
(89, '2024-12-21', 4, '2024-11-27 08:06:31', '2024-12-30 14:57:05', 76, 3),
(90, '2024-12-21', 3, '2024-11-27 08:06:31', '2024-12-30 14:57:27', 76, 4),
(91, '2024-12-21', 2, '2024-11-27 08:06:31', '2024-12-30 14:57:38', 76, 5),
(92, '2024-12-21', 5, '2024-11-27 08:07:41', '2024-12-30 14:59:22', 77, 1),
(93, '2024-12-21', 4, '2024-11-27 08:07:41', '2024-12-30 14:59:31', 77, 2),
(94, '2024-12-21', 5, '2024-11-27 08:07:41', '2024-12-30 14:59:40', 77, 3),
(95, '2024-12-21', 3, '2024-11-27 08:07:41', '2024-12-30 14:59:59', 77, 4),
(96, '2024-12-21', 2, '2024-11-27 08:07:41', '2024-12-30 15:00:20', 77, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alternatives`
--
ALTER TABLE `alternatives`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode` (`kode`);

--
-- Indexes for table `criteria`
--
ALTER TABLE `criteria`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode` (`kode`);

--
-- Indexes for table `data_user`
--
ALTER TABLE `data_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `penilaian_alternatif`
--
ALTER TABLE `penilaian_alternatif`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alternativeId` (`alternativeId`),
  ADD KEY `kriteriaId` (`kriteriaId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alternatives`
--
ALTER TABLE `alternatives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `criteria`
--
ALTER TABLE `criteria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `data_user`
--
ALTER TABLE `data_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `penilaian_alternatif`
--
ALTER TABLE `penilaian_alternatif`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `penilaian_alternatif`
--
ALTER TABLE `penilaian_alternatif`
  ADD CONSTRAINT `penilaian_alternatif_ibfk_1` FOREIGN KEY (`alternativeId`) REFERENCES `alternatives` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_alternatif_ibfk_2` FOREIGN KEY (`kriteriaId`) REFERENCES `criteria` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
