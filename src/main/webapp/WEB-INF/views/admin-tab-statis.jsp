<%--
- @DNTU-LIBRARY application
- @author Nhựt Nguyễn
- @since 15/04/2018
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div class="col-md-12">
    <ul class="nav md-pills nav-justified pills-secondary">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#pane1" role="tab"><i class="fa fa-calendar"></i>&nbsp;
                THEO NGÀY</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#pane2" role="tab"><i class="fa fa-desktop"></i>&nbsp; THEO PHÒNG</a>
        </li>
    </ul>

    <div class="tab-content" style="padding-left: 30px; padding-right: 30px; margin-top: 30px">
        <div class="tab-pane fade in show active" id="pane1" role="tabpanel">
            <hr>
            <div class="row">
                <div class="col-md-2">
                    <label><b>Ngày bắt đầu</b></label>
                    <input id="dateStartDate" name="ngay" type="text" class="clr form-control datepicker"
                           style="padding: 6px 0px 6px 13px" placeholder="Chọn ngày">
                </div>
                <div class="col-md-2">
                    <label><b>Ngày kết thúc</b></label>
                    <input id="dateEndDate" name="ngay" type="text" class="clr form-control datepicker"
                           style="padding: 6px 0px 6px 13px" placeholder="Chọn ngày">
                </div>
                <button id="btnFilterDate" onclick="onClickFilterDate()" class="btn btn-red" style="margin-top: 31px"><i
                        class="fa fa-filter"></i>&nbsp; Bộ lọc
                </button>
                <button onclick="onClickExportExcelToday()" class="btn btn-red" style="margin-top: 31px"><i
                        class="fa fa-download"></i>&nbsp; Xuất excel
                </button>
            </div>
            <div>
                <hr>
                <p>Số lần đăng ký phòng : <b id="roomRegisted">0</b></p>
                <hr>
                <p>Số phòng đang chờ duyệt : <b id="roomWaited">0</b></p>
                <hr>
                <p>Số phòng đã kết thúc : <b id="roomFinished">0</b></p>
                <hr>
                <p>Số phòng đang hoạt động : <b id="roomActive">0</b></p>
                <hr>
                <p>Số phòng đã hủy : <b id="roomCanceled">0</b></p>
                <hr>
                <p>Phòng được sử dụng nhiều nhất: <b id="roomPopular">0</b></p>
                <hr>
                <p>Tổng số người sử dụng : <b id="userUsings">0</b></p>
                <hr>
                <table id="tblCloneReportToday" style="display: none">
                    <thead>
                    <tr>
                        <th colspan="7">BÁO CÁO TỔNG THỂ TÌNH HÌNH ĐẶT PHÒNG</th>
                    </tr>
                    <tr></tr>
                    <tr>
                        <th>Từ ngày :</th>
                        <th class="text-center font-weight-bold" id="reportRoomStartDay"></th>
                        <th></th>
                        <th>Đến ngày</th>
                        <th id="reportRoomEnDay"></th>
                        <th colspan="2"></th>
                    </tr>
                    <tr>
                        <th>Số lần đăng ký phòng</th>
                        <th>Số phòng đang chờ duyệt</th>
                        <th>Số phòng đã kết thúc</th>
                        <th>Số phòng đang hoạt động</th>
                        <th>Số phòng đã hủy</th>
                        <th>Tổng số người sử dụng</th>
                        <th>Số phòng sử dụng nhiều</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th id="tblRoomRegisted"></th>
                        <th id="tblRoomWaited"></th>
                        <th id="tblRoomFinished"></th>
                        <th id="tblRoomActive"></th>
                        <th id="tblRoomCanceled"></th>
                        <th id="tblUserUsings"></th>
                        <th id="tblRoomPopular"></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane fade" id="pane2" role="tabpanel">
            <hr>
            <div class="row">
                <div class="col-md-4">
                    <label><b>Chọn phòng</b></label>
                    <select id="selRoom" class="form-control"></select>
                </div>
                <div class="col-md-2">
                    <label><b>Ngày bắt đầu</b></label>
                    <input id="dateStartRoom" name="ngay" type="text" class="clr form-control datepicker"
                           style="padding: 6px 0px 6px 13px" placeholder="Chọn ngày">
                </div>
                <div class="col-md-2">
                    <label><b>Ngày kết thúc</b></label>
                    <input id="dateEndRoom" name="ngay" type="text" class="clr form-control datepicker"
                           style="padding: 6px 0px 6px 13px" placeholder="Chọn ngày">
                </div>
                <div class="col-md-4">
                    <button onclick="onClickFilterRoom()" class="btn btn-red" style="margin-top: 31.5px"><i
                            class="fa fa-filter"></i>&nbsp; Bộ lọc
                    </button>
                    <button id="btnExportExcelRoom" class="btn btn-red" style="margin-top: 31.5px"><i
                            class="fa fa-download"></i>&nbsp; Xuất Excel
                    </button>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12" style="padding-top: 20px">
                    <label><b>Thông tin chung</b></label>
                    <table class="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <td class="font-weight-bold" style="width: 40%">Tên phòng</td>
                            <td class="text-center font-weight-bold" style="width: 15%">Lần đăng ký</td>
                            <td class="text-center font-weight-bold" style="width: 15%">Lần sử dụng</td>
                            <td class="text-center font-weight-bold" style="width: 15%">Lần hủy phòng</td>
                            <td class="text-center font-weight-bold" style="width: 15%">Người sử dụng</td>
                        </tr>
                        </thead>
                        <tbody id="bodyReportRoom">
                        <tr>
                            <td class="text-center" colspan="5">Vui lòng chọn bộ lọc</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12" style="padding-top: 20px">
                    <label><b>Thông tin chi tiết</b></label>
                    <table class="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <td class="text-center font-weight-bold" style="width: 5%">#</td>
                            <td class="text-center font-weight-bold" style="width: 30%">Tên phòng</td>
                            <td class="text-center font-weight-bold" style="width: 15%">Ngày</td>
                            <td class="text-center font-weight-bold" style="width: 10%">Giờ bắt đầu</td>
                            <td class="text-center font-weight-bold" style="width: 10%">Giờ kết thúc</td>
                            <td class="text-center font-weight-bold" style="width: 20%">Trạng thái</td>
                            <td class="text-center font-weight-bold" style="width: 10%">Số người</td>
                        </tr>
                        </thead>
                        <tbody id="bodyReportRoomDetail">
                        <tr>
                            <td class="text-center" colspan="7">Vui lòng chọn bộ lọc</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <table id="tblExportExcelByRoom" style="display: none">
                <thead id="headTblExportExcelByRoom">
                <tr>
                    <th colspan="7">BÁO CÁO CHI TIẾT TÌNH TRẠNG ĐẶT PHÒNG</th>
                </tr>
                <tr></tr>
                <tr>
                    <th>Tên phòng :</th>
                    <th id="nameExportRoom"></th>
                    <th colspan="5"></th>
                </tr>
                <tr>
                    <th>Từ ngày :</th>
                    <th id="dayStartExportByRoom"></th>
                    <th>Đến ngày :</th>
                    <th id="dayEndExportByRoom"></th>
                    <th colspan="3"></th>
                </tr>
                <tr></tr>
                <tr><td colspan="7">Thông tin chung</td></tr>
                <tr>
                    <th>Tên phòng</th>
                    <th>Số lần đăng ký</th>
                    <th>Số lần sử dụng</th>
                    <th>Số lần hủy phòng</th>
                    <th>Số người sử dụng</th>
                    <th colspan="2"></th>
                </tr>
                </thead>
                <tbody id="bodyTblExportExcelByRoom">
                    <tr><td colspan="7">Thông tin chi tiết</td></tr>
                    <tr>
                        <td>#</td>
                        <td>Tên phòng</td>
                        <td>Ngày</td>
                        <td>Giờ bắt đầu</td>
                        <td>Giờ kết thúc</td>
                        <td>Trạng thái</td>
                        <td>Số người</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</div>
