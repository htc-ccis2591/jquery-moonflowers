var $menu = $("#menu")
var $espresso = $("#espresso");
var $asideimage = $("#aside-image")

 $(document).ready(function () {

     var $p = $("<p>Click a menu item to view a picture.</p>");
     $("#menu").prepend($p);

     var menuItems = $(".menu-item");
     
     $(menuItems).siblings().addClass("hide");

     $(menuItems).on("click", function(){
         
     
     $asideimage.attr("src", $(this).siblings().attr("src"));
         
     $($asideimage).removeClass("hide");
 
     })
});