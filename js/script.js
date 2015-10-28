(function () {
    $(document).ready(function () {
    var espresso = $("#espresso");
 

        $("<p>").text("Click a menu item to view a picture.").insertBefore(espresso);

        $("img").attr("class", "hide");

    
            $(".menu-item").click(function () {

        var pic = $(this).next().attr("src");

                $("#aside-image").attr("src", pic).removeAttr("class");
            });
        });

    })();
