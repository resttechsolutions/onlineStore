$('#login-btn').click(function(){
    let _username = $('#UserName').val();
    let _password = $('#Password').val();

    if (_username == '' || _password == '') {
        $('#divError').show();
        $('#divError').removeClass().addClass('alert');
        $('#divError').addClass('alert-warning');
        $('#divError').html('<strong>Alerta!</strong> Usuario y Clave Son Requeridos');

        return;

    }

    // Call Login Fucnction
    var result = doLogin(_username, _password);

    $('#divError').show();

    //Remove All CSS Class And Alert Class
    $('#divError').removeClass().addClass('alert');

    if (condition) {
        
    }
})

function doLogin(username, password){
    if (username == 'admin' && password == 'admin') {
        return true;
    }
    return false;
}