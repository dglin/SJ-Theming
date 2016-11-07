$(document).ready(function(){
    $(window).resize(function() {
        if ($(window).width() <= 767) {
        	$('#theme-globalnav').css({ 'margin-left': "auto" });
        }
    });

	$(window).bind('scroll', function() {
		var themenav = $('#theme-globalnav');
		var wrapper = $('.nav-wrapper');
		var top = $('.top-block');
		var label = $('label[for="nav-trigger"]');
		if($(window).scrollTop() > top.height()) {
			if($('.placeholder').attr('class') != 'placeholder') {
				createPlaceholder(wrapper);
				wrapper.css('max-height', "" + wrapper.height());
			}
			wrapper.addClass('fixed');
			wrapper.addClass('top');
			if(wrapper.attr('data-status') == "slidout") {
				animateIn(label, wrapper, themenav);
				label.removeClass('harryPotter');
			}
		} else {
			if(wrapper.attr('data-status') == "slidin") {
				wrapper.removeClass('fixed');
				animateOut(label, wrapper, themenav);
			}
			wrapper.removeClass('top');
			label.addClass('harryPotter');
		}
	});

	var animateOut = function(label, wrapper, themenav) {
		wrapper.attr('data-status', 'slidout');
		label.removeClass('fa-angle-double-right');
		label.addClass('fa-angle-double-left');
		wrapper.animate({width: "100%"}, 500); // TODO: Animate opacity to 100
		themenav.animate({marginLeft: 0}, 100);
	}

	var createPlaceholder = function(wrapper) {
		wrapper.wrap("<div class='placeholder'></div>");
		$('.placeholder').height(wrapper.height());
	}

	var animateIn = function(label, wrapper, themenav) {
		wrapper.attr('data-status', 'slidin');
		createPlaceholder(wrapper);
		label.removeClass('fa-angle-double-left');
		label.addClass('fa-angle-double-right');
		wrapper.addClass('fixed');
		themenav.animate({marginLeft: "-120em"}, 100); // TODO: Animate opacity to 0
		wrapper.animate({width: "3em"}, 500);
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
