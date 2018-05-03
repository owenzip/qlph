<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<nav class="navbar navbar-expand-lg navbar-dark bg-red">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown mega-dropdown">
                <a class="btn btn-red" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bars"></i></a>
                <div class="dropdown-menu mega-menu row z-depth-1 bg-red" aria-labelledby="navbarDropdownMenuLink2">
                    <div class="row">
                        <div class="col-md-5 col-xl-3 sub-menu mt-5 mb-5">
                            <ol class="list-unstyled ml-4 mr-md-0 mr-4">
                                <li class="sub-title text-uppercase mt-sm"><a class="menu-item-2" href="<c:url value="/index.do"/>">Giới thiệu</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="<c:url value="/search.do"/>">Tra cứu sách</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="<c:url value="/event.do"/>">Sự kiện</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="<c:url value="/room.do"/>">Đăng ký phòng học</a></li>
                                <li class="sub-title text-uppercase"><a class="menu-item-2" href="<c:url value="/admin.do"/>">Hệ thống</a></li>
                                <li><a style="color: white" href="https://www.facebook.com/NhukAlleo"><i class="fa fa-copyright"></i>&nbsp;&nbsp;<b>DEV-K14</b> trường <b>DNTU</b> năm 2018</a></li>
                            </ol>
                        </div>
                        <div class="col-md-7 col-xl-9">
                            <div class="row pr-4">
                                <div class="col-xl-4 mt-5 mb-4 clearfix d-none d-md-block">
                                    <div class="view overlay hm-white-slight mb-3 z-depth-1">
                                        <img src="<c:url value="../../resources/img/library_03.JPG"/>" class="img-fluid">
                                        <div class="mask flex-center"><p></p></div>
                                    </div>
                                    <h4 class="mb-2"><a class="news-title-2" href="<c:url value="/index.do"/>">Giới thiệu trung tâm thư viện</a></h4>
                                    <a class="text-white">Xem giới thiệu</a>
                                </div>
                                <div class="col-xl-4 mt-5 mb-4 clearfix d-none d-xl-block">
                                    <div class="view overlay hm-white-slight mb-3 z-depth-1">
                                        <img src="<c:url value="../../resources/img/library_01.JPG"/>" class="img-fluid">
                                        <div class="mask flex-center"><p></p></div>
                                    </div>
                                    <h4 class="mb-2"><a class="news-title-2" href="<c:url value="/index.do"/>">Nội quy thư viện</a></h4>
                                    <a class="white-text">Cập nhật ngày 26/04/2018</a>
                                </div>
                                <div class="col-xl-4 mt-5 mb-4 clearfix d-none d-xl-block">
                                    <div class="view overlay hm-white-slight mb-3 z-depth-1">
                                        <img src="<c:url value="../../resources/img/library_01.JPG"/>" class="img-fluid">
                                        <div class="mask flex-center"><p></p></div>
                                    </div>
                                    <h4 class="mb-2"><a class="news-title-2" href="<c:url value="/index.do"/>">Thời gian mở cửa</a></h4>
                                    <a class="white-text">Từ 07:00 đến 20:00 hằng ngày</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="<c:url value="/index.do"/>" class="btn btn-red"><b>TRANG CHỦ &nbsp;&nbsp;<i class="fa fa-home"></i></b></a></li>
        </ul>
        <input id="sessionUsername" type="hidden" value="<%=session.getAttribute("TENNGUOIDUNG")%>">
        <input id="sessionUserId" type="hidden" value="<%=session.getAttribute("IDNGUOIDUNG")%>">
        <div id="navLogin">
            <ul class="navbar-nav">
                <a id="btnLogin" class="btn btn-red" href="<c:url value="/login.do"/>">Đăng nhập &nbsp;&nbsp;<i class="fa fa-sign-in"></i></a>
            </ul>
        </div>
        <div id="navUser">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="text-white">Xin chào,&nbsp;&nbsp;&nbsp;<b><%=session.getAttribute("TENNGUOIDUNG")%></b></a>
                    <a class="btn btn-red" data-toggle="dropdown">
                        <i class="fa fa-cog"></i>&nbsp;&nbsp;<i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu" style="margin-left:110px;background: #B73030">
                        <li><a id="btnHistory" class="text-white" data-toggle="modal" data-target="#modalSelectMember"><i class="fa fa-history"></i>&nbsp;&nbsp;Lịch sử</a></li>
                        <li><a class="text-white" data-toggle="modal" data-target="#modalChangePassword"><i class="fa fa-unlock-alt"></i>&nbsp;&nbsp;Đổi mật khẩu</a></li>
                        <li><a id="btnLogOut" class="text-white" href="#"><i class="fa fa-sign-out"></i>&nbsp;Đăng xuất</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="modal fade" id="modalChangePassword" tabindex="-1" role="dialog" aria-labelledby="modalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-side modal-top-right modal-notify">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-title" id="modalLabel">Đổi mật khẩu</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row form-group">
                    <div class="col-md-12">
                        <label><i class="fa fa-lock"></i>&nbsp;&nbsp;<b>Mật khẩu cũ</b></label>
                        <input type="text" class="form-control" placeholder="Mật khẩu cũ">
                        <label class="mrg-x2"><i class="fa fa-get-pocket"></i>&nbsp;&nbsp;<b>Mật khẩu mới</b></label>
                        <input type="text" class="form-control" placeholder="Mật khẩu mới">
                        <label class="mrg-x2"><i class="fa fa-get-pocket"></i>&nbsp;&nbsp;<b>Nhập lại mật khẩu</b></label>
                        <input type="text" class="form-control" placeholder="Nhập lại mật khẩu">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-red" data-dismiss="modal">Hủy &nbsp;&nbsp;<i class="fa fa-close"></i></button>
                <button id="btnChangePassword" type="button" class="btn btn-red">Đổi mật khẩu &nbsp;&nbsp;<i class="fa fa-recycle"></i></button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalSelectMember" tabindex="-1" role="dialog" aria-labelledby="modalMember"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-title" id="modalMember">Lịch sử đặt phòng của bạn</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row form-group">
                    <div class="col-md-12">
                        <table id="tblRoomById" class="table table-responsive" style="width: 100%">
                            <thead>
                            <tr>
                                <th>#</th>
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
            <div class="modal-footer">
                <button type="button" class="btn btn-red" data-dismiss="modal">Đóng &nbsp;&nbsp;<i class="fa fa-close"></i></button>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="<c:url value="../../resources/js/forms/nav.js"/>"></script>
</html>


