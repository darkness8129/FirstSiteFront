$(function() {
	var introH = $("#intro").innerHeight();
	var header = $("#header");
	var scrollOffset=$(window).scrollTop();
	
	/* Fixed Header*/

	checkScroll(scrollOffset);
			
	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

			

	});
	function checkScroll(scrollOffset){
		if(scrollOffset>=introH){
			header.addClass("fixed");

		}else{
			header.removeClass("fixed");
		}

	}



	/* Smooth scroll*/
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var blockId = $(this).data("scroll");

		var blockOffset = $(blockId).offset().top;

		$("html, bod").animate({
			scrollTop: blockOffset
		}, 500)

	});
	
		
	/* Menu nav toggle */

	$("#nav__toggle").on("click", function(){
		event.preventDefault();

		$("#nav").toggleClass("active");
		$(this).toggleClass("active");
	});

});