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
    <title>HỆ THỐNG</title>
</head>
<body class="bg-gray">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row">
        <jsp:include page="admin-menu.jsp"/>
        <div class="col-md-9">
            <h5 style="padding-bottom: 17px;margin-top: 2px">Trang admin : Quản lý các danh mục, quản lý và xem lịch sử đặt phòng, thống kê các kiểu</h5>
        </div>
    </div>
</div>
</body>
</html>

