<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <jsp:include page="resource.jsp"/>
    <title>KHÔNG CÓ QUYỀN TRUY CẬP</title>
</head>
<body class="bg-gray">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <h1 style="padding-bottom: 17px;margin-top: 2px">Bạn không có quyền truy cập trang này</h1>
    <a href="<c:url value="/index.do"/>" class="btn btn-red">Quay lại trang chủ &nbsp;&nbsp;<i class="fa fa-home"></i></a>
</div>
</body>
</html>

