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
        <jsp:include page="room-menu.jsp"/>
        <div class="col-md-9">
            <h5 id="homePageTitle" style="padding-bottom: 17px;margin-top: 2px">&nbsp;Lịch đăng ký phòng học nhóm 1</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th><i class="fa fa-calendar"></i>&nbsp;&nbsp;Ngày</th>
                        <th><i class="fa fa-clock-o"></i>&nbsp;&nbsp;Thời gian</th>
                        <th><i class="fa fa-link"></i>&nbsp;&nbsp;Trạng thái</th>
                        <th><i class="fa fa-user"></i>&nbsp;&nbsp;Số người</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>20/20/2020</td>
                        <td>13:30 - 15:00</td>
                        <td>Đang hoạt động</td>
                        <td>8/10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/room.js"/>"></script>
</html>

