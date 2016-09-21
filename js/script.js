//This gives jQuery function scope for the entire document so it cant get mixed up with local variables.
    
$(document).ready(function(){
    console.log("jQuery is Ready");

    //Goal 3 When the page loads all images are hidden.
    
    $('img').addClass('hide');
    
    //Goal 4 Add text under the menu heading to indicate that you can click on an item to see an image.
    
    $('h2').after('<p> Click on an item to see the image. </p>');
    
    //Goal 5 When an menu item is clicked (not the image) it should show off to the side

    $('span').click(function(){
    $('#aside-image').removeAttr('class');
    var source = $(this).next().attr('src');
    $('#aside-image').attr('src',source);
    var myAlt = $(this).next().attr('alt');
    $('#aside-image').attr('alt', source);
    });
    
}); //This ends the statement so function level scope stops here

