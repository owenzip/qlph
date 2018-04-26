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
<div class="center-contaniner">
    <div class="parent-container">
        <div class="card" style="width: 86%;margin-left: 7%">
            <div class="card-body">
                <label style="color: #B73030"><b>ĐĂNG NHẬP</b></label>
                <div class="form-group">
                    <input id="mssv" name="mssv" type="text" class="form-control" placeholder="MSSV" value="admin">
                    <input style="margin-top: 3px" id="matKhau" name="matKhau" type="password" class="form-control" placeholder="Mật khẩu" value="123456">
                </div>
                <div class="row">
                    <div class="col-md-12 form-inline">
                        <div class="text-center col-md-5">
                            <a id="btnContact" style="width: 113%" class="btn btn-link" data-toggle="modal" data-target="#contactModal"><b style="color: #B73030">LIÊN HỆ</b></a>
                        </div>
                        <div class="text-center col-md-7">
                            <a id="btnConfirm"  class="btn btn-red">ĐĂNG NHẬP</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p style="text-align: center;margin-top: 50px;color: #B73030" href="https://www.facebook.com/NhukAlleo">Bản quyền thuộc về nhóm &nbsp&nbsp<a class="badge badge-light">#DEV-14 DNTU</a>&nbsp&nbsp năm 2018</p>
    </div>
</div>
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
                    <textarea style="margin-top: 5px" id="noiDung" name="noiDung" class="form-control" rows="3" placeholder="Tin nhắn văn bản"></textarea>
                    <div style="margin-top: 10px">
                        <a data-dismiss="modal" class="btn btn-red" style="float: right">Hủy</a>
                        <a id="btnSentContact" class="btn btn-red" style="float: right">Gửi liên hệ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/login.js"/>"></script>
</html>

