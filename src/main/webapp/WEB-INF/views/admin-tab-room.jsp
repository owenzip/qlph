<%--
- @DNTU-LIBRARY application
- @author Nhựt Nguyễn
- @since 15/04/2018
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div>
    <input id="trangThai" type="hidden" value="">
    <h5>Danh sách phòng</h5>
    <table id="tblRoomAdmin" class="table table-hover table-responsive" style="width: 100%;cursor: pointer">
        <thead>
        <tr>
            <th>#</th>
            <th><i class="fa fa-columns"></i></th>
            <th><i class="fa fa-address-card"></i></th>
            <th><i class="fa fa-calendar"></i></th>
            <th><i class="fa fa-clock-o"></i></th>
            <th><i class="fa fa-link"></i></th>
            <th><i class="fa fa-user"></i></th>
            <th><i class="fa fa-dot-circle-o"></i></th>
        </tr>
        </thead>
    </table>
</div>
<div class="modal fade" id="modalSelectRoom" tabindex="-1" role="dialog" aria-labelledby="modalSelectRoomAdmin" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-title" id="modalSelectRoomAdmin">Danh sách thành viên</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-9">
                        <table id="tblMemberRoomAdmin" class="table table-hover table-responsive" style="width: 100%">
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
                    <div class="col-md-3">
                        <button id="btnBookedRoomAdmin" style="width: 100%" type="button" class="btn btn-red">Đang đặt &nbsp;&nbsp;<i class="fa fa-bell"></i></button>
                        <button id="btnLiveRoomAdmin" style="width: 100%" type="button" class="btn btn-red">Hoạt động &nbsp;&nbsp;<i class="fa fa-wifi"></i></button>
                        <button id="btnEndRoomAdmin" style="width: 100%" type="button" class="btn btn-red">Kết thúc &nbsp;&nbsp;<i class="fa fa-check-square"></i></button>
                        <button id="btnCanceledRoomAdmin" style="width: 100%" type="button" class="btn btn-red">Hủy phòng&nbsp;&nbsp;<i class="fa fa-ban"></i></button>
                        <button id="btnDeleteRoomAdmin" style="width: 100%" type="button" class="btn btn-red">Xóa phòng&nbsp;&nbsp;<i class="fa fa-trash-o"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
