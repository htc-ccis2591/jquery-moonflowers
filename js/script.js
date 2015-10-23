(function () {

$(document).ready(function () {
  
//var menu = document.getElementById("menu");
//var espresso = document.getElementById("espresso");
    
var menu = $("#menu");
var espresso = $("#espresso");
    
//var p = document.createElement("p");
//console.log(p)
//var msg = document.createTextNode("Click a menu item to view a picture.");
//p.appendChild(msg);
//menu.insertBefore(msg, espresso);

$("<p>Click a menu item to view a picture.</p>").insertBefore(espresso);

//var menuItems = menu.getElementsByClassName("menu-item");
var menuItems = $(menu).find(".menu-item");    
 
var item;
for (var i = 0; i < menuItems.length; i++ ) {
    item = menuItems[i];

    //item.nextElementSibling.setAttribute("class", "hide");
    $(item).next().attr( "class", "hide" );

    // Attach event handler
    // item.onclick = function () {
    $(item).click (function () {
        
        //imgSrc = this.nextElementSibling.getAttribute("src");
        imgSrc = $(this).next().attr("src");
        
//      document.getElementById("aside-image").setAttribute("src", imgSrc);
//      document.getElementById("aside-image").removeAttribute("class");

        $("#aside-image").attr("src", imgSrc);
        $("#aside-image").removeAttr("class");
    }); // end of function
    //    }
}   //end of for loop



}); //end of jQuery
    
    
})(); // end of anonymous function