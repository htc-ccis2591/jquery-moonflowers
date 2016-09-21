(function () {
//set up the variables
var menu = $("#menu");      
var espresso = $("#espresso");
var menuItems = $("menu-item");
// add the note about viewing the pictures
espresso.before('<p>Click a menu item to view a picture</p>');
// hide the images
$('li img').hide();
// add the click funtion for each menu item
$('li').on("click", function(){
    $("aside img").attr('class','img');
    $("aside img").attr('src',this.lastChild.src);
});
}());
  
