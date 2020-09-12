$(() => {
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();
        $('#divError').show();

        //Add error Div Class
        $('#divError').addClass('alert-danger');

        //Write in to HTML Div
        $('#divError').html('<strong>ERROR!</strong> Usuario no Autenticado.');

        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
        
    }

    $('#listaCategorias').click((e) => { 
        e.preventDefault();
        
        window.location.href = 'categorylist.html';
    });
    
    $('#listaProductos').click((e) => { 
        e.preventDefault();
        
        window.location.href = 'productslist.html';
    });

    $('#comprar').click((e) => { 
        e.preventDefault();
        
        window.location.href = 'products.html';
    });
});

$('#btn-cerrarSesion').click(() => {
    localStorage.setItem('UserIsValid', 0);
    window.location.href = 'login.html';
});