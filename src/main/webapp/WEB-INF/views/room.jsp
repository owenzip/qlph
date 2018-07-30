<%--
- @DNTU-LIBRARY application
- @author Nhựt Nguyễn
- @since 15/04/2018
--%>
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
<div style="padding: 5% 1% 5% 1%">
    <div class="row">
        <jsp:include page="room-menu.jsp"/>
        <div id="divTblRoom" class="col-md-10" style="padding-left: 30px; padding-right: 30px">
            <input type="hidden" id="getIdDmPhong" value="1">
            <h5 id="homePageTitle" style="padding-bottom: 17px;margin-top: 2px">&nbsp;Lịch đăng ký phòng học nhóm 1</h5>
            <table id="tblRoom" class="table table-hover" style="width: 100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Người đại diện</th>
                        <th>Ngày</th>
                        <th>Giờ</th>
                        <th>Số người</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/room.js"/>"></script>
</html>

