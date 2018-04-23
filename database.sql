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
  `idtaikhoan` int(11) DEFAULT NULL,
  PRIMARY KEY (`idnguoidung`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (1,'Nguyễn Minh Nhựt',1407168,'14DTH1',1,2),(2,'Adminitrator',0,'0',0,1),(3,'Nguyễn Quốc Thái',1406652,'16DTH1',2,2),(4,'Phạm Ái Bảo',1403539,'14DTH2',3,2),(5,'Nguyễn Hải Đăng',1408787,'13DXD1',4,2);
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhom`
--

DROP TABLE IF EXISTS `nhom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nhom` (
  `idnhom` int(11) NOT NULL,
  `idthongtinphong` int(11) DEFAULT NULL,
  `idnguoidung` int(11) DEFAULT NULL,
  PRIMARY KEY (`idnhom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhom`
--

LOCK TABLES `nhom` WRITE;
/*!40000 ALTER TABLE `nhom` DISABLE KEYS */;
/*!40000 ALTER TABLE `nhom` ENABLE KEYS */;
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
  `trangthai` varchar(255) DEFAULT NULL,
  `songuoi` int(11) DEFAULT NULL,
  `idthongtinphong` int(11) DEFAULT NULL,
  PRIMARY KEY (`idphong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phong`
--

LOCK TABLES `phong` WRITE;
/*!40000 ALTER TABLE `phong` DISABLE KEYS */;
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

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taikhoan` (
  `idtaikhoan` int(11) NOT NULL AUTO_INCREMENT,
  `tentaikhoan` varchar(45) DEFAULT NULL,
  `matkhau` varchar(45) DEFAULT NULL,
  `idquyen` int(11) DEFAULT NULL,
  PRIMARY KEY (`idtaikhoan`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,'admin','123456',1),(2,'nhutnguyen','123456',2),(3,'user','123456',2);
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thongtinphong`
--

DROP TABLE IF EXISTS `thongtinphong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thongtinphong` (
  `idthongtinphong` int(11) NOT NULL AUTO_INCREMENT,
  `nguoidaidien` int(11) DEFAULT NULL,
  `mucdich` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idthongtinphong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thongtinphong`
--

LOCK TABLES `thongtinphong` WRITE;
/*!40000 ALTER TABLE `thongtinphong` DISABLE KEYS */;
/*!40000 ALTER TABLE `thongtinphong` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-24  0:14:54
