//var menu = document.getElementById("menu");
//var espresso = document.getElementById("espresso");

//var p = document.createElement("p");
//console.log(p)
//var msg = document.createTextNode("Click a menu item to view a picture.");
//p.appendChild(msg);
//menu.insertBefore(msg, espresso);



var $p = $("<p>Click a menu item to view a picture</p>").insertBefore('#espresso');
console.log($p);
//var $msg = $("Click a menu item to view a picture");
//$p.append($msg);

//var menuItems = menu.getElementsByClassName("menu-item");

//var item;
//for (var i = 0; i < menuItems.length; i++) {
//item = menuItems[i];

// This next line no longer works 
// the .hide has been removed from the CSS file
//item.nextElementSibling.setAttribute("class", "hide");

var $menuItems = $('.menu-item');
$menuItems.siblings().hide();
//this code below would work if mary had added the hide class to css file
//$menuItems.siblings().attr("class", "hide");

var $listItems = $("li");

$listItems.on("click", function () {
    var $listItem = $(this);

    var $asideImage = $('#aside-image');
    var $getImg = $listItem.children().last(); //children() gets span and img children, last() gets img
    console.log($getImg);
    var imgSrc = $getImg.attr("src"); //gets list items src for the img

    $asideImage.attr("src", imgSrc); //sets aside src to src that corresponds to the listItem that was clicked.



});








//$item.onclick = function () {

//imgSrc = this.nextElementSibling.getAttribute("src");

//document.getElementById("aside-image").setAttribute("src", imgSrc);
//document.getElementById("aside-image").removeAttribute("class");
//}