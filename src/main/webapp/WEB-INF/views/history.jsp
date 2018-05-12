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
    <title>LỊCH SỬ ĐẶT PHÒNG</title>
</head>
<body class="bg-white">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row form-group">
        <div class="col-md-12 text-center">
            <h4 style="padding-bottom: 30px"><b>Lịch sử đặt phòng của bạn</b></h4>
            <table id="tblRoomById" class="table table-hover table-responsive" style="width: 100%">
                <thead>
                <tr>
                    <th>#</th>
                    <th><i class="fa fa-columns"></i>&nbsp;&nbsp;Tên phòng</th>
                    <th><i class="fa fa-calendar"></i>&nbsp;&nbsp;Ngày</th>
                    <th><i class="fa fa-clock-o"></i>&nbsp;&nbsp;Giờ bắt đầu</th>
                    <th><i class="fa fa-clock-o"></i>&nbsp;&nbsp;Giờ kết thúc</th>
                    <th><i class="fa fa-link"></i>&nbsp;&nbsp;Trạng thái</th>
                    <th><i class="fa fa-user"></i>&nbsp;&nbsp;Số người</th>
                    <th><i class="fa fa-user"></i>&nbsp;&nbsp;Mục đích</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
<div class="modal fade" id="modalSelectRoom" tabindex="-1" role="dialog" aria-labelledby="modalSelectRoomHistory" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-title" id="modalSelectRoomHistory">Danh sách thành viên</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                        <table id="tblMemberHistory" class="table table-hover table-responsive" style="width: 100%">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th><i class="fa fa-address-card"></i>&nbsp;&nbsp;Tên thành viên</th>
                                <th><i class="fa fa-black-tie"></i>&nbsp;&nbsp;Lớp</th>
                                <th><i class="fa fa-paperclip"></i>&nbsp;&nbsp;MSSV</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button id="btnDeleteRoom" type="button" class="btn btn-red" data-dismiss="modal">Hủy phòng &nbsp;&nbsp;<i class="fa fa-trash-o"></i></button>
                <button type="button" class="btn btn-red" data-dismiss="modal">Đóng &nbsp;&nbsp;<i class="fa fa-close"></i></button>
            </div>
        </div>
    </div>
</div>
</body>
</html>

