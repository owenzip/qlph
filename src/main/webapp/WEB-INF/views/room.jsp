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
<body>
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row">
        <jsp:include page="room-menu.jsp"/>
        <div class="col-md-9">
            <input type="hidden" id="getIdDmPhong" value="1">
            <h5 id="homePageTitle" style="padding-bottom: 17px;margin-top: 2px">&nbsp;Lịch đăng ký phòng học nhóm 1</h5>
            <table id="tblRoom" class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th><i class="fa fa-address-card"></i>&nbsp;&nbsp;Người đăng ký</th>
                        <th><i class="fa fa-calendar"></i>&nbsp;&nbsp;Ngày</th>
                        <th><i class="fa fa-clock-o"></i>&nbsp;&nbsp;Giờ bắt đầu</th>
                        <th><i class="fa fa-clock-o"></i>&nbsp;&nbsp;Giờ kết thúc</th>
                        <th><i class="fa fa-link"></i>&nbsp;&nbsp;Trạng thái</th>
                        <th><i class="fa fa-user"></i>&nbsp;&nbsp;Số người</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/room.js"/>"></script>
</html>

