

jQuery(function(){

    //Menu Toggle Script 
    $("#menu-toggle").on('click', function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });


    $(".card-header > h5 > button").on('click',function(){
        //$(this).parent().parent().find("::")
    });
})