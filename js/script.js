$(document).ready(function () {

	var $menu = $("#menu");
	var $espresso = $("#espresso");

	$("<p>").text("Click a menu item to view a picture.").insertBefore($espresso);

	var $menuItem = $(".menu-item");
	$menuItem.each(function (index, item) {

		$(item).next().attr("class", "hide");
	});

	$(".menu-item").click(function () {
		var $imgSrc = $(this).next().attr("src");
		$(this).fadeOut().fadeIn();
		$("#aside-image").attr("src", $imgSrc).removeAttr("class");
	});

});