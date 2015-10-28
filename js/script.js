(function() {
    
$(document).ready( function() { 

var $menu = $("#menu");
var $espresso = $("#espresso");
    $("img").attr("class", "hide");

var $p = $("<p>").text("Click a menu item to view a picture.").insertBefore($espresso);
  	
var $item =  $(".menu-item").click (function () {
    
imgSrc = $(this).next().attr("src");
    
     $("img").attr("class", "hide");

           $("#aside-image").attr("src", imgSrc);
    
          $("#aside-image").removeAttr("class");
                            
         
      })

});
    
})();