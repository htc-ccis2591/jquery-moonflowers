var $menu = $("#menu")
var $espresso = $("#espresso");
var $asideimage = $("#aside-image")

 $(document).ready(function () {
     var $p = $("<p>Click a menu item to view a picture.</p>");
     var menuItems = $(".menu-item");
     
     $("#menu").prepend($p);
     $(menuItems).siblings().addClass("hide");
     $(menuItems).on("click", function(){ 
     $asideimage.attr("src", $(this).siblings().attr("src"));
     $($asideimage).removeClass("hide");
     })
}); 

/* OLD JS CODE -------------------------------------------------------------
var menu = document.getElementById("menu");
var espresso = document.getElementById("espresso");

var p = document.createElement("p");
console.log(p)
var msg = document.createTextNode("Click a menu item to view a picture.");
p.appendChild(msg);
menu.insertBefore(msg, espresso);

var menuItems = menu.getElementsByClassName("menu-item");

var item;
for (var i = 0; i < menuItems.length; i++ ) {
    item = menuItems[i];

    item.nextElementSibling.setAttribute("class", "hide");

    // Attach event handler
    item.onclick = function () {

        imgSrc = this.nextElementSibling.getAttribute("src");

        document.getElementById("aside-image").setAttribute("src", imgSrc);
        document.getElementById("aside-image").removeAttribute("class");
    }
}   
*/