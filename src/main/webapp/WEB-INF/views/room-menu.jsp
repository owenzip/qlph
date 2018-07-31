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
    <a id="btnRegisterRoom" class="btn btn-red" style="margin-left: 6px;width: 200px" data-toggle="modal" data-target="#modalRegisterRoom"><b>ĐĂNG KÝ PHÒNG
        <i class="fa fa-bookmark float-right"></i></b></a>
    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar1"><b>Phòng Học nhóm
        <i class="fa fa-users float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar1">
        <label id="1" name="1" class="phn ver-menu-a" style="cursor: pointer">Phòng 1</label><br/>
        <label id="2" name="2" class="phn ver-menu-a" style="cursor: pointer">Phòng 2</label><br/>
        <label id="3" name="3" class="phn ver-menu-a" style="cursor: pointer">Phòng 3</label><br/>
        <label id="4" name="4" class="phn ver-menu-a" style="cursor: pointer">Phòng 4</label><br/>
        <label id="5" name="5" class="phn ver-menu-a" style="cursor: pointer">Phòng 5</label><br/>
        <label id="6" name="6" class="phn ver-menu-a" style="cursor: pointer">Phòng 6</label><br/>
        <label id="7" name="7" class="phn ver-menu-a" style="cursor: pointer">Phòng 7</label><br/><br/>
    </div>
    <a class="btn btn-red btn-menu " data-toggle="collapse" data-target="#navbar4"><b>KV Đọc sách<i class="fa fa-book float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar4">
        <label id="10" name="1" class="kvd ver-menu-a" style="cursor: pointer">Khu vực 1</label><br/>
        <label id="11" name="2" class="kvd ver-menu-a" style="cursor: pointer">Khu vực 2</label><br/>
        <label id="12" name="3" class="kvd ver-menu-a" style="cursor: pointer">Khu vực 3</label><br/>
        <label id="13" name="4" class="kvd ver-menu-a" style="cursor: pointer">Khu vực 4</label><br/>
        <label id="14" name="5" class="kvd ver-menu-a" style="cursor: pointer">Khu vực 5</label><br/><br/>
    </div>
    <a id="8" class="pht btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar2"><b>Phòng Hội thảo<i class="fa fa-newspaper-o float-right"></i></b></a><br/>
    <a id="9" class="sdh btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar3"><b>Phòng Sau đại học<i class="fa fa-university float-right"></i></b></a><br/>
</div>
    <form id="frmRegisterRoom">
        <div class="modal fade" id="modalRegisterRoom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-title" id="exampleModalLabel">Đăng ký phòng</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row" style="margin-left: 5px">
                            <div class="col-md-4">
                                <label><b>Người đại diện</b></label>
                                <input id="nguoiDaiDien" name="nguoiDaiDien" type="hidden" value="<%=session.getAttribute("IDNGUOIDUNG")%>">
                                <input type="text" class="form-control" placeholder="Họ và tên" value="<%=session.getAttribute("TENNGUOIDUNG")%>" readonly>
                                <input type="text" class="form-control mrg" placeholder="Mã số sinh viên" value="<%=session.getAttribute("MSSV")%>" readonly>
                                <input type="text" class="form-control mrg" placeholder="Lớp" value="<%=session.getAttribute("LOP")%>" readonly>
                                <input type="text" class="form-control mrg" value="<%=session.getAttribute("NGANH")%>" readonly>
                                <textarea id="mucDich" name="mucDich" type="text" class="clr form-control mrg" rows="3" placeholder="Mục đích sử dụng"></textarea>
                                <div>
                                    <label class="mrg"><b>Chọn phòng</b></label>
                                    <select id="selRoom" name="idDmPhong" type="text" class="form-control">
                                        <option value="-1">Chọn phòng cần đặt</option>
                                    </select>
                                    <select id="soNguoi" name="soNguoi" type="text" class="clr form-control mrg" >
                                        <option value="-1">Chọn số người</option>
                                    </select>
                                </div>
                                <label class="mrg"><b>Thời gian</b></label>
                                <input id="ngay" name="ngay" type="text" class="clr form-control datepicker" style="padding-left: 13px;" placeholder="Chọn ngày">
                                <input id="gioBatDau" name="gioBatDau" type="text" class="clr form-control mrg" placeholder="Giờ bắt đầu">
                                <input id="gioKetThuc" name="gioKetThuc" type="text" class="clr form-control mrg" placeholder="Giờ kết thúc">
                                <label class="mrg"><b>Xem quy nội quy thư viện</b></label>
                                <div class="row form-inline">
                                    <div class="col-md-12">
                                        <input id="yes" type="checkbox" checked disabled="disabled"><a data-toggle="modal" data-target="#modalNoiQuy">&nbsp;Bạn phải chấp hành đúng nội quy thư viện để được phép đặt phòng</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8" style="padding-left: 0; padding-right: 5px">
                                <label><b>Thành viên</b></label>
                                <table id="tblMembers" class="table table-hover table-responsive" style="width: 100%">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Họ và tên</th>
                                        <th>Lớp</th>
                                        <th>MSSV</th>
                                    </tr>
                                    </thead>
                                </table>
                             </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="btnCancelRegisterRoom" type="button" class="btn btn-red" data-dismiss="modal">Hủy &nbsp;&nbsp;<i class="fa fa-close"></i>
                        </button>
                        <button id="btnAcceptRoom" type="button" class="btn btn-red">Đăng ký &nbsp;&nbsp;<i class="fa fa-check"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <div class="modal fade" id="modalNoiQuy" tabindex="-1" role="dialog" aria-labelledby="exampleModalNoiQuy" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-title">Nội quy thư viện DNTU</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row" style="padding-left: 20px; padding-right: 20px">
                        1. Sử dụng phòng đúng mục đích, đúng số lượng  người và thời gian đã đăng ký.<br/>
                        2. Chấp hành sự sắp xếp phòng học của nhân viên thư viện.<br/>
                        3. Trong quá trình học tuyệt đối không xâm hại, cố tình làm hư hỏng các thiết bị và tài sản trong phòng học của nhóm mình.<br/>
                        4. Nếu tài sản phòng học bị hư hại, nhóm phải chịu hoàn toàn trách nhiệm.<br/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button  type="button" class="btn btn-red" data-dismiss="modal">Đóng &nbsp;&nbsp;<i class="fa fa-close"></i></button>
            </div>
        </div>
    </div>
</div>
</html>


