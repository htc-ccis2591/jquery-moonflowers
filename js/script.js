var $menuInstruction = $("<p>Click a menu item to view a picture</p>").insertBefore('#espresso');
console.log($menuInstruction);
var $menuItems = $('.menu-item');
$menuItems.siblings().hide();
var $listItems = $("li");

$listItems.on("click", function () {
    var $listItem = $(this);

    var $asideImage = $('#aside-image');
    var $getImg = $listItem.children().last();
    console.log($getImg);
    var imgSrc = $getImg.attr("src");

    $asideImage.attr("src", imgSrc);

});
