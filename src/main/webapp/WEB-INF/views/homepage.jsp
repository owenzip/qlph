<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <jsp:include page="resource.jsp"/>
    <title>PHẦN MỀM QUẢN LÝ THƯ VIỆN</title>
</head>
<body class="bg-gray">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row">
        <jsp:include page="ver-menu.jsp"/>
        <div class="col-md-9">
            <h5 id="homePageTitle" style="padding-bottom: 17px;margin-top: 2px">&nbsp;</h5>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-rss"></i>&nbsp;&nbsp; ĐANG HOẠT ĐỘNG</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>
            <div class="row div-info-room">
                <div class="col-8 col-md-1">
                    <a><b>1</b></a>
                </div>
                <div class="col-8 col-md-6">
                    <a><b><i class="fa fa-calendar"></i>&nbsp;&nbsp;20/02/2018</b></a>&nbsp;&nbsp;&nbsp;
                    <a><b><i class="fa fa-clock-o"></i>&nbsp;&nbsp;13:30</b></a>
                    <a><b>-15:30</b></a>
                </div>
                <div class="col-8 col-md-3">
                    <a><b><i class="fa fa-lock"></i>&nbsp;&nbsp; ĐÃ ĐĂNG KÝ</b></a>
                </div>
                <div class="col-8 col-md-2">
                    <a><b><i class="fa fa-user"></i>&nbsp;&nbsp;8/10</b></a>
                </div>
            </div>

        </div>
    </div>
</div>
</body>
<jsp:include page="footer.jsp"/>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/homepage.js"/>"></script>
</html>

