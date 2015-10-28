(function () {
    $(document).ready(function () {

        var espresso = $("#espresso");

        $("<p>").text("Click a menu item to view a picture.").insertBefore(espresso);

        $("img").attr("class", "hide");

        // Attach event handler
        $(".menu-item").click(function () {

            var imgSrc = $(this).next().attr("src");

            $("#aside-image").attr("src", imgSrc).removeAttr("class", "hide")
        });
    });
})();