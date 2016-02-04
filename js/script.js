//Add text under the “Menu” heading to indicate that you can click on an item to see an image. 
$('h2').after('<p> Click A Menu Item Below For Image. </p>');


//Hide images
$('li').children('img').hide();

//Then when an item is clicked, the corresponding image should show off to the side.

$ (function() {
    var $menuItems = $('li');   
    
    $menuItems.on('click', function () {
                
        itemsrc = $(this).children('img').attr('src');
        
        $('#aside-image').attr('src',itemsrc);
        
    })
    
})





//
// JavaScript Method
//

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

        item.nextElementSibling.setAttribute("class", "hide");

        // Attach event handler
        item.onclick = function () {

            imgSrc = this.nextElementSibling.getAttribute("src");

            document.getElementById("aside-image").setAttribute("src", imgSrc);
            document.getElementById("aside-image").removeAttribute("class");
        }
    }   
*/