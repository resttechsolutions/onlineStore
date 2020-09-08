$('#login-btn').click(function(){
    let _username = $('UserName').val();
    let _password = $('Password').val();

    if (_username == '' || _password == '') {
        $('#divError').show();
        $('#divError').removeClass().addClass('alert');
        $('#divError').addClass('alert-warning');
        $('#divError')..html('');

    }
})