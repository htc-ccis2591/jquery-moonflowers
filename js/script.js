(function () {
    $(document).ready(function () {
    var espresso = $("#espresso");
 

        $("<p>").text("Click a menu item to view a picture.").insertBefore(espresso);

        $("img").attr("class", "hide");

        // var item;
        for (var i = 0; i < $(".menu-item").length; i++) {
            //item = menuItems[i];

            // Attach event handler
            $(".menu-item").click(function () {

        var pic = $(this).next().attr("src");

                $("#aside-image").attr("src", pic).removeAttr("class");
            });
        };

    });
})();