<%--
- @DNTU-LIBRARY application
- @author Nhựt Nguyễn
- @since 15/04/2018
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div>
    <input id="trangThai" type="hidden">
    <h5>Danh sách phòng</h5>
    <table class="table table-hover" style="width: 100%">
        <thead>
        <tr>
            <th class="text-center font-weight-bold">#</th>
            <th class="font-weight-bold">Tên phòng</th>
            <th class="font-weight-bold">Người đại diện</th>
            <th class="text-center font-weight-bold">Điện thoại</th>
            <th class="text-center font-weight-bold">Ngày</th>
            <th class="text-center font-weight-bold">Giờ</th>
            <th class="text-center font-weight-bold">Số người</th>
            <th class="font-weight-bold">Mục đích</th>
            <th class="font-weight-bold">Trạng thái</th>
        </tr>
        </thead>
        <tbody id="tblRoomAdmin" style="cursor: pointer">

        </tbody>
    </table>
</div>
<div class="modal fade" id="modalSelectRoom" tabindex="-1" role="dialog" aria-labelledby="modalSelectRoomAdmin" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <input id="idPhong" type="hidden">
                <h5 class="modal-title text-title" id="modalSelectRoomAdmin">Danh sách thành viên</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-9">
                        <table class="table table-hover" style="width: 100%">
                            <thead>
                            <tr>
                                <th class="text-center font-weight-bold">#</th>
                                <th class="font-weight-bold">Tên thành viên</th>
                                <th class="font-weight-bold">Lớp</th>
                                <th class="text-center font-weight-bold">MSSV</th>
                            </tr>
                            </thead>
                            <tbody id="tblMemberRoomAdmin">

                            </tbody>
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
