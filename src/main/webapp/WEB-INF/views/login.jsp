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
<body class="bg-white">
<jsp:include page="nav-menu.jsp"/>
<div class="center-contaniner">
    <div class="parent-container">
        <img style="width: 110px;height: 100px;margin-top: 40%" src="<c:url value="../../resources/img/dntu.jpg"/>" class="img-fluid">
    </div>
</div>
<div class="center-contaniner">
    <div class="parent-container">
        <h2 style="color: #B73030;text-align: center;font-weight: bold;margin-top: 10px">PHẦN MỀM QUẢN LÝ THƯ VIỆN</h2>
        <br/>
    </div>
</div>
<form id="frmLogin">
    <div class="center-contaniner">
        <div class="parent-container">
            <div style="width: 70%;margin-left: 15%">
                <div class="text-center">
                    <div class="form-group">
                        <input id="mssv" name="mssv" type="text" class="form-control" placeholder="Mã sinh viên">
                        <input style="margin-top: 10px" id="matKhau" name="matKhau" type="password" class="form-control" placeholder="Mật khẩu">
                    </div>
                    <a id="btnConfirm" class="btn btn-red" style="width: 226px">ĐĂNG NHẬP &nbsp;&nbsp;<i class="fa fa-sign-in"></i></a>
                    <a id="btnContact" class="btn btn-link" data-toggle="modal" data-target="#contactModal"><b style="color: #B73030">LIÊN HỆ &nbsp; &nbsp;<i class="fa fa-phone"></i></b></a>
                </div>
            </div>
            <jsp:include page="footer.jsp"/>
        </div>
    </div>
</form>

<form id="frmContact">
    <div id="contactModal" class="modal fade" role="dialog">
        <div class="modal-dialog" role="document" style="width: 400px">
            <div class="modal-content">
                <div class="card">
                    <div class="card-body">
                        <label style="color: #B73030"><b>LIÊN HỆ</b></label>
                        <select style="margin-top: 5px" id="selProblem" name="selProblem" type="text" class="form-control">
                            <option value="-1">Chọn vấn đề</option>
                        </select>
                        <input style="margin-top: 5px" id="sdt" name="sdt" type="text" class="form-control" placeholder="Nhập số điện thoại">
                        <input style="margin-top: 5px" id="email" name="email" type="text" class="form-control" placeholder="Nhập email">
                        <textarea style="margin-top: 5px" id="noiDung" name="noiDung" class="form-control" rows="3" placeholder="Tin nhắn văn bản"></textarea>
                    </div>
                    <div class="card-footer" style="margin-top: 10px">
                        <a id="btnSentContact" class="btn btn-red" style="float: right">Gửi liên hệ&nbsp;&nbsp;<i class="fa fa-check"></i></a>
                        <a id="btnCloseSendContact" data-dismiss="modal" class="btn btn-red" style="float: right">Hủy &nbsp;&nbsp;<i class="fa fa-close"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/user.js"/>"></script>
</html>

