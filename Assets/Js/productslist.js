$(() => {
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();
        
        $('#divError')
        .removeClass()
        .show()
        .css('margin-top', '150px')
        .addClass('alert alert-danger')
        .html('<strong>Error!</strong> Usuario no identificado.');

        setTimeout(() =>  { 
            window.location.href = 'login.html';
         }, 3000);
    }

    $('#btnAdd').hover(() => {
            // over
            $('#btnAdd').html('Agregar Producto');
        }, () =>  {
            // out
            $('#btnAdd').html('+');
        }
    );

    $('#home').click((e) => { 
        e.preventDefault();
        window.location.href = 'home.html';
    });

    $('#listaCategorias').click((e) => { 
        e.preventDefault();
        window.location.href = 'categorylist.html';
    });

    $('#comprar').click((e) => { 
        e.preventDefault();
        window.location.href = 'products.html';
    });

    
});

    $('#btn-cerrarSesion').click((e) => { 
        e.preventDefault();
        localStorage.setItem('UserIsValid', 0);
        window.location.href = 'login.html';
    });