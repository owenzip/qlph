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
    <title>GIỚI THIỆU</title>
</head>
<body class="bg-gray">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row">
        <jsp:include page="search-menu.jsp"/>
        <div class="col-md-9">
            <h5 id="homePageTitle" style="padding-bottom: 17px;margin-top: 2px">Trang cho sinh viên tra cứu download sách của môn mình học</h5>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/room.js"/>"></script>
</html>

