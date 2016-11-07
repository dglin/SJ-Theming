$(document).ready(function(){
    $(window).resize(function() {
        if ($(window).width() <= 767) {
			$('#theme-globalnav').css({ 'margin-left': "auto" });
        }
    });
	$(window).bind('scroll', function() {
		$('.nav-wrapper').addClass('fixed');
	});

    $('label[for="nav-trigger"]').bind('click', function() {
		var wrapper = $('.nav-wrapper');
		var themenav = $('#theme-globalnav');
		var label = $('label[for="nav-trigger"]');
		if (wrapper.attr('data-slid') === "slidout") {
			if($('.placeholder').length <= 0) {
				wrapper.wrap("<div class='placeholder'></div>");
				$('.placeholder').height(wrapper.height());
			}
			label.removeClass('left');
			label.addClass('right');
            label.removeClass('fa-angle-double-left')
            label.addClass('fa-angle-double-right')
			wrapper.addClass('fixed');
			themenav.animate({marginLeft: "-120em"}, 100); // TODO: Animate opacity to 0
			wrapper.animate({width: "5em"}, 500);
			$('.placeholder').animate({height: "0"}, 500).promise().done(function() {
				wrapper.attr('data-slid', 'slidin');
			});
		} else if (wrapper.attr('data-slid') === "slidin") { // TODO: If scrollTop is zero, then animate placeholder
			label.removeClass('right');						 // 	  back out to full width.
			label.addClass('left');
            label.removeClass('fa-angle-double-right')
            label.addClass('fa-angle-double-left')
			if ($(window).scrollTop() == 0) {
				$('.placeholder').animate({height: wrapper.height()}, 500);
			}
			wrapper.animate({width: "100%"}, 500); // TODO: Animate opacity to 100
			themenav.animate({marginLeft: 0}, 100).promise().done(function() {
				wrapper.attr('data-slid', 'slidout');
			});

		}
    });
});
