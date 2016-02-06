$(function()
{
    //hide all the images except the aside image which isn't showing anyway
    var asideImg = $('#aside-image');
    $('img')
        .not(asideImg)
        .hide();
    
    // add "click an item" instruction
    var hdr = $('h2');
    hdr.after('<em>Click a menu item see a picture of your delicious selection.');
    // create event handler for cliced menu item spans
    $('span.menu-item').on('click', function()
    {
        var imgSource;
        
        // get the src  attribute for the img following the clicked span
        imgSource = $(this).next().attr('src');
        
        // update the source for the aside image and get rid of it's "hide" class
        // finally, show it cuz we hid it with all the other images.
        $('#aside-image').attr('src', imgSource);
        $('#aside-image').removeClass('hide');
        
        
        console.log($('#aside-image').attr('src'));
        
    });
})


/*
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

    // This next line no longer works 
    // the .hide has been removed from the CSS file
    item.nextElementSibling.setAttribute("class", "hide");

    // Attach event handler
    item.onclick = function () {

        imgSrc = this.nextElementSibling.getAttribute("src");

        document.getElementById("aside-image").setAttribute("src", imgSrc);
        document.getElementById("aside-image").removeAttribute("class");
    }
}*/   
