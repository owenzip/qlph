<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<nav class="navbar navbar-expand-lg navbar-dark bg-red">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown mega-dropdown active">
                <a class="btn btn-red" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>TRANG CHỦ </b></a>
            </li>
            <li class="nav-item dropdown mega-dropdown active">
                <a class="btn btn-red dropdown-toggle" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>MENU </b></a>
                <div class="dropdown-menu mega-menu row z-depth-1 bg-red" aria-labelledby="navbarDropdownMenuLink2">
                    <div class="row">
                        <div class="col-md-5 col-xl-3 sub-menu mt-5 mb-5">
                            <ol class="list-unstyled ml-4 mr-md-0 mr-4">
                                <li class="sub-title text-uppercase mt-sm"><a class="menu-item-2" href="">Giới thiệu</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="">Tra cứu sách</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="">Sự kiện</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="">Đăng ký phòng học</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="">Liên hệ</a></li>
                            </ol>
                        </div>
                        <div class="col-md-7 col-xl-9">
                            <div class="row pr-4">
                                <div class="col-xl-4 mt-5 mb-4 clearfix d-none d-md-block">
                                    <div class="view overlay hm-white-slight mb-3 z-depth-1">
                                        <img src="<c:url value="../../resources/img/library_03.JPG"/>" class="img-fluid">
                                        <div class="mask flex-center">
                                            <p></p>
                                        </div>
                                    </div>
                                    <h4 class="mb-2"><a class="news-title-2" href="">Giới thiệu trung tâm thư viện</a></h4>
                                    <a class="text-white">Xem giới thiệu</a>
                                </div>
                                <div class="col-xl-4 mt-5 mb-4 clearfix d-none d-xl-block">
                                    <div class="view overlay hm-white-slight mb-3 z-depth-1">
                                        <img src="<c:url value="../../resources/img/library_01.JPG"/>" class="img-fluid">
                                        <div class="mask flex-center">
                                            <p></p>
                                        </div>
                                    </div>
                                    <h4 class="mb-2"><a class="news-title-2" href="">Nội quy thu viện</a></h4>
                                    <a class="white-text">Cập nhật ngày 26/04/2018</a>
                                </div>
                                <div class="col-xl-4 mt-5 mb-4 clearfix d-none d-xl-block">
                                    <div class="view overlay hm-white-slight mb-3 z-depth-1">
                                        <img style="height: 203px" src="<c:url value="../../resources/img/library_02.JPG"/>" class="img-fluid">
                                        <div class="mask flex-center">
                                            <p></p>
                                        </div>
                                    </div>
                                    <h4 class="mb-2"><a class="news-title-2" href="">Thời gian mở cửa</a></h4>
                                    <a class="white-text">Từ 07:00 đến 20:00 hằng ngày</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
</html>


