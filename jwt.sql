-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2021 at 10:47 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jwt`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `id` int(50) NOT NULL,
  `bill_amount` int(50) NOT NULL,
  `created_time` varchar(20) NOT NULL,
  `payment` int(10) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `userid_name` varchar(255) DEFAULT NULL,
  `items_description` varchar(255) NOT NULL,
  `useridfk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `bill_amount`, `created_time`, `payment`, `payment_method`, `userid_name`, `items_description`, `useridfk`) VALUES
(10, 50852, '85589', 1555, 'cash', NULL, '', 4),
(11, 1250, '', 4000, 'card', 'checknew test', '', 4);

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(17);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `item_code` varchar(100) NOT NULL,
  `amount_remaining` varchar(100) NOT NULL,
  `unit_price` int(50) NOT NULL,
  `created_time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `name`, `item_code`, `amount_remaining`, `unit_price`, `created_time`) VALUES
(2, 'Rice Supply', '98', '44', 99, ''),
(11, 'rice', '001', '100', 80, ''),
(12, 'dhal', '0002', '88', 50, ''),
(14, 'csdfsd', '95859', '44', 966, '2021-05-03 15:44:55');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `telephone` varchar(100) NOT NULL,
  `item1` varchar(100) NOT NULL,
  `item2` varchar(100) NOT NULL,
  `item3` varchar(100) NOT NULL,
  `created_time` varchar(20) NOT NULL,
  `itemid_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `name`, `telephone`, `item1`, `item2`, `item3`, `created_time`, `itemid_fk`) VALUES
(6, 'sup One', '012345679', 'itemOne', 'itemTwoooo', 'itemThree', '', 2),
(7, 'supTwooo', '0123456789', 'itOne', 'itTwo', 'itThree', '', 11),
(8, 'supThree', '0123456789', 'iteOne', 'iteTwo', 'iteThree', '', 12);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `designation` int(11) DEFAULT NULL,
  `telephone` int(20) DEFAULT NULL,
  `timestamp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `created_time`, `fname`, `lname`, `designation`, `telephone`, `timestamp`) VALUES
(4, 'checknewbie', 'fbfdbf@gmail.comm', 'fsefse', '2021-04-29 12:14:50', NULL, NULL, NULL, 1234567898, NULL),
(25, 'cmsMerchant', 'adorekasun@gmail.com', 'asfad', '2021-05-07 11:33:20', NULL, NULL, NULL, 779219315, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3b1yvk7323qy6i1au5cqhn3qi` (`useridfk`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `itemid_fk` (`itemid_fk`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `FK3b1yvk7323qy6i1au5cqhn3qi` FOREIGN KEY (`useridfk`) REFERENCES `user` (`id`);

--
-- Constraints for table `supplier`
--
ALTER TABLE `supplier`
  ADD CONSTRAINT `supplier_ibfk_1` FOREIGN KEY (`itemid_fk`) REFERENCES `item` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
