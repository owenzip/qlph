$(function () {

    let setup = function () {
        checkLogin();
        selectListProblem();
        sendContact();
    }
    
    let checkLogin = function () {
        $("#btnConfirm").click(function () {
            let mssv = $('#mssv').val();
            let matKhau = $('#matKhau').val();

            if (mssv.length < 3) {
                $.confirm({
                    title: 'Tài khoản bạn nhập không hợp lệ',
                    content: '',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Thử lại',
                            btnClass: 'btn-red',
                        },
                    }
                });
            } else if (matKhau.length < 3) {
                $.confirm({
                    title: 'Mật khẩu bạn nhập không hợp lệ',
                    content: '',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Thử lại',
                            btnClass: 'btn-red',
                        },
                    }
                });
            } else {
                $.ajax({
                    url: "/checkLogins.do"
                    , data: {
                        "mssv": mssv,
                        "matKhau": matKhau
                    }
                    , type: "POST"
                    , success: function (data) {
                        if (data) {
                            window.location.href = "/index.do";
                        } else {
                            $.confirm({
                                title: 'Đăng nhập không thành công',
                                content: 'Vui lòng kiểm tra lại tài khoản hoặc mật khẩu',
                                type: 'red',
                                typeAnimated: true,
                                buttons: {
                                    tryAgain: {
                                        text: 'Thử lại',
                                        btnClass: 'btn-red',
                                    },
                                }
                            });
                        }
                    }
                });
            }
        });
    }
    
    let selectListProblem = function () {
        $('#btnContact').on('click', function () {
            $.ajax({
                url: "/selectListProblem.do",
                type: "POST",
                success: function (data) {
                    if (data) {
                        $.each(data, function (i) {
                            $('#selProblem').append('<option value="' + data[i]["idVanDe"] + '">' + data[i]["vanDe"] + '</option>');
                        })
                    }
                }
            });
        })
    };

    let sendContact = function () {
        $('#btnSentContact').on('click', function () {
            let idVanDe = $('#selProblem').val();
            let sdt = $('#sdt').val();
            let noiDung = $('#noiDung').val();
            let email = $('#email').val();

            if (sdt.length < 9 || sdt.length > 11) {
                $.confirm({
                    title: 'Số điện thoại bạn nhập không hợp lệ',
                    content: '',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Thử lại',
                            btnClass: 'btn-red',
                        },
                    }
                });
            } else if (idVanDe == -1) {
                $.confirm({
                    title: 'Bạn chưa chọn vấn đề',
                    content: '',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Thử lại',
                            btnClass: 'btn-red',
                        },
                    }
                });
            } else if (noiDung.length < 1) {
                $.confirm({
                    title: 'Xin vui lòng nhập nội dung',
                    content: '',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Thử lại',
                            btnClass: 'btn-mdb-color',
                        },
                    }
                });
            } else {
                $.ajax({
                    url: "/insertContact.do",
                    data: {
                        'idVanDe': idVanDe,
                        'sdt': sdt,
                        'noiDung': noiDung,
                        'email':email
                    },
                    type: "POST",
                    success: function (data) {
                        if (data) {
                            $.confirm({
                                title: 'Đã gửi liên hệ thành công',
                                content: 'Cảm ơn bạn đã gửi liên hệ. Vui lòng chờ thời gian phản hồi từ ban quản trị',
                                type: 'red',
                                typeAnimated: true,
                                buttons: {
                                    confirm: {
                                        text: 'Xác nhận',
                                        btnClass: 'btn-red',
                                        action: function () {
                                            window.location.href = "/";
                                        }
                                    },
                                }
                            });
                        } else {
                            $.confirm({
                                title: 'Gửi liên hệ thất bại',
                                content: 'Đã có lỗi xảy ra từ hệ thống, xin vui lòng thử lại hoặc liên hệ đến ban quản trị',
                                type: 'red',
                                typeAnimated: true,
                                buttons: {
                                    confirm: {
                                        text: 'Xác nhận',
                                        btnClass: 'btn-red',
                                    },
                                }
                            });
                        }
                    }
                });
            }
        })
    };
    return setup();
});