$(function(){
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();
        $('#divError').show();

        //A
    }
});

$('#btn-cerrarSession').click(function (){
    localStorage.setItem('UserIsValid', 0);
    window.location.href = 'login.html';
})