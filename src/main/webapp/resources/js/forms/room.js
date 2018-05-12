/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
$(function () {

    const colUsername = '<input type="text" name="detailRoomVO[{0}].tenNguoiDungDetails" class="form-control-tbl form-control">';
    const colClass = '<input type="text" name="detailRoomVO[{0}].lopDetails" class="form-control-tbl form-control">';
    const colCode = '<input type="text" name="detailRoomVO[{0}].mssvDetails" class="form-control-tbl form-control">';
    let tableMember = $('#tblMembers');
    let tableRoom = $('#tblRoom');
    let tableMembersFunction = undefined;
    let tableRoomFunction = undefined;

    let setup = function () {
        selSoNguoi();
        clickShowTable();
        clickVerMenu();
        selectCategory();
        insertRoom();
        tableRoomFunction = configTableRoom;
        textChangeInpSoNguoi();
        onClickCancelRegisterRoom();
        validateFormRegisterRoom();
        //validateMembers();
        //onChangeSelRoom();
    }

    let nofiticationRegisterRoomSuccess = function () {
        $.confirm({
            title: 'Bạn đã đặt phòng thành công',
            content: 'Kiểm tra lại thông tin tại LỊCH SỬ ĐẶT PHÒNG của bạn',
            type: 'red',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: 'Lịch sử',
                    btnClass: 'btn-red',
                    action: function () {
                        window.location.href = "/history.do";
                    }
                },
            }
        });
    };

    let nofiticationRegisterRoomFalse = function (message, note) {
        $.confirm({
            title: message,
            content: note,
            type: 'red',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: 'Thử lại',
                    btnClass: 'btn-red',
                },
            }
        });
    };

    let selSoNguoi = function () {
        let maxMember = 30;
        let minMember = 4;
        for (minMember; minMember <= maxMember; minMember++) {
            $('#soNguoi').append('<option value="' + minMember + '">' + minMember + '</option>');
        }
    }

    let textChangeInpSoNguoi = function () {
        $('#soNguoi').on('change', function () {
            tableMembersFunction.clear().draw();
            let soNguoi = $('#soNguoi').val();
            for (let i = 0; i < soNguoi; i++) {
                tableMembersFunction.row.add(" ", " ", " ", " ").draw();
            }
            ;
        })
    }

    let clickShowTable = function () {
        $('#btnRegisterRoom').on('click', function () {
            tableMembersFunction = configTableMembers;
        })
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

    let configTableMembers = tableMember.DataTable({

        "bAutoWidth": false,
        "columnDefs": [
            {
                "targets": 0,
                "sWidth": "3%",
                class: "align-middle text-center",
                render: function (data, type, row, meta) {
                    let rowIndex = parseInt(meta.row);
                    let startAt = parseInt(meta.settings._iDisplayStart);
                    return rowIndex + startAt + 1;
                }
            }, {
                "targets": 1,
                "sWidth": "55%",
                "data": function (data, type, row, meta) {
                    return colUsername.f(meta.row)
                }
            }, {
                "targets": 2,
                "sWidth": "20%",
                "data": function (data, type, row, meta) {
                    return colClass.f(meta.row)
                }
            }, {
                "targets": 3,
                "sWidth": "22%",
                "data": function (data, type, row, meta) {
                    return colCode.f(meta.row)
                }
            },
        ],
    });

    let clickVerMenu = function () {
        $('.phn').on('click', function () {
            let phn = $(this).attr("name");
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm " + phn);
            $('#getIdDmPhong').val($(this).attr('id'));
            tableRoomFunction.ajax.reload();
        })
        $('.kvd').on('click', function () {
            let kvd = $(this).attr("name");
            $("#homePageTitle").text("Lịch đăng ký khu vực đọc sách " + kvd);
            $('#getIdDmPhong').val($(this).attr('id'));
            tableRoomFunction.ajax.reload();
        })
        $('.pht').on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng hội thảo");
            $('#getIdDmPhong').val($(this).attr('id'));
            tableRoomFunction.ajax.reload();
        })
        $('.sdh').on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng sau Đại Học");
            $('#getIdDmPhong').val($(this).attr('id'));
            tableRoomFunction.ajax.reload();
        })
    }

    let configTableRoom = tableRoom.DataTable({
        "serverSide": true,
        "processing": true,
        "ajax": {
            "url": "/selectRoomToDay.do",
            "data": function (param) {
                param.idDmPhong = $('#getIdDmPhong').val()
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
                "data": "tenNguoiDaiDien",
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
                "sWidth": "15%",
                "data": "trangThai"
            }, {
                "targets": 6,
                "sWidth": "5%",
                "data": "soNguoi"
            },
        ],
    });

    let selectCategory = function () {
        $("#btnRegisterRoom").on('click', function () {
            $.ajax({
                url: "/selectListRoom.do",
                type: "POST",
                success: function (data) {
                    if (data) {
                        $.each(data, function (i) {
                            $('#selRoom').append('<option value="' + data[i]["idDmPhong"] + '">' + data[i]["tenPhong"] + '</option>');
                        })
                    }
                }
            });
        })
    };

    let insertRoom = function () {
        $('#btnAcceptRoom').on('click', function () {
            if ($('#frmRegisterRoom').valid()) {
                /**Rèn buộc trường hợp ngày đặt*/
                let dateNow = new Date();
                let dayNow = parseInt(dateNow.getDate());
                let monthNow = parseInt(dateNow.getMonth() + 1); /**Tháng 1 bắt đầu từ 0*/
                let yearNow = parseInt(dateNow.getFullYear());
                let dateRoom = $('#ngay').val();
                let dayRoom = parseInt(dateRoom.slice(0, 2), 10);
                let monthRoom = parseInt(dateRoom.slice(3, 5), 10);
                let yearRoom = parseInt(dateRoom.slice(6, 10), 10);

                if (dayNow <= dayRoom && monthNow === monthRoom && yearNow === yearRoom) {
                    $.ajax({
                        url: "/insertRoom.do",
                        type: "POST",
                        data: $("#frmRegisterRoom").serialize(),
                        success: function (data) {
                            if (data) {
                                tableRoomFunction.ajax.reload();
                                nofiticationRegisterRoomSuccess();
                            } else {
                                nofiticationRegisterRoomFalse("Đặt phòng không thành công","Xin vui lòng kiểm tra lại");
                            }
                        },
                        error: function () {
                            nofiticationRegisterRoomFalse("Đặt phòng không thành công","Xin vui lòng kiểm tra lại");
                        }
                    });
                } else if (dayNow > dayRoom && monthNow === monthRoom && yearNow === yearRoom) {
                    nofiticationRegisterRoomFalse("Ngày đặt không hợp lệ", "Xin vui lòng thử lại");
                } else {
                    nofiticationRegisterRoomFalse("Ngày đặt không hợp lệ", "Xin vui lòng thử lại");
                }
            } else {
                nofiticationRegisterRoomFalse("Đặt phòng không thành công","Xin vui lòng kiểm tra lại");
            }
        })
    };

    let onClickCancelRegisterRoom = function () {
        $('#btnCancelRegisterRoom').on('click', function () {
            $("#frmRegisterRoom").find('.clr').val("");
            $('#selRoom').val(0);
            configTableMembers.rows().remove().draw();
            let removeValidate = $('#frmRegisterRoom').validate();
            removeValidate.resetForm();
        })
    };

    String.prototype.format = String.prototype.f = function () {
        let s = this,
            i = arguments.length;
        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    };

    /*let onChangeSelRoom = function () {
        $('#soNguoi').attr("readonly", true);
        $('#selRoom').on('change',function () {
            if ($('#selRoom').val() == -1) {
                $('#soNguoi').attr("readonly", true);
            } else {
                $('#soNguoi').attr("readonly",false);
                //validateMembers();
            }
        })
    };*/

    /*let validateMembers = function () {
        if ($('#selRoom').val() >= 1 && $('#selRoom').val() <= 7) {
            $('#frmRegisterRoom').validate({
                rules: {
                    soNguoi: {
                        required: true,
                        number: true,
                        min: 4,
                        max: 20,
                    }
                },
                messages: {
                    soNguoi: {
                        required: "* Vui lòng nhập số người",
                        number: "* Số người phải là chữ số",
                        min: "* Phòng học nhóm phải từ 4 đến 20 người",
                        max: "* Phòng học nhóm phải từ 4 đến 20 người",
                    }
                }
            })
        } else if ($('#selRoom').val() == 8) {
            $('#frmRegisterRoom').validate({
                rules: {
                    soNguoi: {
                        required: true,
                        number: true,
                        min: 10,
                        max: 20,
                    }
                },
                messages: {
                    soNguoi: {
                        required: "* Vui lòng nhập số người",
                        number: "* Số người phải là chữ số",
                        min: "* Phòng hội thảo phải từ 10 đến 20 người",
                        max: "* Phòng hội thảo phải từ 10 đến 20 người",
                    }
                }
            })
        } else if ($('#selRoom').val() == 9) {
            $('#frmRegisterRoom').validate({
                rules: {
                    soNguoi: {
                        required: true,
                        number: true,
                        min: 20,
                        max: 30,
                    }
                },
                messages: {
                    soNguoi: {
                        required: "* Vui lòng nhập số người",
                        number: "* Số người phải là chữ số",
                        min: "* Phòng sau đại học phải từ 20 đến 30 người",
                        max: "* Phòng sau đại học phải từ 20 đến 30 người",
                    }
                }
            })
        } else {
            $('#frmRegisterRoom').validate({
                rules: {
                    soNguoi: {
                        required: true,
                        number: true,
                        min: 5,
                        max: 30,
                    }
                },
                messages: {
                    soNguoi: {
                        required: "* Vui lòng nhập số người",
                        number: "* Số người phải là chữ số",
                        min: "* Khu vực đọc sách phải từ 5 đến 30 người",
                        max: "* Khu vực đọc sách phải từ 5 đến 30 người",
                    }
                }
            })
        }
    };*/

    let validateFormRegisterRoom = function () {
        $('#frmRegisterRoom').validate({
            rules: {
                soNguoi: {
                    required: true,
                    number: true,
                    min: 4,
                    max: 30,
                },
                mucDich: {
                    required: true,
                    minlength: 5,
                    maxlength: 20,
                },
                idDmPhong: {
                    min: 1,
                },
                ngay: {
                    required: true,
                    dateITA: true,
                },
                gioBatDau: {
                    required: true,
                    time: true,
                    minlength: 5,
                    maxlength: 5,
                },
                gioKetThuc: {
                    required: true,
                    time: true,
                    minlength: 5,
                    maxlength: 5,
                }
            },
            messages: {
                soNguoi: {
                    required: "* Vui lòng nhập số người",
                    number: "* Số người phải là chữ số",
                    min: "* Thành viên phải từ 4 đến 30 người",
                    max: "* Thành viên phải từ 4 đến 30 người",
                },
                mucDich: {
                    required: "* Vui lòng nhập mục đích",
                    minlength: "* Mục đích phải chứa 5 đến 20 ký tự",
                    maxlength: "* Mục đích phải chứa 5 đến 20 ký tự",
                },
                idDmPhong: {
                    min: "* Vui lòng chọn phòng cần đặt"
                },
                ngay: {
                    required: "* Vui lòng nhập ngày",
                    dateITA: "* Định dạng ngày là dd/mm/yyyy",
                },
                gioBatDau: {
                    required: "* Vui lòng nhập giờ",
                    time: "* Định dạng giờ là hh:mm",
                    minlength: "* Định dạng giờ là hh:mm",
                    maxlength: "* Định dạng giờ là hh:mm",
                },
                gioKetThuc: {
                    required: "* Vui lòng nhập giờ",
                    time: "* Định dạng giờ là hh:mm",
                    minlength: "* Định dạng giờ là hh:mm",
                    maxlength: "* Định dạng giờ là hh:mm",
                }
            },
        })
    };

    return setup();
});