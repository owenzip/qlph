$(function () {

    let tblRoomById = $('#tblRoomById');
    let tblMemberHistory = $('#tblMemberHistory');
    let tblRoomByIdFunction = undefined;
    let tblMemberHistoryFunction = undefined;

    let setup = function () {
        checkUsername();
        configTableRoomById();
        onClickTableRoomById();
        logOut();
        validateFormChangePassword();
        changePassword();
        onClickCloseChangePassword();
    }

    let nofiticationChangePasswordSuccess = function () {
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
    };

    let nofiticationChangePasswordFalse = function () {
        $.confirm({
            title: 'Đổi mật khẩu thất bại',
            content: 'Xin vui lòng kiểm tra lại',
            type: 'red',
            typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Thử lại',
                    btnClass: 'btn-red',
                },
            }
        });
    };

    let textDataTable = {
        "emptyTable": "Chưa có thành viên nào",
        "loadingRecords": "Đang tải dữ liệu...",
        "processing": "Đang tải dữ liệu...",
        "zeroRecords": "Không có dữ liệu",
    };

    $.extend($.fn.dataTable.defaults, {
        "language": textDataTable,
        "searching": false,
        "paging": false,
        "info": false,
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
        $('#btnChangePassword').on('click', function () {
            if ($('#frmChangePassword').valid()) {
                let oldPassword = $('#oldPassword').val();
                let userId = $('#sessionUserId').val();
                let confirmPassword = $('#confirmPassword').val();
                let newPassword = $('#newPassword').val();

                $.ajax({
                    url: "/checkPassword.do",
                    data: {
                        'matKhau': oldPassword,
                        'idNguoiDung': userId,
                    },
                    type: "POST",
                    success: function (data) {
                        if (data) {
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
                    }
                })
            } else {
                nofiticationChangePasswordFalse();
            };

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
                            nofiticationChangePasswordSuccess();
                        } else {
                            nofiticationChangePasswordFalse();
                        }
                    }
                });
            }
        })
    };

    let configTableRoomById = function () {
        let userId = $('#sessionUserId').val();
        if (userId != "null") {
            tblRoomByIdFunction = tblRoomById.DataTable({
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
            $('#btnHistory').on('click', function () {
                tblRoomByIdFunction.ajax.reload();
            })
        }
    };

    let onClickTableRoomById = function () {
        let idPhong = 0;
        let userId = $('#sessionUserId').val();
        if (userId != "null") {
            tblMemberHistoryFunction = tblMemberHistory.DataTable({
                "bAutoWidth": false,
                "serverSide": true,
                "processing": true,
                "deferLoading": 0,
                "ajax": {
                    "url": "/selectMembersByRoom.do",
                    "data": function (param) {
                        param.idPhong = idPhong;
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
                        "sWidth": "50%",
                        "data": "tenNguoiDungDetails",
                    }, {
                        "targets": 2,
                        "sWidth": "25%",
                        "data": "lopDetails",
                    }, {
                        "targets": 3,
                        "sWidth": "25%",
                        "data": "mssvDetails"
                    },
                ],
            });
            tblRoomById.find('tbody').on('click', 'tr', function () {
                let dataTable = tblRoomByIdFunction.row(this).data();
                idPhong = dataTable.idPhong;
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                } else {
                    tblRoomByIdFunction.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                    $('#modalSelectRoom').modal('show');
                    tblMemberHistoryFunction.ajax.reload();
                }
            })
        }
    };
    
    let onClickCloseChangePassword = function () {
        $('#btnCloseChangePassword').on('click',function () {
            let removeValidate = $('#frmChangePassword').validate();
            removeValidate.resetForm();
        })
    };

    let validateFormChangePassword = function () {
        $('#frmChangePassword').validate({
            rules: {
                oldPassword: {
                    required: true,
                    alphanumeric: true,
                    minlength: 3,
                },
                newPassword: {
                    required: true,
                    alphanumeric: true,
                    minlength: 3,
                },
                confirmPassword: {
                    required: true,
                    alphanumeric: true,
                    minlength: 3,
                    equalTo: "#newPassword",
                }
            },
            messages: {
                oldPassword: {
                    required: "* Vui lòng nhập mật khẩu cũ",
                    minlength: "* Mật khẩu phải lớn hơn 3 ký tự",
                },
                newPassword: {
                    required: "* Vui lòng nhập mật khẩu mới",
                    minlength: "* Mật khẩu phải lớn hơn 3 ký tự",
                },
                confirmPassword: {
                    required: "* Vui lòng xác nhận lại mật khẩu",
                    minlength: "* Mật khẩu phải lớn hơn 3 ký tự",
                    equalTo: "* Mật khẩu không trùng khớp",
                }
            }
        })
    };

    return setup();
});