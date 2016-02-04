$(function() { 
    var $menuItems = $(".menu-item");
    
    $menuItems.next().hide();    //Hide the images  
    
    //Click Event Handler for menu items
    $menuItems.on("click", function() {
        $("#aside-image").attr("src", $(this).next().attr("src"))
    });
    
    //Add paragraph after the h2 menu element
    $("h2").after("<p>Click a menu item to view a picture</p>");  
});  
