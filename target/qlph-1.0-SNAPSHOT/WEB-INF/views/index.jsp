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
<div class="grandParentContaniner">
    <div class="parentContainer">
        <h3 class="text-center">HỆ THỐNG</h3>
        <h3 class="text-center">QUẢN LÝ THƯ VIỆN</h3>
        <form>
            <div class="card text-center">
                <div class="card-header">
                    <h4 class="text-center">Đăng nhập</h4>
                </div>
                <div class="card-body">
                    <input type="text" id="tenDangNhap" class="form-control">
                    <input type="password" id="matKhau" class="form-control">
                    <div class="text-center mt-4">
                        <button class="btn btn-indigo" type="submit">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/login.js"/>"></script>
</html>

