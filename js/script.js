(function () {
    $(document).ready(function () {

        var menu = $("#menu");
        var espresso = $("#espresso");

        $("<p>").text("Click a menu item to view a picture.").insertBefore(espresso);

        $("menu-item").attr("class", "hide");

        // Attach event handler
        $("#aside-image").click(function () {

            $("imgSrc") = $(this).next().attr("src");

            $("#aside-image").attr("src", imgSrc).removeAttr("class");
        });
    });
})();