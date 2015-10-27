$(document).ready(function() {
    
var menu = $("menu");
console.log(menu)    
var espresso = $("espresso");
console.log(espresso)
var p = $("p").add("p");
//var p = document.createElement("p");    
console.log(p)
var msg = $("p.textMessage").text("Click a menu item to view a picture.");
//var msg = document.createTextNode("Click a menu item to view a picture.");
//p.appendChild(msg);
//menu.insertBefore(msg, espresso);
var menuItems = $("menuItems").find("menu-item");
//var menuItems = menu.getElementsByClassName("menu-item");
console.log(menuItems);
    
var item;
for (var i = 0; i < $.length; i++ ) {
    item = $[i];
    
    $("img").next().attr("class, hide");
//    item.nextElementSibling.setAttribute("class", "hide");
    

    // Attach event handler
    var click = $("menu").click(function(){
//    item.onclick = function () {
    console.log(click)  

        imgSrc = $("menu-item").next().attr("src");
//        imgSrc = this.nextElementSibling.getAttribute("src");
       

        document.getElementById("aside-image").setAttribute("src", imgSrc);
        document.getElementById("aside-image").removeAttribute("class");
    })
}   
});