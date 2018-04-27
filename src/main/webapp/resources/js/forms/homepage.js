$(function () {

    let setup = function () {
        clickVerMenu();
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

    return setup();
});