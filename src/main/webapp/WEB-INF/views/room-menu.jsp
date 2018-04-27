<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<div class="col-md-3">
    <a id="btnRegisterRoom" class="btn btn-red" style="margin-left: 6px;width: 200px" data-toggle="modal"
       data-target="#modalRegisterRoom"><b>ĐĂNG KÝ <i class="fa fa-bookmark float-right"></i></b></a>
    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar1"><b>Học nhóm <i
            class="fa fa-users float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar1">
        <label href="" id="phn1" class="ver-menu-a">Phòng 1</label><br/>
        <label id="phn2" class="ver-menu-a">Phòng 2</label><br/>
        <label id="phn3" class="ver-menu-a">Phòng 3</label><br/>
        <label id="phn4" class="ver-menu-a">Phòng 4</label><br/>
        <label id="phn5" class="ver-menu-a">Phòng 5</label><br/>
        <label id="phn6" class="ver-menu-a">Phòng 6</label><br/>
        <label id="phn7" class="ver-menu-a">Phòng 7</label><br/>
        <br/>
    </div>
    <a class="btn btn-red btn-menu " data-toggle="collapse" data-target="#navbar4"><b>Đọc sách<i class="fa fa-book float-right"></i></b></a><br/>
    <div class="collapse div-menu-dropdown" id="navbar4">
        <a href="" class="ver-menu-a">Khu vực 1<br/></a>
        <a href="" class="ver-menu-a">Khu vực 2<br/></a>
        <a href="" class="ver-menu-a">Khu vực 3</b><br/></a>
        <a href="" class="ver-menu-a">Khu vực 4</b><br/></a><br/>
    </div>
    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar2"><b>Hội thảo<i class="fa fa-newspaper-o float-right"></i></b></a><br/>
    <a class="btn btn-red btn-menu" data-toggle="collapse" data-target="#navbar3"><b>Sau đại học<i class="fa fa-university float-right"></i></b></a><br/>
</div>

<div class="modal fade" id="modalRegisterRoom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
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
                    <div class="col-md-5">
                        <label><b>Người đại diện</b></label>
                        <input type="text" class="form-control" placeholder="Họ và tên" value="<%=session.getAttribute("TEN")%>">
                        <input type="text" class="form-control mrg" placeholder="Mã số sinh viên">
                        <input type="text" class="form-control mrg" placeholder="Lớp">
                        <select id="selMajor" name="selMajor" type="text" class="form-control mrg">
                            <option value="-1">Chọn ngành</option>
                        </select>
                        <input type="text" class="form-control mrg" placeholder="Số người">
                        <textarea type="text" class="form-control mrg" rows="3" placeholder="Mục đích sử dụng"></textarea>
                        <label class="mrg"><b>Chọn phòng</b></label>
                        <select id="selRoom" name="selRoom" type="text" class="form-control"></select>
                        <label class="mrg"><b>Thời gian</b></label>
                        <input type="text" class="form-control" placeholder="Chọn ngày">
                        <div class="row">
                            <div class="col-md-6">
                                <input type="text" class="form-control mrg" placeholder="Giờ bắt đầu">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control mrg" placeholder="Giờ kết thúc">
                            </div>
                        </div>
                        <label class="mrg"><b>Quy định và điều khoản thư viện</b></label>
                        <div class="row form-inline">
                            <div class="col-md-6">
                                <input type="checkbox"><a>&nbsp;Không đồng ý</a>
                            </div>
                            <div class="col-md-6">
                                <input type="checkbox"><a>&nbsp;Đồng ý</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <label><b>Thành viên</b></label>
                        <table class="table" style="width: 96%">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Họ và tên</th>
                                    <th>Lớp</th>
                                    <th>MSSV</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nguyễn Minh Nhựt</td>
                                    <td>14DTH1</td>
                                    <td>1407168</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Nguyễn Quốc Thái</td>
                                    <td>14DTH2</td>
                                    <td>1406652</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nguyễn Minh Nhựt</td>
                                    <td>14DTH1</td>
                                    <td>1407168</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Nguyễn Quốc Thái</td>
                                    <td>14DTH2</td>
                                    <td>1406652</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nguyễn Minh Nhựt</td>
                                    <td>14DTH1</td>
                                    <td>1407168</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Nguyễn Quốc Thái</td>
                                    <td>14DTH2</td>
                                    <td>1406652</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nguyễn Minh Nhựt</td>
                                    <td>14DTH1</td>
                                    <td>1407168</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Nguyễn Quốc Thái</td>
                                    <td>14DTH2</td>
                                    <td>1406652</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nguyễn Minh Nhựt</td>
                                    <td>14DTH1</td>
                                    <td>1407168</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-red" data-dismiss="modal">Hủy &nbsp;&nbsp;<i
                        class="fa fa-close"></i></button>
                <button type="button" class="btn btn-red">Đăng ký &nbsp;&nbsp;<i class="fa fa-check"></i></button>
            </div>
        </div>
    </div>
</div>
</html>

