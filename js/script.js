$(document).ready(function () {
    $("img").hide();
    var msg = "Click on a menu item to view a picture.";
    $("h3#espresso").before(msg);
    $(".menu-item").on("click", function () {
        var imgSource = $(this).siblings().attr("src");
        $("#aside-image").attr("src", imgSource).show();
        //console.log(imgSource);
    })
});


        



