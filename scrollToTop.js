(function($){

	$.fn.scrollToTop = function(options){

		var settings = $.extend({
			scrollWhen: 5, // określa moment pojawienia się przycisku "zipper"
			showSpeed: 300, // określa szybkość pojawienia się przycisku "zipper"
			hideSpeed: 300,	// określa szybkosć ukrycia przycisku "zipper"
			scrollSpeed: 1000 // określa szybkość przewijania strony do góry
		}, options);

		var HEIGHT 	= $(document).height(),
			$zipper = $("#zipper"),
			$window = $(window);	

		$zipper.hide();
		
		$window.on("scroll", function(){
			if($(this).scrollTop() > (Math.round(HEIGHT / settings.scrollWhen))){
				$zipper.stop().show(settings.showSpeed);
			} else {
				$zipper.stop().hide(settings.hideSpeed);
			}
		}); // scroll end

		$zipper.click(function(){
			$("body, html").animate({
				scrollTop: 0
			}, settings.scrollSpeed);
		}); // zipper click end

	}

})(jQuery);