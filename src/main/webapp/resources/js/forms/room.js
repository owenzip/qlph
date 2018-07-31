/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
$(function () {

    const colUsername = '<input type="text" name="detailRoomVO[{0}].tenNguoiDungDetails" class="form-control-tbl form-control tenNguoiDung">';
    const colClass = '<input type="text" name="detailRoomVO[{0}].lopDetails" class="form-control-tbl form-control lop">';
    const colCode = '<input type="text" name="detailRoomVO[{0}].mssvDetails" class="form-control-tbl form-control mssv">';
    let tableMember = $('#tblMembers');
    let tableRoom = $('#tblRoom');
    let tableMembersFunction = undefined;
    let tableRoomFunction = undefined;

    let setup = function () {
        validDatePicker();
        clickShowTable();
        clickVerMenu();
        selectCategory();
        insertRoom();
        tableRoomFunction = configTableRoom;
        textChangeInpSoNguoi();
        onClickCancelRegisterRoom();
        validateFormRegisterRoom();
        onChangeSelMember();
        selectCategory();
    };

    let onChangeSelMember = function () {
        $('#selRoom').on('change', function () {
            configTableMembers.rows().remove().draw();
            switch ($(this).val()) {
                case '1': case '2': case '3': case '4': case '5': case '6': case '7':
                    selSoNguoi(4, 20);
                    break;
                case '8':
                    selSoNguoi(10, 20);
                    break;
                case '9':
                    selSoNguoi(20, 30);
                    break;
                case '10': case '11': case '12': case '13': case '14':
                    selSoNguoi(5, 30);
                    break;
            }
        })
    };

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

    let selSoNguoi = function (minMember, maxMember) {
        let html = '<option>Chọn số người</option>';
        for (minMember; minMember <= maxMember; minMember++) {
            html += '<option value="' + minMember + '">' + minMember + '</option>';
        }
        $('#soNguoi').html(html);
    };

    let textChangeInpSoNguoi = function () {
        $('#soNguoi').on('change', function () {
            tableMembersFunction.clear().draw();
            let soNguoi = $('#soNguoi').val();
            for (let i = 0; i < soNguoi; i++) {
                tableMembersFunction.row.add(" ", " ", " ", " ").draw();
            };
        })
    }

    let clickShowTable = function () {
        $('#btnRegisterRoom').on('click', function () {
            tableMembersFunction = configTableMembers;
            $('#ngay').val(getDateCurrent());
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
                "sWidth": "2%",
                class: "align-middle text-center",
                render: function (data, type, row, meta) {
                    let rowIndex = parseInt(meta.row);
                    let startAt = parseInt(meta.settings._iDisplayStart);
                    return rowIndex + startAt + 1;
                }
            }, {
                "targets": 1,
                "sWidth": "50%",
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
                "sWidth": "27%",
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
                render: function (data, type, row) {
                    return row.gioBatDau + " - " + row.gioKetThuc
                }
            }, {
                "targets": 4,
                "sWidth": "5%",
                "data": "soNguoi"
            }, {
                "targets": 5,
                "sWidth": "15%",
                "data": "trangThai"
            },
        ],
    });

    let selectCategory = function () {
        $.ajax({
            url: "/selectListRoom.do",
            type: "POST",
            success: function (data) {
                if (data) {
                    let html = '<option>Chọn phòng</option>';
                    $.each(data, function (i) {
                        html += '<option value="' + data[i]["idDmPhong"] + '">' + data[i]["tenPhong"] + '</option>';
                    })
                    $('#selRoom').html(html);
                }
            }
        });
    };

    let insertRoom = function () {
        $('#btnAcceptRoom').on('click', function () {
            if ($('#frmRegisterRoom').valid()) {
                $.ajax({
                    url: "/checkRoomExists.do",
                    type: "POST",
                    data: {
                        ngay: $('#ngay').val(),
                        gioBatDau: $('#gioBatDau').val(),
                        gioKetThuc: $('#gioKetThuc').val(),
                        idDmPhong: $('#selRoom').val()
                    },
                    success: function (data) {
                        if (Object.keys(data).length == 0) {
                            $.ajax({
                                url: "/insertRoom.do",
                                type: "POST",
                                data: $("#frmRegisterRoom").serialize(),
                                success: function (data) {
                                    if (data) {
                                        tableRoomFunction.ajax.reload();
                                        nofiticationRegisterRoomSuccess();
                                    } else {
                                        nofiticationRegisterRoomFalse("Đặt phòng không thành công", "Xin vui lòng kiểm tra lại");
                                    }
                                },
                                error: function () {
                                    nofiticationRegisterRoomFalse("Đặt phòng không thành công", "Xin vui lòng kiểm tra lại");
                                }
                            });
                        } else {
                            nofiticationRegisterRoomFalse("Đã có người đặt thời gian này", "Xin vui lòng chọn thời gian khác");
                        }
                    }
                });
            } else {
                nofiticationRegisterRoomFalse("Đặt phòng không thành công", "Xin vui lòng kiểm tra lại");
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

    let getDateCurrent = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
        return today;
    };
    let validDatePicker = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        $('.datepicker').datepicker({
            format: 'dd/mm/yyyy',
            startDate: new Date(),
            endDate: new Date(year, month, day ),
        })
    };

    let validateFormRegisterRoom = function () {

        jQuery.extend(jQuery.validator.messages, {
            required: "* Trường này là bắt buộc",
            number: "* Vui lòng nhập số",
            maxlength: jQuery.validator.format("* Vui lòng nhập không quá {0} ký tự"),
            minlength: jQuery.validator.format("* Vui lòng nhập ít nhất {0} ký tự"),
            max: jQuery.validator.format("* Vui lòng nhập giá trị nhỏ hơn {0}"),
            min: jQuery.validator.format("* Vui lòng nhập giá trị lớn hơn {0}")
        });

        jQuery.validator.addClassRules("tenNguoiDung", {
            required: true,
            minlength: 5,
            maxlength: 50,
            noScript: true
        });

        jQuery.validator.addClassRules("lop", {
            required: true,
            minlength: 4,
            maxlength: 10,
            noScript: true
        });

        jQuery.validator.addClassRules("mssv", {
            required: true,
            number: true,
            minlength: 6,
            maxlength: 11,
            noScript: true
        });

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
                    noScript: true
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