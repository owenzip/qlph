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
    <title>GIỚI THIỆU</title>
</head>
<body class="bg-gray">
<jsp:include page="nav-menu.jsp"/>
<div class="container" style="margin-top: 5%">
    <div class="row">
        <div class="col-md-12 text-center">
            <h2 style="padding-bottom: 17px;margin-top: 2px"><b>Hướng dẫn sử dụng</b></h2>
        </div>
        <div class="col-md-12">
            <h3><strong>Đăng ký phòng học</strong></h3>
            <div style="padding: 20px">
                <i class="fa fa-terminal"></i>&nbsp<b>Bước 1 :</b>&nbsp Nhấn vào biểu tượng &nbsp<i class="fa fa-bars"></i>&nbsp ở mục <b>1</b><br/>
                <i class="fa fa-terminal"></i>&nbsp<b>Bước 2 :</b>&nbsp Nhấn vào nút <b>ĐĂNG KÝ ĐẶT PHÒNG</b>&nbsp ở mục <b>2</b> để chuyển trang
            </div>
            <img src="<c:url value="../../resources/img/document/register-room-01.PNG"/>" style="width: 100%">
            <div style="padding: 20px">
                <i class="fa fa-terminal"></i>&nbsp<b>Bước 3 :</b>&nbspĐăng ký phòng học nhóm bằng cách nhấn vào nút &nbsp<i class="fa fa-bookmark"></i>&nbsp<b>ĐĂNG KÝ PHÒNG</b> ở mục <b>3.1</b>,
                danh sách các phòng sẽ được hiển thị tại bảng <b>3.2</b>
                <br/>
            </div>
            <img src="<c:url value="../../resources/img/document/register-room-02.PNG"/>" style="width: 100%">
            <div style="padding: 20px">
                <i class="fa fa-terminal"></i>&nbsp<b>Bước 4 :</b>&nbspTrang <b>Đăng ký phòng</b> sẽ được hiện lên, điền đầy đủ thông tin yêu cầu và bấm &nbsp<i class="fa fa-check"></i>&nbsp<b>ĐĂNG KÝ</b>
                để đăng ký phòng, &nbsp<i class="fa fa-close"></i>&nbsp<b>HỦY</b> để hủy thao tác
                <br/>
            </div>
            <div class="text-center">
                <img src="<c:url value="../../resources/img/document/register-room-03.PNG"/>" style="width: 60%">
            </div>
            <div style="padding: 20px">
                <i class="fa fa-terminal"></i>&nbsp Khi đăng kí phòng thành công, hệ thống sẽ chuyển sang trang &nbsp<i class="fa fa-history"></i>&nbsp<b>Lịch sử đặt phòng của bạn</b> để xem thông tin phòng bạn vừa đặt<br/>
                <i class="fa fa-terminal"></i>&nbsp Vui lòng theo dõi thông tin phòng bạn vừa đặt, nếu trạng thái chuyển sang &nbsp<i class="fa fa-link"></i>&nbsp<b>Đang đặt</b> có nghĩa là phòng bạn đã được duyệt thành công<br/>
                <i class="fa fa-terminal"></i>&nbsp Mọi góp ý, thắc mắc xin vui lòng liên hệ với ban quản trị thư viện<br/>
            </div>
            <div class="text-center">
                <img src="<c:url value="../../resources/img/document/register-room-04.PNG"/>" style="width: 100%">
            </div>
        </div>
    </div>
</div>
</body>
</html>

