$(document).ready(function() {
    
var menu = $("menu");
console.log(menu)    
var espresso = $("espresso");
console.log(espresso)
var p = $("p").add("p");
var hideClass = $("img").addClass("hide");
console.log(hideClass);
var insertP = $('#espresso').before("Click a menu item to view a picture.").append("<p>");
console.log(insertP);
   
//var txtNode = $("p").append(document.createTextNode("New Text");
//console.log(txtNode)  
//var p = document.createElement("p");    
console.log(p)

//var msg = document.createTextNode("Click a menu item to view a picture.");
//var append = $("p").append("msg");
//console.log(append);    
    //p.appendChild(msg);
//menu.insertBefore(msg, espresso);
var menuItems = $(".menu-item").find();
//var menuItems = menu.getElementsByClassName("menu-item");
console.log(menuItems);
    
var item;
for (var i = 0; i < $.length; i++ ) {
    item = [i];
    
//    $("img").next().attr("class, hide");
//    item.nextElementSibling.setAttribute("class", "hide");
    

    // Attach event handler
    var click = $(".menu-item").click(function(){
//    item.onclick = function () {
    console.log(click)  

        var imgSrc = $("<img>.src");
//      imgSrc = this.nextElementSibling.getAttribute("src");
        console.log(imgSrc);
       

        $("#aside-image.src").attr("imgSrc");
        $("#aside-image").removeAttr("class");
    })
}   
});