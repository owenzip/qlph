CREATE DATABASE  IF NOT EXISTS `qlph` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `qlph`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: qlph
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `chitietphong` (
  `idchitietphong` int(11) NOT NULL AUTO_INCREMENT,
  `idphong` int(11) DEFAULT NULL,
  `tennguoidung` varchar(255) DEFAULT NULL,
  `mssv` int(11) DEFAULT NULL,
  `lop` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idchitietphong`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietphong`
--

LOCK TABLES `chitietphong` WRITE;
/*!40000 ALTER TABLE `chitietphong` DISABLE KEYS */;
INSERT INTO `chitietphong` VALUES (1,1,'Tên thành viên',1234567,'Mã lớp'),(2,1,'Tên thành viên',1234567,'Mã lớp'),(3,1,'Tên thành viên',1234567,'Mã lớp'),(4,1,'Tên thành viên',1234567,'Mã lớp'),(9,3,'Tên thành viên',1234567,'Mã lớp'),(10,3,'Tên thành viên',1234567,'Mã lớp'),(11,3,'Tên thành viên',1234567,'Mã lớp'),(12,3,'Tên thành viên',1234567,'Mã lớp'),(13,4,'Tên thành viên',1234567,'Mã lớp'),(14,4,'Tên thành viên',1234567,'Mã lớp'),(15,4,'Tên thành viên',1234567,'Mã lớp'),(16,4,'Tên thành viên',1234567,'Mã lớp'),(17,5,'Tên thành viên',1234567,'Mã lớp'),(18,5,'Tên thành viên',1234567,'Mã lớp'),(19,5,'Tên thành viên',1234567,'Mã lớp'),(20,5,'Tên thành viên',1234567,'Mã lớp'),(21,6,'Tên thành viên',1234567,'Mã lớp'),(22,6,'Tên thành viên',1234567,'Mã lớp'),(23,6,'Tên thành viên',1234567,'Mã lớp'),(24,6,'Tên thành viên',1234567,'Mã lớp'),(25,7,'Nguyễn Quốc Thái',1406652,'14DTH1'),(26,7,'Nguyễn Hải Đăng',1402527,'14DTH2'),(27,7,'Phạm Ái Bảo',1403816,'14DTH3'),(28,7,'Lương Xuân Trường',1356924,'13DTH1'),(29,8,'qwe',123,'123'),(30,8,'qwe',123,'123'),(31,8,'qwe',123,'123'),(32,8,'qwe',123,'123'),(33,9,'ád',1231231,'123'),(34,9,'ád',12312323,'adư'),(35,9,'ăd',312321,'dă'),(36,9,'ădưa',12312321,'dă'),(37,10,'dwadaw',2312,'213'),(38,10,'waw',3123,'123'),(39,10,'wwad',1312,'123'),(40,10,'wadwadawd',312,'123'),(41,11,'dwadwawa',123,'dwadwa'),(42,11,'dwadaww',123,'dwad'),(43,11,'dwadawdaw',123,'wadawd'),(44,11,'dawdwa',123,'wadaw'),(45,12,'zxczxc',123123,'123321'),(46,12,'zxczxc',123123,'123123'),(47,12,'zxczxc',123123,'123123'),(48,12,'zxczxc',123123,'1323123'),(49,13,'zxczxc',123123,'123123'),(50,13,'zxczxc',123123,'123123'),(51,13,'czxczz',123123,'123123'),(52,13,'czxczxxzc',123123,'123123');
/*!40000 ALTER TABLE `chitietphong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dmphong`
--

DROP TABLE IF EXISTS `dmphong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
INSERT INTO `dmphong` VALUES (1,'Học nhóm 1'),(2,'Học nhóm 2'),(3,'Học nhóm 3'),(4,'Học nhóm 4'),(5,'Học nhóm 5'),(6,'Học nhóm 6'),(7,'Học nhóm 7'),(8,'Hội thảo'),(9,'Sau Đại Học'),(10,'KV đọc sách 1'),(11,'KV đọc sách 2'),(12,'KV đọc sách 3'),(13,'KV đọc sách 4'),(14,'KV đọc sách 5');
/*!40000 ALTER TABLE `dmphong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dmtrangthai`
--

DROP TABLE IF EXISTS `dmtrangthai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dmtrangthai` (
  `idtrangthai` int(11) NOT NULL AUTO_INCREMENT,
  `trangthai` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idtrangthai`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dmtrangthai`
--

LOCK TABLES `dmtrangthai` WRITE;
/*!40000 ALTER TABLE `dmtrangthai` DISABLE KEYS */;
INSERT INTO `dmtrangthai` VALUES (1,'Đang đặt'),(2,'Hoạt động'),(3,'Kết thúc'),(4,'Đã hủy'),(5,'Chờ duyệt');
/*!40000 ALTER TABLE `dmtrangthai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dmvande`
--

DROP TABLE IF EXISTS `dmvande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `lienhe` (
  `idlienhe` int(11) NOT NULL AUTO_INCREMENT,
  `idvande` int(11) DEFAULT NULL,
  `sdt` int(11) DEFAULT NULL,
  `noidung` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ngay` date DEFAULT NULL,
  `gio` time DEFAULT NULL,
  `ten` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idlienhe`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lienhe`
--

LOCK TABLES `lienhe` WRITE;
/*!40000 ALTER TABLE `lienhe` DISABLE KEYS */;
INSERT INTO `lienhe` VALUES (10,3,1234567890,'Nội dung','example@email.com','2018-05-06','01:48:30','Tên'),(11,4,1234567890,'Nội dung','example@email.com','2018-06-13','23:36:33','Tên');
/*!40000 ALTER TABLE `lienhe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nganh`
--

DROP TABLE IF EXISTS `nganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `nguoidung` (
  `idnguoidung` int(11) NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) DEFAULT NULL,
  `mssv` int(11) DEFAULT NULL,
  `dienthoai` varchar(12) DEFAULT NULL,
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
INSERT INTO `nguoidung` VALUES (1,'Nguyễn Minh Nhựt',1407168,'0943544667','14DTH1',1,'123',1),(2,'Nguyễn Quốc Thái',1406652,'095546566','16DTH1',2,'123',1),(3,'Phạm Ái Bảo',1403539,'0175444544','14DTH2',3,'123',0),(4,'Nguyễn Hải Đăng',1408787,'0985676453','13DXD1',4,'123456',0);
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phong`
--

DROP TABLE IF EXISTS `phong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `phong` (
  `idphong` int(11) NOT NULL AUTO_INCREMENT,
  `iddmphong` int(11) DEFAULT NULL,
  `giobatdau` varchar(45) DEFAULT NULL,
  `gioketthuc` varchar(45) DEFAULT NULL,
  `ngay` date DEFAULT NULL,
  `trangthai` int(11) NOT NULL DEFAULT '5',
  `songuoi` int(11) DEFAULT NULL,
  `mucdich` varchar(255) DEFAULT NULL,
  `nguoidaidien` int(11) DEFAULT NULL,
  PRIMARY KEY (`idphong`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phong`
--

LOCK TABLES `phong` WRITE;
/*!40000 ALTER TABLE `phong` DISABLE KEYS */;
INSERT INTO `phong` VALUES (1,1,'11:11:00','11:11:00','2018-05-10',2,4,'Học nhóm',1),(3,1,'11:11:00','11:11:00','2018-05-20',3,4,'Học nhóm',2),(4,1,'11:50:00','13:20:00','2018-06-23',1,4,'Học nhóm',1),(5,1,'11:11:00','11:11:00','2018-06-20',1,4,'Học nhóm',1),(6,1,'11:00:00','12:00:00','2018-06-29',1,4,'Học nhóm',1),(7,1,'11:00:00','13:00:00','2018-06-30',2,4,'Học nhóm',1),(8,1,'13:30:00','14:00:00','2018-06-23',1,4,'dawdwadawdw',1),(9,1,'11:00:00','12:00:00','2018-07-31',5,4,'Mục đích sử dụng',1),(10,1,'11:00:00','11:00:00','2018-08-08',5,4,'đwđuawađưaăđawa',1),(11,2,'11:00:00','12:00:00','2018-08-08',5,4,'dwadawdawdawwa',1),(12,1,'10:00:00','10:30:00','2018-07-31',5,4,'đuawawađuawad',1),(13,1,'14:00:00','15:00:00','2018-07-31',5,4,'duawwdưa',1);
/*!40000 ALTER TABLE `phong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quyen`
--

DROP TABLE IF EXISTS `quyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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

-- Dump completed on 2018-08-01  1:28:25
