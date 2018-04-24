<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <jsp:include page="resource.jsp"/>
    <title>ĐĂNG NHẬP</title>
</head>
<body class="bg-gray">
<div class="center-contaniner">
    <div class="parent-container">
        <h2 style="color: #1686d9;text-align: center;margin-top: 25%"><b>PHẦN MỀM QUẢN LÝ THƯ VIỆN</b></h2>
        <br/>
    </div>
</div>
<div class="center-contaniner">
    <div class="parent-container">
        <div class="card">
            <div class="card-title bg-login card-title-shadow">
                <h4 style="color: white;margin-top: 20px;text-align: center"><b>ĐĂNG NHẬP</b></h4>
            </div>
            <div class="card-body">
                <input id="tenDangNhap" name="tenDangNhap" type="text" class="form-control" placeholder="MSSV" value="admin">
                <input style="margin-top: 3px" id="matKhau" name="matKhau" type="password" class="form-control" placeholder="Mật khẩu" value="123456">
                <div class="text-center" style="margin-top: 20px">
                    <a id="btnConfirm" href="<c:url value='/qltv/homepage.do'/>" class="btn btn-primary">XÁC NHẬN</a>
                </div>
                <div class="text-center">
                    <a id="btnContact" class="btn btn-link" data-toggle="modal" data-target="#contactModal">LIÊN HỆ VỚI QUẢN TRỊ</a>
                </div>
            </div>
        </div>
        <p style="text-align: center;margin-top: 50px;color: #828282" href="https://www.facebook.com/NhukAlleo">Bản quyền thuộc về nhóm &nbsp&nbsp<a class="badge badge-light"> DEV-14 DNTU</a>&nbsp&nbsp năm 2018</p>
    </div>
</div>
<div id="contactModal" class="modal fade" role="dialog">
    <div class="modal-dialog text-center" role="document" style="width: 400px">
        <div class="modal-content">
            <div class="card">
                <div class="card-title bg-login card-title-shadow">
                    <h4 style="color: white;margin-top: 20px;text-align: center"><b>LIÊN HỆ</b></h4>
                </div>
                <div class="card-body">
                    <select id="selAdminName" name="selAdminName" type="text" class="form-control">
                        <option value="-1">Chọn quản trị viên</option>
                    </select>
                    <select style="margin-top: 5px" id="selProblem" name="selProblem" type="text" class="form-control">
                        <option value="-1">Chọn vấn đề</option>
                    </select>
                    <input style="margin-top: 5px" id="sdt" name="sdt" type="text" class="form-control" placeholder="Số điện thoại">
                    <textarea style="margin-top: 5px" id="noiDung" name="noiDung" class="form-control" rows="3" placeholder="Tin nhắn văn bản"></textarea>
                    <div style="margin-top: 10px">
                        <a data-dismiss="modal" class="btn btn-primary" style="float: right">Hủy</a>
                        <a id="btnSentContact" class="btn btn-primary" style="float: right">Gửi liên hệ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/login.js"/>"></script>
</html>

