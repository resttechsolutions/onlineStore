$(function(){
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();
        $('#divError').show();
    }
});

$('#btn-cerrarSession').click(function (){
    
})