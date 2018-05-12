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
<body class="bg-white">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row">
        <jsp:include page="admin-menu.jsp"/>
        <div class="col-md-9">
            <from id="formTabMail"><jsp:include page="admin-tab-mail.jsp"/></from>
            <from id="formTabCategory"><jsp:include page="admin-tab-category.jsp"/></from>
            <from id="formTabRoom"><jsp:include page="admin-tab-room.jsp"/></from>
            <from id="formTabStatis"><jsp:include page="admin-tab-statis.jsp"/></from>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/system.js"/>"></script>
</html>

