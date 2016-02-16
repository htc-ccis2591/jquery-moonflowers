// Hiding Function

$('img').hide();


// Placing the text

$('h2').before('<p>Click on an Item to view the picture!</p>');


var $listparts = $('li');
$listparts.on('click',function(){
    var $imgSrc = $(this).children('img').attr('Src');
    var $altText = $(this).children('span').text();
    $('aside').children().attr('src',$imgSrc);
    $('aside').children().show();
    
    //Putting the names where it should be. 
    
    
    
    
    
});
