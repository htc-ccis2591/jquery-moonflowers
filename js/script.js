$(document).ready(function () {

    var menu = $("#menu");
    var espresso = $("#espresso");

    var p = document.createElement("p");
    console.log(p);
    var msg = document.createTextNode("Click a menu item to view a picture.");
    p.appendChild(msg);
    menu.insertBefore(msg, espresso);

    var menuItems = $(".menu-item");
	

    var item;
    for (var i = 0; i < menuItems.length; i++ ) {
    item = menuItems[i];

    item.nextElementSibling.setAttribute("class", "hide");

    // Attach event handler
    item.onclick = function () {

        imgSrc = this.nextElementSibling.getAttribute("src");
		
		$("aside-image").setAttribute("src", imgSrc);

        $("aside-image").removeAttribute("class");

      
    }
}   
}); 