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
<div class="col-md-2 text-center">
    <a class="btnTabMail btn btn-red btn-menu"><b>Hộp thư liên hệ<i class="fa fa-envelope float-right"></i></b></a><br/>
    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar2"><b>Quản lý phòng<i class="fa fa-desktop float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar2">
        <label id="btnAllRoom" style="cursor: pointer" class="btnTabRoom ver-menu-a">Xem tất cả</label><br/>
        <label id="btnWaitRoom" style="cursor: pointer" class="btnTabRoom ver-menu-a">Đang chờ duyệt</label><br/>
        <label id="btnBookedRoom" style="cursor: pointer" class="btnTabRoom ver-menu-a">Phòng đang đặt</label><br/>
        <label id="btnCancelledRoom" style="cursor: pointer" class="btnTabRoom ver-menu-a">Phòng đã hủy</label><br/>
        <label id="btnLiveRoom" style="cursor: pointer" class="btnTabRoom ver-menu-a">Đang hoạt động</label><br/>
        <label id="btnEndRoom" style="cursor: pointer" class="btnTabRoom ver-menu-a">Đã kết thúc</label><br/>
        <br/>
    </div>
    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar4"><b>Thống kê<i class="fa fa-line-chart float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar4">
        <label class="btnTabStatis ver-menu-a">Theo khoa</label><br/>
        <br/>
    </div>
</div>
</html>


