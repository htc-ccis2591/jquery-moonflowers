// Hide all Images
$('span').siblings('img').hide();

// Add text under the Menu heading
$('h2').after('<p>Click on a menu item to view a picture.</p>')

// Display the drink image on the aside when the list item is clicked
var $listItem = $('li');
$listItem.on('click',function(){
    var $imgSrc = $(this).children('img').attr('Src');
    var $altText = $(this).children('span').text();
    $('aside').children().attr('src',$imgSrc);
    $('aside').children().show();
    
    // Add the name of the drink to the alt attribute
    $('aside').children().attr('alt',$altText);
});