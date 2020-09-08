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

    //Show Hidden Div
    $('#divError').show();

    //Remove All CSS Class And Alert Class
    $('#divError').removeClass().addClass('alert');
    if (!result) {
        //Add error Div Class
        $('#divError').addClass('alert-danger');
        //Write in to html
        $('#divError').html('<strong>Error!</strong> Credenciales Invalidas.');
        return;
    }

    //All is OK
    $('#login-btn').hide
})

function doLogin(username, password){
    if (username == 'admin' && password == 'admin') {
        return true;
    }
    return false;
}