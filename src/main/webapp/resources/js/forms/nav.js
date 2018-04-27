$(function () {

    let setup = function () {
        checkUsername();
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


    return setup();
});