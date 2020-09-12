$(() => {
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();
        $('#divError').removeClass();
        $('#divError').show();
        $('#divError').css('margin-top', '150px');
        $('#divError').addClass('alert alert-danger');
        $('#divError').html('<strong>Error!</strong> Usuario no Autenticado.');

        setTimeout(() => { 
            window.location.href = 'login.html';
         }, 3000);
    }

    $('#home').click((e) => { 
        e.preventDefault();
        window.location.href = 'home.html';
    });
    
    $('#listaProductos').click((e) => { 
        e.preventDefault();
        window.location.href = 'productslist.html';
    });

    $('#comprar').click((e) => { 
        e.preventDefault();
        window.location.href = 'products.html';
    });

    $('#btnAdd').hover(() => {
            // over
            $('#btnAdd').html('Agregar Categoría');
        }, () => {
            // out
            $('#btnAdd').html('+');
        }
    );
});

$('#btn-cerrarSesion').click((e) => { 
    e.preventDefault();
    localStorage.setItem('UserIsValid', 0);
    window.location.href = 'login.html';
    
});