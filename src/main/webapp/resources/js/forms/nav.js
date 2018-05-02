$(function () {

    let setup = function () {
        checkUsername();
        logOut();
    }

    let checkUsername = function () {
        let username = $('#sessionUsername').val();
        if (username!="null") {
            $('#navUser').show();
            $('#navLogin').hide();
        } else {
            $('#navUser').hide();
            $('#navLogin').show();
        }
    }

    let logOut = function () {
        $('#btnLogOut').on('click',function () {
            $.confirm({
                title: 'Bạn có chắc chắn muốn thoát',
                content: '',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Quay lại',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Thoát',
                        btnClass: 'btn-red',
                        action: function () {
                            window.location.href = "/login.do";
                        }
                    },
                }
            });
        })
    }

    return setup();
});