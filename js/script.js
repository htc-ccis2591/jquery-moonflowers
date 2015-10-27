
$(document).ready(function() {
var $menu = $("#menu")
//var menu = document.getElementById("menu");
//var espresso = document.getElementById("espresso");
var $espresso = $("#espresso");
 
//var p = document.createElement("p");
//console.log(p)
//var msg = document.createTextNode("Click a menu item to view a picture.");
//p.appendChild(msg);
//menu.insertBefore(msg, espresso);
    
var $p = $("<p>").text("Click a menu item to view a picture.").insertBefore($espresso);
     $("#menu").prepend($p);
var menuItems = $(".menu-item");
//var menuItems = menu.getElementsByClassName("menu-item");
 
var item;
for (var i = 0; i < menuItems.length; i++ ) {
    item = menuItems[i];
    
 $(item).next().attr("class", "hide");  //item.nextElementSibling.setAttribute("class", "hide");

    // Attach event handler
//Book page 227, Listing 10.2.7
    //$(item).click (function () {
    item.onclick = function () {
        
imgSrc = $(this).next().attr("src");
//imgSrc = this.nextElementSibling.getAttribute("src");

        $("#aside-image").attr("src", imgSrc);
        //document.getElementById("aside-image").setAttribute("src", imgSrc);
        $("#aside-image").removeAttr("class");
        //document.getElementById("aside-image").removeAttribute("class");
    }
}   
     
});