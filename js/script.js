(function () {
    
    $("img").hide();
    var msg = "Click a menu item to view a picture";
    $("h3#espresso").before(msg);
    //var $header = $("header").append(msg);
    //var imgSrc = (this).siblings().attr("src");
    $(".menu-item").on("click", function () {
        var imgSrc = $(this).siblings().attr("src");
        $("#aside-image").attr("src", imgSrc).show();
        //$("menu-item").append("menu-");
        //var menuItems;
        //for (var i = 0; i < menuItems.length; i++) {
        //(function (i))
        //$(#+menuItems[i].click(function ("")) item = menuItems[i];
        ///}(i);
        // This next line no longer works 
        // the .hide has been removed from the CSS file
        //item.nextElementSibling.setAttribute("class", "hide");
        // Attach event handler
        //item.onclick = function () {
        //imgSrc = this.nextElementSibling.getAttribute("src");
        //document.getElementById("aside-image").setAttribute("src", //imgSrc);
        //document.getElementById("aside-image").removeAttribute("class");
        //$(document).ready(function(){
        //$("menu-item").append("menu-img");
        // var menuItem;
        //$("menu-item").click(function(){
        //$(".show").hide();
        //for (var i = 0; i < menuItems.length; i++) {
        //(function (i))
        //$(#+menuItem[i].click(function ("")) menu-item = menuItem[i];
    });
}());