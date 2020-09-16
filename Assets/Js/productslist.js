var productList = [];

function showModal() {
    $('#pNombre').val('');
    $('#pPrecio').val('');
    $('#exampleModal').modal('show');
}

$('#btnGuardar').click((e) => { 
    e.preventDefault();

    let _pNombre = $('#pNombre').val();
    let _pPrecio = $('#pPrecio').val();

    if (_pNombre == '' || _pPrecio == '') {
        $('#divErrorModal')
        .removeClass('d-none')
        .addClass('d-block');

        setTimeout(() => {
            $('#divErrorModal')
            .removeClass('d-block')
            .addClass('d-none');
        }, 2000);
        return;
    }

    var producto = {
        nombre: _pNombre,
        precio: _pPrecio,
        fecha: Date()
    }

    if (productList == null) {
        productList = [];
    }

    productList.push(producto);

    localStorage.setItem('productList', JSON.stringify(productList));

    get_products();

    $('#pNombre').val('');
    $('#pPrecio').val('');

});

function get_products() {
     $('#product-table tbody').empty();

     productList = JSON.parse(localStorage.getItem('productList'));

     $.each(productList, (i,p) => {
         var row = '<tr>'
         + '<td>' + i + '</td>'
         + '<td>' + p.nombre + '</td>'
         + '<td>' + p.precio + '</td>'
         + '<td>' + p.fecha + '</td>'
         + '<td><button class="btn btn-outline-info btn-sm mr-2" onclick="edit(' + i + ')">Editar</button></td>'
         + '<td><button class="btn btn-outline-danger btn-sm mr-2" onclick="remove(' + i + ')">Eliminar</button></td>'
         + '</tr>';

         $('#product-table tbody').append(row);
     });
}

function edit(i) {
    var producto = productList[i];

    $('#pNombre').val(producto.nombre);
    $('#pPrecio').val(producto.precio);

    $('#exampleModal').modal('show');
}

function remove(i) {
    productList.splice(i,1);

    localStorage.setItem('productList', JSON.stringify(productList));

    get_products();
    
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

        setTimeout(() =>  { 
            window.location.href = 'login.html';
         }, 3000);
    }

    get_products();

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