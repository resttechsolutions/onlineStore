var productList = [];

function getMyProducts() {
    productList = JSON.parse(localStorage.getItem('productList'));

    $.each(productList, (i,k) => {
        var row = '<div class="card mb-4 shadow-sm">';
        row += '<div class="card-header">';
        row += '<h4 class="my-0 font-weight-normal">'+ k.nombre + '</h4>'
        row += '</div>';
        row += '<div class="card-body">';
        row += '<h1 class="card-title pricing-card-title">' + k.precio + '<small class="text-muted"> / mo </small></h1>';
        row += '<button type="button" class=" btn btn-lg btn-block btn-outline-primary">Comprar</button>';
        row += '</div>';
        row += '</div>';

        $('#myProducts').append(row);
    });
}

$(() => {
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();

        $('#divError')
        .removeClass()
        .show()
        .css('margin-top', '150px')
        .addClass('alert alert-danger')
        .html('<strong>Error!</strong> Usuario no identificado.');

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 3000);
    }

    $('#home').click( (e) => { 
        e.preventDefault();
        window.location.href = 'home.html';
    });

    $('#listaCategorias').click( (e) => { 
        e.preventDefault();
        window.location.href = 'categorylist.html';
    });

    $('#listaProductos').click( (e) => { 
        e.preventDefault();
        window.location.href = 'productslist.html';
    });

    getMyProducts()

});

$('#btn-cerrarSesion').click( (e) => { 
    e.preventDefault();
    localStorage.setItem('UserIsValid', 0);
    window.location.href = 'login.html';
});