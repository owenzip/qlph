<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <title>$Title$</title>
</head>
<body>
LOGIN
<p class="h5 text-center py-4">ĐĂNG NHẬP</p>
<label>Tài khoản</label>
<input id="tenDangNhap" name="tenDangNhap" type="text" placeholder="Nhập tài khoản" value="admin">
<br>
<label>Mật khẩu</label>
<input id="matKhau" name="matKhau" type="password" placeholder="Nhập mật khẩu" value="admin">
<div class="text-center" style="margin-top: 20px">
    <button id="btnConfirm" class="btn btn-mdb-color">XÁC NHẬN</button>
</div>
</body>
<script type="text/javascript" src="<c:url value="/resources/js/others/jquery-3.3.1.min.js"/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/forms/login.js'/>"></script>
</html>

