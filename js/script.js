(function () {
    //var menu = document.getElementById("menu");
    //var espresso = document.getElementById("espresso");

    //var p = document.createElement("p");
    //console.log(p)
    //var msg = document.createTextNode("Click a menu item to view a picture.");
    //p.appendChild(msg);
    //menu.insertBefore(msg, espresso);
    $('<p>Click on a menu item to view its picture.</p>').insertAfter('h2');

    //var menuItems = menu.getElementsByClassName("menu-item");

    //var item;
    //for (var i = 0; i < menuItems.length; i++) {
    //item = menuItems[i];

    // This next line no longer works 
    // the .hide has been removed from the CSS file
    //item.nextElementSibling.setAttribute("class", "hide");
    $('img').hide();

    // Attach event handler
    //item.onclick = function () {

    //imgSrc = this.nextElementSibling.getAttribute("src");

    //document.getElementById("aside-image").setAttribute("src", imgSrc);
    //document.getElementById("aside-image").removeAttribute("class");
    $('.menu-item').on('click', function () {
        var imgSrc = $(this).siblings().attr('src');
        $('#aside-image').attr('src', imgSrc);
        $('#aside-image').show();

    });
    //}
    //}
}());