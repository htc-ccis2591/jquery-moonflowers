$(document).ready(function() {
	
	//Hide all images except for aside image
	$("img").hide();
	$("#aside-image").show();
	
	//Add text
	$("h2").after("<p>Click item to view image.</p>");
	
	//Click to show image
	$(".menu-item").click(function(){
		var source = $(this).next().attr("src");
		$("#aside-image").attr("src", source);
	});
	
});