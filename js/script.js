$(document).ready(function()
	{
        
		$("img").hide();
		
		
		$(".menu-item").on("click", function()
                        
                      
			{
               var imgSrc = $(this).siblings().attr("src");
               $("#aside-image").attr("src", imgSrc);
               $("#aside-image").show();
			});
			
	});
    
