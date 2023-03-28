-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 28, 2023 at 01:03 PM
-- Server version: 8.0.32-0ubuntu0.20.04.2
-- PHP Version: 7.4.3-4ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_doorprize`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id_auth` int NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id_auth`, `username`, `password`) VALUES
(1, 'admin', 'doorprize098');

-- --------------------------------------------------------

--
-- Table structure for table `prize`
--

CREATE TABLE `prize` (
  `id_prize` int NOT NULL,
  `nama_prize` varchar(32) DEFAULT NULL,
  `nama_gambar` varchar(252) CHARACTER SET utf8mb4 DEFAULT NULL,
  `id_session` int DEFAULT NULL,
  `max_winner` int DEFAULT '5'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id_session` int NOT NULL,
  `nama_session` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int NOT NULL,
  `nama_user` varchar(30) DEFAULT NULL,
  `no_hp` varchar(18) DEFAULT NULL,
  `domisili` varchar(30) DEFAULT NULL,
  `nama_pt` varchar(32) CHARACTER SET utf8mb4 DEFAULT NULL,
  `status` enum('active','blacklist') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `winner`
--

CREATE TABLE `winner` (
  `id_winner` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `id_prize` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id_auth`);

--
-- Indexes for table `prize`
--
ALTER TABLE `prize`
  ADD PRIMARY KEY (`id_prize`),
  ADD KEY `id_session` (`id_session`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id_session`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `winner`
--
ALTER TABLE `winner`
  ADD PRIMARY KEY (`id_winner`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_prize` (`id_prize`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id_auth` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `prize`
--
ALTER TABLE `prize`
  MODIFY `id_prize` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id_session` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `winner`
--
ALTER TABLE `winner`
  MODIFY `id_winner` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `prize`
--
ALTER TABLE `prize`
  ADD CONSTRAINT `prize_ibfk_1` FOREIGN KEY (`id_session`) REFERENCES `sessions` (`id_session`);

--
-- Constraints for table `winner`
--
ALTER TABLE `winner`
  ADD CONSTRAINT `winner_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `winner_ibfk_2` FOREIGN KEY (`id_prize`) REFERENCES `prize` (`id_prize`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
