$(function () {
    const colTenNguoiDung = '<input name="detailRoomVO[{1}].tenNguoiDung" class="form-control" >{2}</input>';
    const colLop = '<input name="detailRoomVO[{1}].lop" class="form-control" >{2}</input>';
    const colMssv = '<input name="detailRoomVO[{1}].mssv" class="form-control" >{2}</input>';
    let configTableMembers = undefined;
    let tableMembers = $('#tblMembers');

    let setup = function () {
        clickVerMenu();
        selectCategory();
        insertRoom();
        configTableMembers = configTableMembersData;
        addMembers();
    }

    String.prototype.format = String.prototype.f = function () {
        let s = this,
            i = arguments.length;
        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    };

    let textDataTable = {
        "emptyTable": "Không tìm thấy dữ liệu",
        "thousands": ",",
        "loadingRecords": "Đang tải dữ liệu...",
        "processing": "Đang tải dữ liệu...",
        "zeroRecords": "Không có dữ liệu",
    };

    $.extend($.fn.dataTable.defaults, {
        "language": textDataTable,
        "searching": false, // Tìm kiếm
        "paging": false, // Phân trang
        "scrollY": 300, // Cuộn dọc
        "info": false, // Thông tin bảng
        "ordering": false,
        "serverSide": true,
        "processing": true,
        "select": true,
    });

    let configTableMembersData = tableMembers.DataTable({
        /* "ajax": {
             "url": URL_SELECT_BOOK_TABLE,
             "data": function (data) {
                 data.searchTenSach = $('#searchTenSach').val();
             },
             "dataSrc": "",
         },*/
        "columnDefs": [
            {
                "targets": "_all",
                class: "text-center"
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
                "data": function (data, type, row, meta) {
                    let index = meta.row;
                    let tenNguoiDung = "";
                    if (data && data.tenNguoiDung) {
                        tenNguoiDung = data.tenNguoiDung;
                        return colTenNguoiDung.f(index, tenNguoiDung);
                    }
                  return "";
                }
            }, {
                "targets": 2,
                "sWidth": "20%",
                "data": function (data, type, row, meta) {
                    let index = meta.row;
                    let lop = "";
                    if (data && data.lop) {
                        lop = data.lop;
                        return colLop.f(index, lop);
                    }
                    return "";
                }
            }, {
                "targets": 3,
                "sWidth": "25%",
                "data": function (data, type, row, meta) {
                    let index = meta.row;
                    let mssv = "";
                    if (data && data.mssv) {
                        mssv = data.mssv;
                        return colMssv.f(index, mssv);
                    }
                    return "";
                }
            }
        ],
    });

    let addMembers = function () {
        $('#btnAddMembers').on('click',function () {
            configTableMembers.row.add("", "", "", "").draw();
            configTableMembers.page('last').draw('page');
        });
    }

    let clickVerMenu = function () {
        $("#phn1").on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm 1");
        })
        $("#phn2").on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm 2");
        })
        $("#phn3").on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm 3");
        })
        $("#phn4").on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm 4");
        })
        $("#phn5").on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm 5");
        })
        $("#phn6").on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm 6");
        })
        $("#phn7").on('click', function () {
            $("#homePageTitle").text("Lịch đăng ký phòng học nhóm 7");
        })
    }

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
            /*$.ajax({
                url: "/selectListMajor.do",
                type: "POST",
                success: function (data) {
                    if (data) {
                        $.each(data, function (i) {
                            $('#selMajor').append('<option value="' + data[i]["idNganh"] + '">' + data[i]["nganh"] + '</option>');
                        })
                    }
                }
            });*/
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

    return setup();
});