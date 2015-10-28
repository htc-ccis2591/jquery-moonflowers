(function () {
    $(document).ready(function () {

        var menu = $("#menu");
        var espresso = $("#espresso");

        $("<p>").text("Click a menu item to view a picture.").insertBefore(espresso);

        $("img").attr("class", "hide");

        // Attach event handler
        $("img").click(function () {

            $("img") = $(this).next().attr("src");

            $("img").attr("src", imgSrc).removeAttr("class", "hide");

        });
    });
})();