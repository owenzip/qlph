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
<div class='container'>
    <div class='container_inner'>
        <h1>Quản Lý Thư Viện</h1>
        <h2>Manager your<a href='http://google.com'>Library</a></h2>
        <br>
        <fieldset>
            <div class='kickass_field'>
                <input maxlength='30' required='required'>
                <lable>Tên đăng nhập<span>hoặc mã số sinh viên của bạn</span></lable>
            </div>
            <div class='kickass_field'>
                <input maxlength='30' pattern='.{6,}' required='required' type='password'>
                <lable>Mật khẩu<span>mật khẩu của bạn</span></lable>
            </div>
            <button href="/qltv/homepage.do">Sign In</button></a>

        </fieldset>
        </br>
        <div class='love'>
            <span>Design by <a href='https://twitter.com/rasheedbhutto' target='_blank'> Sinh viên Khoa CNTT-DNTU </a></span>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/login.js"/>"></script>

</html>

