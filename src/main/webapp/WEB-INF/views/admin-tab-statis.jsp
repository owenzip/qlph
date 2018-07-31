<%--
- @DNTU-LIBRARY application
- @author Nhựt Nguyễn
- @since 15/04/2018
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="col-md-12">
    <ul class="nav md-pills nav-justified pills-secondary">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#pane1" role="tab"><i class="fa fa-calendar"></i>&nbsp;HÔM NAY</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#pane2" role="tab"><i class="fa fa-desktop"></i>&nbsp; THEO PHÒNG</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#pane3" role="tab"><i class="fa fa-university"></i>&nbsp; THEO KHOA</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#pane4" role="tab"><i class="fa fa-users"></i>&nbsp; THEO NGƯỜI DÙNG</a>
        </li>
    </ul>

    <div class="tab-content" style="padding-left: 30px; padding-right: 30px; margin-top: 30px">
        <div class="tab-pane fade in show active" id="pane1" role="tabpanel">
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
            <p>Phòng được sử dụng nhiều : <b id="roomPopular">0</b></p>
            <hr>
            <p>Tổng số người sử dụng : <b id="userUsings">0</b></p>
            <hr>
        </div>
        <div class="tab-pane fade" id="pane2" role="tabpanel">
            tab2
        </div>
        <div class="tab-pane fade" id="pane3" role="tabpanel">
            tab3
        </div>
        <div class="tab-pane fade" id="pane4" role="tabpanel">
            tab4
        </div>
    </div>
</div>
