CREATE DATABASE  IF NOT EXISTS `qlph` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `qlph`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: qlph
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitietphong`
--

DROP TABLE IF EXISTS `chitietphong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chitietphong` (
  `idchitietphong` int(11) NOT NULL AUTO_INCREMENT,
  `idphong` int(11) DEFAULT NULL,
  `tennguoidung` varchar(255) DEFAULT NULL,
  `mssv` int(11) DEFAULT NULL,
  `lop` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idchitietphong`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietphong`
--

LOCK TABLES `chitietphong` WRITE;
/*!40000 ALTER TABLE `chitietphong` DISABLE KEYS */;
INSERT INTO `chitietphong` VALUES (28,105,'da',1233,'213'),(29,105,'eqư',123,'ađ'),(30,105,'zcx',123,'ưa'),(31,105,'ưqecxz',123,'213');
/*!40000 ALTER TABLE `chitietphong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dmphong`
--

DROP TABLE IF EXISTS `dmphong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dmphong` (
  `iddmphong` int(11) NOT NULL AUTO_INCREMENT,
  `tenphong` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iddmphong`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dmphong`
--

LOCK TABLES `dmphong` WRITE;
/*!40000 ALTER TABLE `dmphong` DISABLE KEYS */;
INSERT INTO `dmphong` VALUES (1,'Phòng học nhóm 1'),(2,'Phòng học nhóm 2'),(3,'Phòng học nhóm 3'),(4,'Phòng học nhóm 4'),(5,'Phòng học nhóm 5'),(6,'Phòng học nhóm 6'),(7,'Phòng học nhóm 7'),(8,'Phòng hội thảo'),(9,'Phòng học sau Đại Học'),(10,'Khu vực phòng đọc sách 1'),(11,'Khu vực phòng đọc sách 2'),(12,'Khu vực phòng đọc sách 3'),(13,'Khu vực phòng đọc sách 4'),(14,'Khu vực phòng đọc sách 5');
/*!40000 ALTER TABLE `dmphong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dmtrangthai`
--

DROP TABLE IF EXISTS `dmtrangthai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dmtrangthai` (
  `idtrangthai` int(11) NOT NULL AUTO_INCREMENT,
  `trangthai` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idtrangthai`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dmtrangthai`
--

LOCK TABLES `dmtrangthai` WRITE;
/*!40000 ALTER TABLE `dmtrangthai` DISABLE KEYS */;
INSERT INTO `dmtrangthai` VALUES (1,'Đang đặt'),(2,'Đang hoạt động'),(3,'Đã kết thúc'),(4,'Đã hủy');
/*!40000 ALTER TABLE `dmtrangthai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dmvande`
--

DROP TABLE IF EXISTS `dmvande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dmvande` (
  `idvande` int(11) NOT NULL AUTO_INCREMENT,
  `vande` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idvande`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dmvande`
--

LOCK TABLES `dmvande` WRITE;
/*!40000 ALTER TABLE `dmvande` DISABLE KEYS */;
INSERT INTO `dmvande` VALUES (1,'Quên mật khẩu'),(2,'Lỗi mạng'),(3,'Lỗi hệ thống'),(4,'Vấn đề khác');
/*!40000 ALTER TABLE `dmvande` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lienhe`
--

DROP TABLE IF EXISTS `lienhe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lienhe` (
  `idlienhe` int(11) NOT NULL AUTO_INCREMENT,
  `idvande` int(11) DEFAULT NULL,
  `sdt` int(11) DEFAULT NULL,
  `noidung` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ngay` date DEFAULT NULL,
  `gio` time DEFAULT NULL,
  PRIMARY KEY (`idlienhe`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lienhe`
--

LOCK TABLES `lienhe` WRITE;
/*!40000 ALTER TABLE `lienhe` DISABLE KEYS */;
INSERT INTO `lienhe` VALUES (8,2,313131311,'Noi dung','dwadwad','2018-04-30','22:43:45'),(9,1,90909099,'TEST','DWADAWDAD','2018-04-30','22:45:53'),(10,1,123123123,'ddawddadwadwad 213','ddawdwa@gmail.com','2018-05-06','01:48:30');
/*!40000 ALTER TABLE `lienhe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nganh`
--

DROP TABLE IF EXISTS `nganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nganh` (
  `idnganh` int(11) NOT NULL AUTO_INCREMENT,
  `nganh` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idnganh`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nganh`
--

LOCK TABLES `nganh` WRITE;
/*!40000 ALTER TABLE `nganh` DISABLE KEYS */;
INSERT INTO `nganh` VALUES (1,'Công Nghệ Thông Tin'),(2,'Ngôn Ngữ Anh'),(3,'Quản Trị Kinh Doanh'),(4,'Điện tử truyền thông');
/*!40000 ALTER TABLE `nganh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nguoidung` (
  `idnguoidung` int(11) NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) DEFAULT NULL,
  `mssv` int(11) DEFAULT NULL,
  `lop` varchar(45) DEFAULT NULL,
  `idnganh` int(11) DEFAULT NULL,
  `matkhau` varchar(50) DEFAULT NULL,
  `quyen` int(11) DEFAULT NULL,
  PRIMARY KEY (`idnguoidung`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (1,'Nguyễn Minh Nhựt',1407168,'14DTH1',1,'123',1),(2,'Nguyễn Quốc Thái',1406652,'16DTH1',2,'123',1),(3,'Phạm Ái Bảo',1403539,'14DTH2',3,'123',0),(4,'Nguyễn Hải Đăng',1408787,'13DXD1',4,'123456',0);
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phong`
--

DROP TABLE IF EXISTS `phong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phong` (
  `idphong` int(11) NOT NULL AUTO_INCREMENT,
  `iddmphong` int(11) DEFAULT NULL,
  `giobatdau` varchar(45) DEFAULT NULL,
  `gioketthuc` varchar(45) DEFAULT NULL,
  `ngay` date DEFAULT NULL,
  `trangthai` int(11) NOT NULL DEFAULT '1',
  `songuoi` int(11) DEFAULT NULL,
  `mucdich` varchar(255) DEFAULT NULL,
  `nguoidaidien` int(11) DEFAULT NULL,
  PRIMARY KEY (`idphong`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phong`
--

LOCK TABLES `phong` WRITE;
/*!40000 ALTER TABLE `phong` DISABLE KEYS */;
INSERT INTO `phong` VALUES (105,1,'12:11:00','13:11:00','2018-12-20',1,4,'dăđawadư',1);
/*!40000 ALTER TABLE `phong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quyen`
--

DROP TABLE IF EXISTS `quyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quyen` (
  `idquyen` int(11) NOT NULL AUTO_INCREMENT,
  `quyen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idquyen`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quyen`
--

LOCK TABLES `quyen` WRITE;
/*!40000 ALTER TABLE `quyen` DISABLE KEYS */;
INSERT INTO `quyen` VALUES (1,'ADMIN'),(2,'USER');
/*!40000 ALTER TABLE `quyen` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-07  0:17:27
