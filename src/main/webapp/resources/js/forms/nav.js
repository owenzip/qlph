/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
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

    /**Thông báo khi đổi mật khẩu thành công*/
    let nofiticationChangePasswordSuccess = function () {
        $.confirm({
            title: 'Bạn đã đổi mật khẩu thành công', content: '', type: 'red', typeAnimated: true,
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

    /**Thông báo khi đổi mật khẩu thất bại*/
    let nofiticationChangePasswordFalse = function () {
        $.confirm({
            title: 'Đổi mật khẩu thất bại', content: 'Xin vui lòng kiểm tra lại', type: 'red', typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Thử lại',
                    btnClass: 'btn-red',
                },
            }
        });
    };

    /**Cấu hình ngôn ngữ hiển thị cho Datatable
     * @emptyTable : Bảng trống
     * @loadingRecords : Tải bảng
     * @processing : Xử lý bảng
     * @zeroRecords : Không có records nào
     * */
    let textDataTable = {
        "emptyTable": "Chưa có thành viên nào",
        "loadingRecords": "Đang tải dữ liệu...",
        "processing": "Đang tải dữ liệu...",
        "zeroRecords": "Không có dữ liệu",
    };

    /**Cấu hình hiển thị mặc định cho Datatable
     * @searching : chức năng tìm kiếm
     * @pagin : Chức năng phân trang
     * @info : Thông số dòng, cột
     * @ordering : Chức năng sắp xếp
     * @select : Chức năng chọn dòng
     * */
    $.extend($.fn.dataTable.defaults, {
        "language": textDataTable,
        "searching": false,
        "paging": false,
        "info": false,
        "ordering": false,
        "select": true,
    });

    /**Chức năng ẩn-hiện thông tin người dùng trên Navigation Bar
     * @Solution :
     * 1. Lấy username trong Session khi người dùng đăng nhập thông qua <Input: "Hidden">
     * 2. Nếu không tìm thấy thì hiện <Button: "ĐĂNG NHẬP">
     * 3. Nêu tìm thấy thì hiển thị username và <Button: "CÀI ĐẶT">
     * */
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

    /**Chức năng đăng xuất
     * @Event : Khi bấm <Button: "ĐĂNG XUẤT">
     * @Solution :
     * 1. Gọi "/login.do"
     * 2. Xóa tất cả Session
     * 3. Chuyển sang index.jsp
     * */
    let logOut = function () {
        $('#btnLogOut').on('click', function () {
            $.confirm({
                title: 'Bạn có chắc chắn muốn thoát', content: '', type: 'red', typeAnimated: true,
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

    /**Chức năng đổi mật khẩu
     * @Event : Khi bấm <Button "ĐỔI MẬT KHẨU"> trong <Modal "ĐỔI MẬT KHẨU">
     * @Solution :
     * 1. Gọi "/checkPassword.do" để kiểm tra mật khẩu cũ
     * 2. Lấy userId từ Session và oldPassword từ Form truyền vào @RequestParam
     * 3. Kiểm tra xem oldPassword có trong Database hay không
     * 4. Nếu có thì gọi "/changePassword.do" để đổi mật khẩu
     * 5. Lấy userId từ Session và newPassword từ Form truyền vào @RequestParam
     * */
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
                                    title: 'Bạn có muốn đổi mật khẩu', content: '', type: 'red', typeAnimated: true,
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
                                title: 'Mật khẩu cũ không chính xác', content: '', type: 'red', typeAnimated: true,
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
            }
            ;

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

    /**Cấu hình và đổ dữ liệu vào <Table: "LỊCH SỬ ĐẶT PHÒNG">
     * @Solution :
     * 1. Lấy userId từ Session để kiểm tra bảo mật
     * 2. Gọi "/selectRoomById.do" để lấy dữ liệu bảng
     * 3. Truyền idNguoiDung từ Session vào @RequestParam để lấy phòng thuộc người dùng
     * 4. Đổ dữ liệu vào bảng
     * */
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

    /**Cấu hình và đổ dữ liệu vào <Table: "THÀNH VIÊN THUỘC PHÒNG">
     * @Event : Khi bấm vào bảng THÀNH VIÊN THUỘC PHÒNG
     * @Solution :
     * 1. Lấy userId từ Session để kiểm tra bảo mật
     * 2. Nếu có thì gọi "/selectMembersByRoom.do" để lấy dữ liệu thành viên trong phòng đã chọn thông qua idPhong
     * 3. Truyền idPhong tại dòng đã chọn vào @RequestParam để lấy dữ liệu thành viên
     * 4. Đổ dữ liệu vào bảng
     * */
    let onClickTableRoomById = function () {
        let idPhong = 0;
        let ngayDatPhong = "";
        let gioBatDau = "";
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

            /**@Click <Table: "LỊCH SỬ PHÒNG">*/
            tblRoomById.find('tbody').on('click', 'tr', function () {
                let dataTable = tblRoomByIdFunction.row(this).data();
                idPhong = dataTable.idPhong;
                ngayDatPhong = new Date(dataTable.ngay);
                gioBatDau = dataTable.gioBatDau;
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                } else {
                    tblRoomByIdFunction.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                    $('#modalSelectRoom').modal('show');
                    tblMemberHistoryFunction.ajax.reload();
                }
            })

            /**Chức năng xóa phòng
             * @Event : Bấm vào <Table: "THÀNH VIÊN THUỘC PHÒNG">
             * @Solution :
             * 1. Lấy idPhong tại dòng đã chọn và trangThai = 4 (Hủy phòng)
             * 2. Truyền idPhong và trangThai vào @RequestMapping "/updateStatus.do"
             * 3. Tải tại bảng
             * */
            $('#btnDeleteRoom').on('click', function () {
                $.confirm({
                    title: 'Bạn có chắc chắn muốn hủy phòng', content: '', type: 'red', typeAnimated: true,
                    buttons: {
                        cancel: {
                            text: 'Không',
                            btnClass: 'btn-red',
                        },
                        confirm: {
                            text: 'Có',
                            btnClass: 'btn-red',
                            action: function () {
                                $.ajax({
                                    url: "/updateStatus.do",
                                    data: {
                                        'idPhong': idPhong,
                                        'trangThai': 4
                                    },
                                    type: "POST",
                                    success: function (data) {
                                        if (data) {
                                            $.confirm({
                                                title: 'Hủy phòng thành công',
                                                content: '',
                                                type: 'red',
                                                typeAnimated: true,
                                                buttons: {
                                                    cancel: {
                                                        text: 'Xác nhận',
                                                        btnClass: 'btn-red',
                                                        action: function () {
                                                            tblRoomByIdFunction.ajax.reload();
                                                        }
                                                    },
                                                }
                                            });
                                        } else {
                                            $.confirm({
                                                title: 'Hủy phòng thất bại',
                                                content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
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
                                });
                            }
                        },
                    }
                });
            })
        }
        ;
    };

    /**Khi đóng <Modal: "ĐỔI MẬT KHẨU">
     * @Event : Bấm <Button: "ĐÓNG"> xóa tất cả Validate đã hiển thị
     * */
    let onClickCloseChangePassword = function () {
        $('#btnCloseChangePassword').on('click', function () {
            let removeValidate = $('#frmChangePassword').validate();
            removeValidate.resetForm();
        })
    };

    /**Rèn buộc nhập liệu <Form: "ĐỔI MẬT KHẨU">*/
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