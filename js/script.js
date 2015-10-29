$(document).ready( function() {
    //var menu = document.getElementById("menu");
    //var espresso = document.getElementById("espresso");
    
    var menu = $("#menu");
    var espresso = $("#espresso");

    //var p = document.createElement("p");
    //console.log(p)
    //var msg = document.createTextNode("Click a menu item to view a picture.");
    //p.appendChild(msg);
    //menu.insertBefore(msg, espresso);
    
    var p = $("<p>"); 
    p.text("Click a menu item to view a picture."); 
    espresso.before(p);


    //var menuItems = menu.getElementsByClassName("menu-item");
    //var item;
    
    //for (var i = 0; i < menuItems.length; i++ ) {
        //item = menuItems[i];

        //item.nextElementSibling.setAttribute("class", "hide");
        

        // Attach event handler
        //item.onclick = function () {

            //imgSrc = this.nextElementSibling.getAttribute("src");

            //document.getElementById("aside-image").setAttribute("src", imgSrc);
            //document.getElementById("aside-image").removeAttribute("class");
       // }
   // }
    
    var menuItems = $(".menu-item");
    var imgSrc = menuItems.siblings().attr("src");
    menuItems.siblings().attr( "class", ["hide"]);
    menuItems.click(function() {
        $("#aside-image").attr( "src", [$(this).siblings().attr("src")]);
        $("#aside-image").removeAttr( "class");
    })
});   
