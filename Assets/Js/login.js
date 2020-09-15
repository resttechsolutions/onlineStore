// OpenPageReady validate if you have remember credentials
$( () => {
    
    if (localStorage.getItem('Remember')) {
        
        $('#UserName').val(localStorage.getItem('UserName'));
        $('#Password').val(localStorage.getItem('Password'));
        $('#remember').prop('checked', true);
    }
});

// Pass throw fields when enter is pressed
$('.keypress').keypress((e) => { 
    var code = (e.keyCode ? e.keyCode : e.which);

    if (code == 13) {
        if (e.currentTarget.value == '') {
            return;
        }

        if (e.currentTarget.id == 'UserName') {
            $('#Password').focus();
            return;
        }

        $('#login-btn').click();
    }
});

// $(".keypress").keypress(function (e) {
//     var code = (e.keyCode ? e.keyCode : e.which);
//     if (code == 13) {
//         if (e.currentTarget.value == '') return;

//         if (e.currentTarget.id == "UserName") {
//             $('#Password').focus();
//             return;
//         }

//         $('#login-btn').click();
//     }
// })


// Validacion form en caso de hacer submit con campo vacio
$('#login-btn').click(() => {
    let _username = $('#UserName').val();
    let _password = $('#Password').val();
    let _remember = $('#remember').prop('checked');

    // Impresion del div que muestra el error
    if (_username == '' || _password == '') {
        $('#divError').show()
        .removeClass()
        .addClass('alert')
        .addClass('alert-warning')
        .html('<strong>Alerta!</strong> Usuario y Clave Son Requeridos');

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
    $('#login-btn').fadeOut(1000);

    //Add Success Div div Class
    $('#divError').addClass('alert-success');

    //Write in to HTML Div
    $('#divError').html('<strong>CREDENCIALES VALIDAS!</strong> Usuario y Clave Correcta');

    //Call Timeout from javascript and set two seconds from execute
    setTimeout(() => {
        //Set or Update Local Storage Variable
        localStorage.setItem('UserIsValid', 1);

        //Check rememeberme and set localStorage
        if (_remember) {
            localStorage.setItem('UserName', _username);
            localStorage.setItem('Password', _password);
            localStorage.setItem('Remember', _remember);
        } else {
            localStorage.removeItem('UserName', _username);
            localStorage.removeItem('Password', _password);
            localStorage.removeItem('Remember', _remember);
        }

        //Redirect to HTML HomePage
        window.location.href = 'home.html'
    }, 2000);
})

function doLogin(username, password){
    if (username == 'admin' && password == 'admin') {
        return true;
    }
    return false;
}

// Cleaning fields with cancel button
$('#cancel-btn').click(function (e) { 
    e.preventDefault();
    
    $('#UserName').val('');
    $('#Password').val('');
    $('#remember').prop('checked', false);
    $('#UserName').focus();
});