$(function () {
    let setup = function () {
        $("#btnConfirm").click(function () {
            let tenDangNhap = $('#tenDangNhap').val();
            let matKhau = $('#matKhau').val();
            $.ajax({
                url: "/checkLogin.do"
                , data: {
                    "tenTaiKhoan": tenDangNhap,
                    "matKhau": matKhau
                }
                , type: "POST"
                , success: function (data) {
                    if (data) {
                        alert(data);
                        console.log(data);
                    }
                }
            });
        });
    }
    return setup();
});