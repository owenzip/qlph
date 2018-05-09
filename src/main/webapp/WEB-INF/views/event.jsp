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
    <title>SỰ KIỆN</title>
</head>
<body class="bg-gray">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row">
        <div class="col-md-12 text-center">
            <h5 id="homePageTitle" style="padding-bottom: 17px;margin-top: 2px">Các sự kiện đã đang và sắp diễn ra tại thư viện được hiện ở đây</h5>
            <p>*Hiện theo từng card</p>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/room.js"/>"></script>
</html>

