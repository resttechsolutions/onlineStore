//List to be listed on the table
var categoryList = [];

//Openging the modal
function showModal(){
    $('#category-name').val('');
    $('#category-desc').val('');
    $('#divErrorModal').hide();
    $('#exampleModal').modal('show');
}

//Adding category to the list
function add_category(){
    $('#divErrorModal').hide();
    
    //Getting the values of fields
    let _name = $('#category-name').val();
    let _desc = $('#category-desc').val();

    
    
    if(_name == '' || _desc == '') {
        //Showing Alert
        $('#divErrorModal')
        .removeClass('d-none')
        .addClass('d-block')
        .show();

        //Hidding Alert
        setTimeout(() => {
                $('#divErrorModal')
                .removeClass('d-block')
                .addClass('d-none');
            }, 2000);
        return;
    }

    //Filling new category object
    var category = {
        name: _name,
        desc: _desc,
        date: Date()
    };

    //If the list is not created, making a new empty
    if(categoryList == null){
        categoryList = [];
    }

    //Adding new category to the list
    categoryList.push(category);

    //Setting the list to the localStorage
    localStorage.setItem('MyCategories', JSON.stringify(categoryList));

    //Refressing the table
    get_my_categories();

    //Cleaning the fields
    $('#category-name').val('');
    $('#category-desc').val('');
}
//Getting data from localStorage and filling the table
function get_my_categories() { 

    //Erasing the tbody
    $('#category-table tbody').empty();

    // filling the list with the localStorage data
    categoryList = JSON.parse(localStorage.getItem('MyCategories'));

    // Creating the table with the localstage list data
    $.each(categoryList, (i,k) => {
        var row = '<tr>' +
        '<td>' + i + '</td>' +
        '<td>' + k.name + '</td>' +
        '<td>' + k.desc + '</td>' +
        '<td>' + k.date + '</td>' +
        '<td><button class="btn btn-outline-info btn-sm mr-2" onclick="read(' + i + ')"> Edit</button></td>' +
        '<td><button class="btn btn-outline-danger btn-sm mr-2" onclick="remove(' + i + ')"> Remove</button></td>' +
        '</tr>' ;

        // Adding the tbody to the table
        $('#category-table tbody').append(row);

    });
 }

 //Reading one registry from the list on the localstorage
 function read(c){
     //Getting the object to edit
     var category = categoryList[c];

     //Setting fields on modal with the data
     $('#category-name').val(category.name);
     $('#category-desc').val(category.desc);

     //Oppening the modal
     $('#exampleModal').modal('show');
 }

 //Deliting from list
 function remove (index) { 
     //Looking for and deliting the index of the list
     categoryList.splice(index, 1);
     //Saving the list again
     localStorage.setItem('MyCategories', JSON.stringify(categoryList));
     //Refreshing the table
     get_my_categories();
  }

  

$(() => {
    //Validiting the user is logged
    if (localStorage.getItem('UserIsValid') != '1') {
        $('#PageOk').hide();
        $('#divError').removeClass();
        $('#divError').show();
        $('#divError').css('margin-top', '150px');
        $('#divError').addClass('alert alert-danger');
        $('#divError').html('<strong>Error!</strong> Usuario no Autenticado.');

        //Redirect to login
        setTimeout(() => { 
            window.location.href = 'login.html';
         }, 3000);
    }

    //Showing the table
    get_my_categories();

    //Redirect to home
    $('#home').click((e) => { 
        e.preventDefault();
        window.location.href = 'home.html';
    });
    //Redirect to productlist
    $('#listaProductos').click((e) => { 
        e.preventDefault();
        window.location.href = 'productslist.html';
    });
    //Redirect to products
    $('#comprar').click((e) => { 
        e.preventDefault();
        window.location.href = 'products.html';
    });

    //Adding hover to btnAdd
    $('#btnAdd').hover(() => {
            // over
            //Adding text to the button
            $('#btnAdd').html('Agregar Categoría');
        }, () => {
            // out
            //Changing text to the button
            $('#btnAdd').html('+');
        }
    );
});

//Closing the session
$('#btn-cerrarSesion').click((e) => { 
    e.preventDefault();
    //Seting the userloged to 0
    localStorage.setItem('UserIsValid', 0);
    //Redirect to login
    window.location.href = 'login.html';
    
});