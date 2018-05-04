$(function () {

    const colUsername = '<input type="text" name="detailRoomVO[{0}].tenNguoiDungDetails" class="form-control-tbl form-control">';
    const colClass = '<input type="text" name="detailRoomVO[{0}].lopDetails" class="form-control-tbl form-control">';
    const colCode = '<input type="text" name="detailRoomVO[{0}].mssvDetails" class="form-control-tbl form-control">';
    let tableMember = $('#tblMembers');
    let tableRoom = $('#tblRoom');
    let tableMembersFunction = undefined;
    let tableRoomFunction = undefined;

    let setup = function () {
        clickShowTable();
        clickVerMenu();
        selectCategory();
        insertRoom();
        tableRoomFunction = configTableRoom;
        textChangeInpSoNguoi();
        onClickCancelRegisterRoom();
    }

    let textChangeInpSoNguoi = function () {
        $('#soNguoi').on('keyup',function () {
            tableMembersFunction.clear().draw();
            let soNguoi = $('#soNguoi').val();
            for(let i=0;i<soNguoi;i++) {
                tableMembersFunction.row.add(" ", " ", " ", " ").draw();

            };
        })
    }

    let clickShowTable = function () {
        $('#btnRegisterRoom').on('click',function () {
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
                "data": function (data,type, row, meta) {
                    return colUsername.f(meta.row)
                }
            }, {
                "targets": 2,
                "sWidth": "20%",
                "data": function (data,type, row, meta) {
                    return colClass.f(meta.row)
                }
            }, {
                "targets": 3,
                "sWidth": "22%",
                "data": function (data,type, row, meta) {
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
            },{
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
                "data":"gioBatDau"
            }, {
                "targets": 4,
                "sWidth": "10%",
                "data":"gioKetThuc"
            },{
                "targets": 5,
                "sWidth": "15%",
                "data": "trangThai"
            },{
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
            $.ajax({
                url: "/insertRoom.do",
                type: "POST",
                data: $("#formRoom").serialize(),
                success: function (data) {
                    if (data) {
                        tableRoomFunction.ajax.reload();
                        $.confirm({
                            title: 'Bạn đã đặt phòng thành công',
                            content: 'Kiểm tra lại thông tin ở Lịch Sử đặt phòng của bạn',
                            type: 'red',
                            typeAnimated: true,
                            buttons: {
                                confirm: {
                                    text: 'Xác nhận',
                                    btnClass: 'btn-red',
                                    action: function () {
                                        window.location.href = "/history.do";
                                    }
                                },
                            }
                        });
                    } else {
                        $.confirm({
                            title: 'Có lỗi xảy ra từ hệ thống',
                            content: 'Xin vui lòng thử lại sau',
                            type: 'red',
                            typeAnimated: true,
                            buttons: {
                                confirm: {
                                    text: 'Đóng',
                                    btnClass: 'btn-red',
                                },
                            }
                        });
                    }
                },
                error: function () {
                    $.confirm({
                        title: 'Có lỗi xảy ra trong quá trình đặt phòng',
                        content: 'Vui lòng kiểm tra lại các trường bạn đã nhập',
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            confirm: {
                                text: 'Thử lại',
                                btnClass: 'btn-red',
                            },
                        }
                    });
                }
            });
        })
    };
    
    let onClickCancelRegisterRoom = function () {
        $('#btnCancelRegisterRoom').on('click',function () {
            $("#formRoom").find('.clr').val("");
            $('#selRoom').val(0);
            configTableMembers.rows().remove().draw();
        })
    }

    String.prototype.format = String.prototype.f = function () {
        let s = this,
            i = arguments.length;
        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    };

    return setup();
});