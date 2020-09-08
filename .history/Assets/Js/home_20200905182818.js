$(function(){
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();
        $('#divError').show();

        //Add error Div Class
        $('#divError').addClass('alert-danger');
    }
});

$('#btn-cerrarSession').click(function (){
    localStorage.setItem('UserIsValid', 0);
    window.location.href = 'login.html';
})