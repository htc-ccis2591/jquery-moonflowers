/*var menu = document.getElementById("menu");
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

$(function(){
	$('img').hide();
	$('h2').after('<p>Click on the item to see the pictures</p>');
	$('.menu-item').on('click', function(){
		var asideImage = $(this).next().attr('src');
		$('#aside-image').attr('src', asideImage).show();
	});
})
