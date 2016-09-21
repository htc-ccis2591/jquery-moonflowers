$("<p>Click a menu item to view a picture.</p>").insertAfter('h2');

$("#menu img").hide();

$(".menu-item").on("click", function () {
    var images = $(this).next().attr('src');
    $("#aside-image").attr('src', images);
    $('aside').removeClass("hide");
});
