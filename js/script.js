(function () {
    //AddMenuText
    //var menu = document.getElementById("menu");
    //var espresso = document.getElementById("espresso");

    //var p = document.createElement("p");
    //console.log(p)
    //var msg = document.createTextNode("Click a menu item to view a picture.");
    var $msg = $("<p> Click a menu item to view a picture. </p>");
    //p.appendChild(msg);
    //menu.insertBefore(msg, espresso);
    var $menu = $("h2").after($msg);

    //HideImg
    var $img = $("img");
    $img.addClass("hide");

    //ShowImg
    var $menuItems = $("li");

    var $click = $($menuItems).click(function () {
        var $menuItems = $(this);


        var $sideImg = $("#aside-image");
        var $imgSrc = $($menuItems).children().last().attr("src");

        console.log($imgSrc);

        $sideImg.removeClass("hide");
        $sideImg.attr("src", $imgSrc);

    });


    //    var menuItems = menu.getElementsByClassName("menu-item");
    //    var item;
    //    for (var i = 0; i < menuItems.length; i++) {
    //        item = menuItems[i];
    //
    //        // This next line no longer works 
    //        // the .hide has been removed from the CSS file
    //        item.nextElementSibling.setAttribute("class", "hide");
    //        // Attach event handler
    //        item.onclick = function () {
    //
    //            imgSrc = this.nextElementSibling.getAttribute("src");
    //
    //            document.getElementById("aside-image").setAttribute("src", imgSrc);
    //            document.getElementById("aside-image").removeAttribute("class");
    //        }
    //    }

}());