//Add Item
$('#addBtn').on('click', function(event){
    event.preventDefault();
    let item = $('#inputTxt').val();
    $('#list').append('<div class="items"> <li>' + item + '</li> <br/> <button class="checkBtn"> Check </button> <button class="deleteBtn"> Delete </button> </div>');
});

//Check
$('#list').on('click', '.checkBtn', function(event){
    event.preventDefault();
    let myItem = $(this).closest("div").find("li");
    if(myItem.css('text-decoration') == 'none'){
        myItem.css({"text-decoration": "line-through"});
    }else{
        myItem.css({"text-decoration": "none"});
    }
});

//Delete
$('#list').on('click', '.deleteBtn', function(event){
    event.preventDefault();
    $(this).closest("div").removeClass("items");
    $(this).closest("div").html("");
});