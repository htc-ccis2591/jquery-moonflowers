$(function() {
    $("h2").after("<p>Click a menu item to view a picture.</p>")

    $(".menu-item").on("click", function() {
        var imgscr = $(this).next().attr("src"); 
        $("#aside-image").attr("src", imgscr).show();
    });

    $("img").hide(); //hides item
});
    
