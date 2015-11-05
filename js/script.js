(function () {
    $(document).ready(function () {
        $("<p>").text("Click a menu item to view a picture.").insertBefore("#espresso");

        $("img").attr("class", "hide");

        // Attach event handler
        $(".menu-item").click(function () {
            var imgSrc = $(this).next().attr("src");
            $("#aside-image").attr("src", imgSrc).removeAttr("class", "hide")
        });
    });
})();


//  ----------------------------------------------------------------------------

// Mary's code

// (function() {
// var $menu = $("#menu");
// var $espresso = $("#espresso");

// $("<p>Click a menu item to view a picture.</p>").insertbefore($espresso);    
// OR
// $espresso.before ( $("<p>Click on a menu item to view a picture.</p>") );

// var $menuItems = $( ".menu-item");
// $menuItems.next().attr("class", "hide");
// $menuItems.click(function () {
//     imgSrc = $this.next().attr("src");
//  $"#aside-image").attr("src", imgSrc).removeAttr("class");
// });
// }());