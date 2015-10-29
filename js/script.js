$(document).ready( function() {
var menu = $("#menu");
var espresso = $("#espresso");

$("<p>").text("Click a menu item to view a picture.").insertBefore("#espresso");

var menuItems = $(".menuItems");

var item;
for (var i = 0; i < menuItems.length; i++ ) {
    item = menuItems[i];

    $(".item").nextElementSibling(".item")addClass('hide');

    // Attach event handler
    $('item').click( function () {

        imgSrc = this.nextElementSibling.getAttribute("src");

        
        document.getElementById("aside-image").setAttribute("src", imgSrc);
        document.getElementById("aside-image").removeAttribute("class");
    });
}   
   } );