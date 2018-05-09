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
<div class="col-md-3">
    <a class="btn btn-red btn-menu"><b>Hộp thư liên hệ<i class="fa fa-envelope float-right"></i></b></a><br/>

    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar1"><b>Quản lý danh mục<i class="fa fa-database float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar1">
        <label class="ver-menu-a">Phòng học</label><br/>
        <label class="ver-menu-a">Vấn đề</label><br/>
        <label class="ver-menu-a">Ngành</label><br/>
        <br/>
    </div>

    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar2"><b>Đăng ký phòng<i class="fa fa-desktop float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar2">
        <a href="" class="ver-menu-a">Trạng thái<br/></a>
        <a href="" class="ver-menu-a">Lịch sử<br/></a>
        <a href="" class="ver-menu-a">Vi phạm<br/></a>
        <br/>
    </div>

    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar4"><b>Thống kê<i class="fa fa-line-chart float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar4">
        <a href="" class="ver-menu-a">Theo khoa<br/></a>
        <a href="" class="ver-menu-a">...<br/></a>
        <br/>
    </div>
</div>
</html>


