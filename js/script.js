 $(document).ready(function () {

     var $menu = $("#menu");
     var $espresso = $("#espresso");

     $("<p>").text("Click a menu item to view a picture.").insertBefore($espresso);

//     the line above is the same as the following;

//     var $p = $("<p>");
//     $p.text("Click a menu item to view a picture.");
//     $p.insertBefore($espresso);

     //$("h3").slideUp(2000).slideDown(2000);
     var $menuItem =$(".menu-item");
     $menuItem.each(function(index,item){
         //.slideDown(2000).slideUp(1000);
        
         $(item).next().attr("class", "hide");
     });
     
                                 
     $(".menu-item").click(function(){
         var $imgSrc = $(this).next().attr("src");
         $(this).fadeOut().fadeIn();                  
         $("#aside-image").attr("src",$imgSrc).removeAttr("class");
     });
       
     
 });












//var menu = document.getElementById("menu");
//var espresso = document.getElementById("espresso");
//
//var p = document.createElement("p");
//console.log(p)
//var msg = document.createTextNode("Click a menu item to view a picture.");
//p.appendChild(msg);
//menu.insertBefore(msg, espresso);
//
//var menuItems = menu.getElementsByClassName("menu-item");
//
//var item;
//for (var i = 0; i < menuItems.length; i++ ) {
//    item = menuItems[i];
//
//    item.nextElementSibling.setAttribute("class", "hide");
//
//    // Attach event handler
//    item.onclick = function () {
//
//        imgSrc = this.nextElementSibling.getAttribute("src");
//
//        document.getElementById("aside-image").setAttribute("src", imgSrc);
//        document.getElementById("aside-image").removeAttribute("class");
//    }
//}   
//
// 