(function () {
    $(document).ready(function () {

        var menu = $("#menu");
        var espresso = $("#espresso");

        $("<p>").text("Click a menu item to view a picture.").insertBefore(espresso);


        var menuItems = $("menu").$("#menu-item");

        var item;
        for (var i = 0; i < menuItems.length; i++) {
            item = menuItems[i];

            $("item").next().attr("class", "hide");

            // Attach event handler
            $(item).click(function() {

                $("imgSrc") = $(this).next().attr("src");

                $("#aside-image").attr("src", imgSrc);
                $("#aside-image").removeAttr("class");
                
                
            });
})();