
$(function() {

    //var $menu = $("#menu")
    $("<p>Click a menu item to view a picture.</p>").insertAfter("h2");
    
    $("img").hide();
    $(".menu-item").on("click", function(){
       var imgSrc = $(this).siblings().attr("src");
        $("#aside-image").attr("src", imgSrc).show();
        
    });
        
    
});
