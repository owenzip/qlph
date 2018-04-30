$(function () {

    const colUsername = '<input name="detailRoomVO[{1}].tenNguoiDung" class="form-control" ></input>';
    const colClass = '<input name="detailRoomVO[{1}].lop" class="form-control" ></input>';
    const colCode = '<input name="detailRoomVO[{1}].mssv" class="form-control" ></input>';
    let tableMember = $('#tblMembers');
    let tableRoom = $('#tblRoom');
    let tableMembersFunction = undefined;
    let tableRoomFunction = undefined;

    let setup = function () {
        clickShowTable();
        clickVerMenu();
        selectCategory();
        insertRoom();
        addMembers();
        tableRoomFunction = configTableRoom;
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
        /*"serverSide": true,
        "processing": true,*/
        "select": true,
    });

    let configTableMembers = tableMember.DataTable({
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
                "data": function (data) {
                    data = colUsername;
                    return data
                }
            }, {
                "targets": 2,
                "sWidth": "20%",
                "data": function (data) {
                    data = colClass;
                    return data
                }
            }, {
                "targets": 3,
                "sWidth": "25%",
                "data": function (data) {
                    data = colCode;
                    return data
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
                "sWidth": "50%",
                "data": "ngay",
            }, {
                "targets": 2,
                "sWidth": "20%",
                "data":"gioBatDau"
            }, {
                "targets": 3,
                "sWidth": "25%",
                "data": "trangThai"
            },{
                "targets": 4,
                "sWidth": "25%",
                "data": "soNguoi"
            },
        ],
    });

    let addMembers = function () {
        $('#btnAddMembers').on('click', function () {
            tableMembersFunction.row.add(" ", " ", " ", " ").draw();
        });
    };


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
            let formRoom = new FormData($("#formRoom")[0]);
            $.ajax({
                url: "/insertRoom.do",
                type: "POST",
                data: formRoom,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data) {
                        alert(data);
                        console.log(data);
                    }
                }
            });
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