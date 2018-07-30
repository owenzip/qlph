<%--
- @DNTU-LIBRARY application
- @author Nhựt Nguyễn
- @since 15/04/2018
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="col-md-12">
    <h5>Danh sách liên hệ</h5>
    <table class="table table-hover table-responsive" style="width: 100%">
        <thead>
        <tr>
            <th class="text-center font-weight-bold">#</th>
            <th style="width: 20%" class="font-weight-bold">Tên</th>
            <th style="width: 25%" class="font-weight-bold">Vấn đề</th>
            <th style="width: 10%" class="text-center font-weight-bold">Điện thoại</th>
            <th style="width: 10%" class="text-center font-weight-bold">Email</th>
            <th style="width: 15%" class="text-center font-weight-bold">Ngày</th>
            <th style="width: 10%" class="text-center font-weight-bold">Giờ</th>
            <th style="width: auto" class="text-center font-weight-bold"></th>
            <th style="width: auto" class="text-center font-weight-bold"></th>
        </tr>
        </thead>
        <tbody id="tblContactAdmin" style="cursor: pointer"></tbody>
    </table>

    <div class="modal fade" id="modalSelectContact">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-title" id="modalSelectRoomAdmin">Nội dung tin nhắn</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <textarea id="areMessage" class="form-control" rows="4"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
