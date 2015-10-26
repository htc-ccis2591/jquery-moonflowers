(function () {

    $(document).ready(function () {
                
        $("<p>").text("Click a menu item to view a picture.").insertBefore("#espresso");
                
        $(".menu-item").each(function(index, item) {
        
            $(item).next().attr("class", "hide");
            
        });
        
        $(".menu-item").click(function() {
                
            imgSrc = $(this).next().attr("src");

                $("#aside-image").attr("src", imgSrc).removeAttr("class"); 
            
        })
        
    });

})();