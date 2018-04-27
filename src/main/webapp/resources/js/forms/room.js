$(function () {

    let setup = function () {
        clickVerMenu();
        selectCategory();
    }

    let clickVerMenu = function () {
        $("#phn1").on('click', function () {
            $("#homePageTitle").text("Thông tin phòng học nhóm 1");
        })
        $("#phn2").on('click', function () {
            $("#homePageTitle").text("Thông tin phòng học nhóm 2");
        })
        $("#phn3").on('click', function () {
            $("#homePageTitle").text("Thông tin phòng học nhóm 3");
        })
        $("#phn4").on('click', function () {
            $("#homePageTitle").text("Thông tin phòng học nhóm 4");
        })
        $("#phn5").on('click', function () {
            $("#homePageTitle").text("Thông tin phòng học nhóm 5");
        })
        $("#phn6").on('click', function () {
            $("#homePageTitle").text("Thông tin phòng học nhóm 6");
        })
        $("#phn7").on('click', function () {
            $("#homePageTitle").text("Thông tin phòng học nhóm 7");
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
            $.ajax({
                url: "/selectListMajor.do",
                type: "POST",
                success: function (data) {
                    if (data) {
                        $.each(data, function (i) {
                            $('#selMajor').append('<option value="' + data[i]["idNganh"] + '">' + data[i]["nganh"] + '</option>');
                        })
                    }
                }
            });
        })

    };

    return setup();
});