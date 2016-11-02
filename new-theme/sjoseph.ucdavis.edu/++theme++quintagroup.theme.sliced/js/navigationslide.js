$(document).ready(function(){	
    $(window).resize(function() {
        if ($(window).width() <= 767) {
			$('#theme-globalnav').css({ 'margin-left': "auto" });
        }
    });
	
	$(window).bind('scroll', function() {
		var themenav = $('#them-globalnav');
		var wrapper = $('.nav-wrapper');
		var top = $('.top-block');
		if($(window).scrollTop() > top.height()) {
			if($('.placeholder').attr('class') != 'placeholder') {
				createPlaceholder(wrapper);			
			}
			wrapper.addClass('fixed');
			wrapper.addClass('top');
		} else if(wrapper.attr('data-status') == "slidout") {
			wrapper.removeClass('top');
		} else {
			wrapper.removeClass('fixed');
			wrapper.removeClass('top');
		}
	});
	
	var animateOut = function(label, wrapper, themenav) {
		label.removeClass('right');
		label.addClass('left');
		if ($(window).scrollTop() == 0) {
			$('.placeholder').animate({height: wrapper.height()}, 500);
		}
		wrapper.animate({width: "100%"}, 500); // TODO: Animate opacity to 100
		themenav.animate({marginLeft: 0}, 100).promise().done(function() {
			wrapper.attr('data-status', 'slidout');
		});
		
	}
	
	var createPlaceholder = function(wrapper) {
		wrapper.wrap("<div class='placeholder'></div>");
		$('.placeholder').height(wrapper.height());
	}

	var animateIn = function(label, wrapper, themenav) {
		createPlaceholder(wrapper);
		label.removeClass('left');
		label.addClass('right');
		wrapper.addClass('fixed');
		themenav.animate({marginLeft: "-120em"}, 100); // TODO: Animate opacity to 0
		wrapper.animate({width: "3em"}, 500);
		if ($(window).scrollTop() == 0) {
			$('.placeholder').animate({height: "0"}, 500);
		}
		wrapper.attr('data-status', 'slidin');
	}

    $('label[for="nav-trigger"]').bind('click', function() {
		var wrapper = $('.nav-wrapper');
		var themenav = $('#theme-globalnav');
		var label = $('label[for="nav-trigger"]');
		if (wrapper.attr('data-status') === "slidout") {
			animateIn(label, wrapper, themenav);
		} else if (wrapper.attr('data-status') === "slidin") {
			animateOut(label, wrapper, themenav);
		}
    });
	
	$('.nav-wrapper').css('min-height', "" + $('#theme-globalnav').height());
});
