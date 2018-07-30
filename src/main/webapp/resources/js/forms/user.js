/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
$(function () {
    let setup = function () {
        selectListProblem();
        validateFormLogin();
        validateFormContact();
        checkLogin();
        sendContact();
        onClickCloseSendContact();
    }

    let notificationLoginFalse = function () {
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
    };

    let notificationContactSuccess = function () {
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
    };

    let notificationContactFalse = function () {
        $.confirm({
            title: 'Gửi liên hệ thất bại',
            content: 'Xin vui lòng kiểm tra lại',
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

    let checkLogin = function () {
        $("#btnConfirm").click(function () {
            if ($('#frmLogin').valid()) {
                let mssv = $('#mssv').val();
                let matKhau = $('#matKhau').val();
                $.ajax({
                    url: "/checkLogins.do",
                    data: {
                        "mssv": mssv,
                        "matKhau": matKhau
                    },
                    type: "POST",
                    success: function (data) {
                        if (data) {
                            window.location.href = "/index.do";
                        } else {
                            notificationLoginFalse();
                        }
                    }
                });
            } else {
                notificationLoginFalse();
            }
        });
    }

    let selectListProblem = function () {
        $('#btnContact').on('click', function () {
            let removeValidate = $('#frmLogin').validate();
            removeValidate.resetForm();
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
            if ($('#frmContact').valid()) {
                let idVanDe = $('#selProblem').val();
                let sdt = $('#sdt').val();
                let noiDung = $('#noiDung').val();
                let email = $('#email').val();
                let ten = $('#ten').val();
                $.ajax({
                    url: "/insertContact.do",
                    data: {
                        'idVanDe': idVanDe,
                        'sdt': sdt,
                        'noiDung': noiDung,
                        'email': email,
                        'ten': ten
                    },
                    type: "POST",
                    success: function (data) {
                        if (data) {
                            notificationContactSuccess();
                        } else {
                            notificationContactFalse();
                        }
                    }
                });
            } else {
                notificationContactFalse();
            }
        })
    };

    let onClickCloseSendContact = function () {
        $('#btnCloseSendContact').on('click',function () {
            let removeValidate = $('#frmContact').validate();
            removeValidate.resetForm();
        })
    }

    let validateFormLogin = function () {
        $('#frmLogin').validate({
            rules: {
                mssv: {
                    required: true,
                    number: true,
                    minlength: 7,
                    maxlength: 11
                },
                matKhau: {
                    required: true,
                    alphanumeric: true,
                    minlength: 3,
                },
                selProblem: {
                    min: 1,
                },
                sdt: {
                    required: true,
                    number: true,
                    minlength: 9,
                    maxlength: 12,
                },
                email: {
                    required: true,
                    email: true,
                },
                noiDung: {
                    required: true,
                    minlength: 10,
                    maxlength: 50,
                    alphanumeric: true
                }
            },
            messages: {
                mssv: {
                    required: "* Vui lòng nhập mã số sinh viên",
                    number: "* Mã số sinh viên phải là 11 chữ số",
                    minlength: "* Mã số sinh viên phải từ 7 chữ số",
                    maxlength: "* Mã số sinh viên tối đa 11 chữ số",
                },
                matKhau: {
                    required: "* Vui lòng nhập mật khẩu",
                    minlength: "* Mật khẩu phải lớn hơn 3 ký tự",
                },
                selProblem: {
                    min: "* Vui lòng chọn vấn đề",
                },
                sdt: {
                    required: "* Vui lòng nhập số điện thoại",
                    number: "* Số điện thoại không hợp lệ",
                    minlength: "* Số điện thoại phải có 9 đến 12 chữ số",
                    maxlength: "* Số điện thoại phải có 9 đến 12 chữ số",
                },
                email: {
                    required: "* Vui lòng nhập email",
                    email: "* Email bạn nhập không hợp lệ",
                },
                noiDung: {
                    required: "* Vui lòng nhập nội dung",
                    minlength: "* Nội dung phải từ 10 đến 50 ký tự",
                    maxlength: "* Nội dung phải từ 10 đến 50 ký tự",
                    alphanumeric: "* Nội dung không được chứa ký tự đặt biệt"
                }
            },
        })
    };

    let validateFormContact = function () {
        $('#frmContact').validate({
            rules: {
                ten: {
                    required: true,
                    noScript: true
                },
                selProblem: {
                    min: 1,
                },
                sdt: {
                    required: true,
                    number: true,
                    minlength: 9,
                    maxlength: 12,
                },
                email: {
                    required: true,
                    email: true,
                },
                noiDung: {
                    required: true,
                    minlength: 10,
                    maxlength: 50,
                    noScript: true
                }
            },
            messages: {
                ten: {
                    required: "* Vui lòng nhập đầy đủ họ tên",
                },
                selProblem: {
                    min: "* Vui lòng chọn vấn đề",
                },
                sdt: {
                    required: "* Vui lòng nhập số điện thoại",
                    number: "* Số điện thoại không hợp lệ",
                    minlength: "* Số điện thoại phải có 9 đến 12 chữ số",
                    maxlength: "* Số điện thoại phải có 9 đến 12 chữ số",
                },
                email: {
                    required: "* Vui lòng nhập email",
                    email: "* Email bạn nhập không hợp lệ",
                },
                noiDung: {
                    required: "* Vui lòng nhập nội dung",
                    minlength: "* Nội dung phải từ 10 đến 50 ký tự",
                    maxlength: "* Nội dung phải từ 10 đến 50 ký tự",
                }
            },
        })
    };

    return setup();
});