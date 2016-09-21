(function () {
    $("img").hide();
    var msg = "Click the menu to see the picture.";
    $("h3#espresso").before(msg);
    $(".menu-item").on("click", function () {
        var imgSource = $(this).siblings().attr("src");
        $("#aside-image").attr("src", imgSource).show();
        //this shows the images after the click event
    });
}());