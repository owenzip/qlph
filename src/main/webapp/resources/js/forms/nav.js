$(function () {

    let tblRoomById = $('#tblRoomById');

    let setup = function () {
        checkUsername();
        configTableRoomById();
        logOut();
    }

    let textDataTable = {
        "emptyTable": "Chưa có thành viên nào",
        "loadingRecords": "Đang tải dữ liệu...",
        "processing": "Đang tải dữ liệu...",
        "zeroRecords": "Không có dữ liệu",
    };

    let checkUsername = function () {
        let username = $('#sessionUsername').val();
        if (username != "null") {
            $('#navUser').show();
            $('#navLogin').hide();
        } else {
            $('#navUser').hide();
            $('#navLogin').show();
        }
    };

    let logOut = function () {
        $('#btnLogOut').on('click', function () {
            $.confirm({
                title: 'Bạn có chắc chắn muốn thoát',
                content: '',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Quay lại',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Thoát',
                        btnClass: 'btn-red',
                        action: function () {
                            window.location.href = "/login.do";
                        }
                    },
                }
            });
        })
    };

    $.extend($.fn.dataTable.defaults, {
        "language": textDataTable,
        "searching": false, // Tìm kiếm
        "paging": false, // Phân trang
        "info": false, // Thông tin bảng
        "ordering": false,
        "select": true,
    });

    let configTableRoomById = function () {
        let userId = $('#sessionUserId').val();
        if (userId != "null") {
            tblRoomById.DataTable({
                "bAutoWidth": false,
                "serverSide": true,
                "processing": true,
                "ajax": {
                    "url": "/selectRoomById.do",
                    "data": function (param) {
                        param.nguoiDaiDien = $('#sessionUserId').val()
                    },
                    "dataSrc": "",
                },
                "columnDefs": [
                    {
                        "targets": "_all",
                        class: "text-center",
                    }, {
                        "targets": 0,
                        "sWidth": "5%",
                        render: function (data, type, row, meta) {
                            let rowIndex = parseInt(meta.row);
                            let startAt = parseInt(meta.settings._iDisplayStart);
                            return rowIndex + startAt + 1;
                        }
                    }, {
                        "targets": 1,
                        "sWidth": "15%",
                        "data": "ngay",
                    }, {
                        "targets": 2,
                        "sWidth": "10%",
                        "data": "gioBatDau"
                    }, {
                        "targets": 3,
                        "sWidth": "10%",
                        "data": "gioKetThuc"
                    }, {
                        "targets": 4,
                        "sWidth": "10%",
                        "data": "trangThai"
                    }, {
                        "targets": 5,
                        "sWidth": "5%",
                        "data": "soNguoi"
                    }, {
                        "targets": 6,
                        "sWidth": "45%",
                        "data": "mucDich"
                    },
                ],
            });

            $('#btnHistory').on('click',function () {
                tblRoomById.ajax.reload();
            })
        }
    }

    return setup();
});