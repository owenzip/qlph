$(function () {

    let tblRoomById = $('#tblRoomById');

    let setup = function () {
        checkUsername();
        configTableRoomById();
        logOut();
        changePassword();
    }

    let textDataTable = {
        "emptyTable": "Chưa có thành viên nào",
        "loadingRecords": "Đang tải dữ liệu...",
        "processing": "Đang tải dữ liệu...",
        "zeroRecords": "Không có dữ liệu",
    };

    $.extend($.fn.dataTable.defaults, {
        "language": textDataTable,
        "searching": false, // Tìm kiếm
        "paging": false, // Phân trang
        "info": false, // Thông tin bảng
        "ordering": false,
        "select": true,
    });

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

    let changePassword = function () {
        $('#btnChangePassword').on('click',function () {
            let oldPassword = $('#oldPassword').val();
            let sessionPassword = $('#sessionPassword').val();
            let userId = $('#sessionUserId').val();
            let confirmPassword = $('#confirmPassword').val();
            let newPassword = $('#newPassword').val();

            if (oldPassword === sessionPassword) {
                if (newPassword === confirmPassword) {
                    $.confirm({
                        title: 'Bạn có muốn đổi mật khẩu',
                        content: '',
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            cancel: {
                                text: 'Hủy',
                                btnClass: 'btn-red',
                            },
                            confirm: {
                                text: 'Đồng ý',
                                btnClass: 'btn-red',
                                action: function () {
                                    changePassword();
                                }
                            },
                        }
                    });
                } else {
                    $.confirm({
                        title: 'Mật khẩu không trùng khớp',
                        content: '',
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            cancel: {
                                text: 'Thử lại',
                                btnClass: 'btn-red',
                            },
                        }
                    });
                }
            } else {
                $.confirm({
                    title: 'Mật khẩu cũ không chính xác',
                    content: '',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        cancel: {
                            text: 'Thử lại',
                            btnClass: 'btn-red',
                        },
                    }
                });
            }

            let changePassword = function () {
                $.ajax({
                    url: "/changePassword.do",
                    data: {
                        'matKhau': confirmPassword,
                        'idNguoiDung': userId,
                    },
                    type: "POST",
                    success: function (data) {
                        if (data) {
                            $.confirm({
                                title: 'Bạn đã đổi mật khẩu thành công',
                                content: '',
                                type: 'red',
                                typeAnimated: true,
                                buttons: {
                                    cancel: {
                                        text: 'Đóng',
                                        btnClass: 'btn-red',
                                        action: function () {
                                            window.location.href = "/login.do";
                                        }
                                    },
                                }
                            });
                        } else {
                            $.confirm({
                                title: 'Đổi mật khẩu thất bại',
                                content: 'Đã xảy ra lỗi trong quá trình đổi mật khẩu, xin vui lòng thử lại',
                                type: 'red',
                                typeAnimated: true,
                                buttons: {
                                    cancel: {
                                        text: 'Đóng',
                                        btnClass: 'btn-red',
                                    },
                                }
                            });
                        }
                    }
                });
            }
        })
    };

    let configTableRoomById = function () {
        let userId = $('#sessionUserId').val();
        if (userId != "null") {
            let tblRoomByIdFunction = tblRoomById.DataTable({
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
                    },{
                        "targets": 1,
                        "sWidth": "25%",
                        "data": "tenPhong",
                    }, {
                        "targets": 2,
                        "sWidth": "15%",
                        "data": "ngay",
                    }, {
                        "targets": 3,
                        "sWidth": "10%",
                        "data": "gioBatDau"
                    }, {
                        "targets": 4,
                        "sWidth": "10%",
                        "data": "gioKetThuc"
                    }, {
                        "targets": 5,
                        "sWidth": "10%",
                        "data": "trangThai"
                    }, {
                        "targets": 6,
                        "sWidth": "5%",
                        "data": "soNguoi"
                    }, {
                        "targets": 7,
                        "sWidth": "20%",
                        "data": "mucDich"
                    },
                ],
            });
            $('#btnHistory').on('click',function () {
                tblRoomByIdFunction.ajax.reload();
            })
        }
    };

    return setup();
});