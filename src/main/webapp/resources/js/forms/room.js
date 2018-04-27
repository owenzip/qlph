$(function () {

    let setup = function () {
        clickVerMenu();
        selectCategory();
        insertRoom();
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
        $('#btnAcceptRoom').on('click',function () {
            let idDmPhong = $('#selRoom').val();
            let gioBatDau = $('#gioBatDau').val();
            let gioKetThuc = $('#gioKetThuc').val();
            let ngay = $('#ngay').val();
            let soNguoi = $('#soNguoi').val();
            let mucDich = $('#mucDich').val();
            let nguoiDaiDien = $('#idNguoiDung').val();
            $.ajax({
                url: "/insertRoom.do",
                type: "POST",
                data: {
                    "idPhong":0,
                    "idDmPhong": idDmPhong,
                    "gioBatDau": gioBatDau,
                    "gioKetThuc":  gioKetThuc,
                    "ngay": ngay,
                    "soNguoi":  soNguoi,
                    "mucDich":  mucDich,
                    "nguoiDaiDien":  nguoiDaiDien
                },
                success: function (data) {
                    if (data) {
                        $.each(data, function (i) {
                            $('#selRoom').append('<option value="' + data[i]["idDmPhong"] + '">' + data[i]["tenPhong"] + '</option>');
                        })
                    }
                }
            });
        })
    }

    return setup();
});