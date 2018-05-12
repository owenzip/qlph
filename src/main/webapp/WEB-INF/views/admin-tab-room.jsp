<%--
- @DNTU-LIBRARY application
- @author Nhựt Nguyễn
- @since 15/04/2018
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div>
    <input id="trangThai" type="hidden" value="">
    <h5>Danh sách phòng</h5>
    <table id="tblRoomAdmin" class="table table-hover table-responsive" style="width: 100%">
        <thead>
        <tr>
            <th>#</th>
            <th><i class="fa fa-columns"></i>&nbsp;&nbsp;Tên phòng</th>
            <th><i class="fa fa-address-card"></i>&nbsp;&nbsp;Người đăng ký</th>
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
                    <div class="col-md-12">
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
                </div>
            </div>
            <div class="modal-footer">
                <button id="btnDeleteRoomAdmin" type="button" class="btn btn-red" data-dismiss="modal">Xóa phòng&nbsp;&nbsp;<i class="fa fa-trash-o"></i></button>
                <button id="btnBookedRoomAdmin" type="button" class="btn btn-red" data-dismiss="modal">Đang đặt &nbsp;&nbsp;<i class="fa fa-bell"></i></button>
                <button id="btnLiveRoomAdmin" type="button" class="btn btn-red" data-dismiss="modal">Đang hoạt động &nbsp;&nbsp;<i class="fa fa-wifi"></i></button>
                <button id="btnEndRoomAdmin" type="button" class="btn btn-red" data-dismiss="modal">Đã kết thúc &nbsp;&nbsp;<i class="fa fa-check-square"></i></button>
                <button id="btnCanceledRoomAdmin" type="button" class="btn btn-red" data-dismiss="modal">Hủy phòng &nbsp;&nbsp;<i class="fa fa-ban"></i></button>
            </div>
        </div>
    </div>
</div>
