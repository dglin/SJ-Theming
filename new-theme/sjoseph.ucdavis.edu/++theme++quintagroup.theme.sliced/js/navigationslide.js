$(document).ready(function(){

//    function onStart() {
//        var leftMargin = (960 - $('#theme-globalnav').width())/2,
//            logoWidth = $('.nav-wrapper .portal-logo').width();
//        if ($(window).width() > 767) {
//            if ($('.top-image .portal-logo').css('display') == 'none' ) { 
//                if (logoWidth > leftMargin ) {
//                    $('#theme-globalnav').css({'margin-left': logoWidth });  
//                } else {
//                    $('#theme-globalnav').css({'margin' : '0 auto' });  
//                }
//            } else {
//                $('#theme-globalnav').css({'margin-left': leftMargin});
//            }
//        }
//    }
//    function calculateMargin () {
//        var leftMargin = (960 - $('#theme-globalnav').width())/2,
//            logoWidth = $('.nav-wrapper .portal-logo').width();
//        if ($(window).width() > 767) {
//            $(window).bind('scroll', function() {   
//                var topHeight = $(".top-block").height(),
//                    logoWidth = $('.nav-wrapper .portal-logo').width();
//
//                if ($('.top-image .portal-logo').css('display') !== 'none' ) { 
//                   if ($(window).scrollTop() > topHeight) {
//                        if (logoWidth > leftMargin ) {
//                            $('#theme-globalnav').css({'margin-left': logoWidth });  
//                            }
//                    } else {
//                        $('#theme-globalnav').css({ 'margin-left': leftMargin });
//                    }
//                }
//            });
//        }    
//    }
	$('.nav-wrapper').resize(function() {
		var wrapper = $('#theme-globalnav');
		$('.nav-wrapper').css('line-height', '' + wrapper.height());
	});	
    $(window).resize(function() {
        if ($(window).width() > 767) {
            //onStart();

//             calculateMargin();
        } else {
            $('#theme-globalnav').css({ 'margin-left': "auto" });
        }
    });

    $(window).bind('scroll', function() {
        var topHeight = $(".top-block").height();
        var el = $('.nav-placeholder');
        if ($(window).width() > 0) {
            if ($(window).scrollTop() > topHeight) {
                if(!el.length) {
                    $('.trigger-box').wrap('<div class="nav-placeholder"></div>');
                    $('.nav-placeholder').height($('.trigger-box').outerHeight());
                }
                $('.trigger-box').addClass('fixed');
                $('.trigger.fixed .portal-logo').css({'opacity':'1'}); 
            } else {
                el.before($('.trigger-box'));
                el.remove();
                $('.trigger-box').removeClass('fixed');
                $('.trigger-box .portal-logo').css({'opacity':'0'});
                }
            }  
    });
    //onStart();
//     calculateMargin();

    $('label[for="nav-trigger"').bind('click', function() {
		var wrapper = $('.nav-wrapper');
		var themenav = $('#theme-globalnav');
		if (wrapper.attr('data-slid') === "slidout") {
			themenav.animate({marginLeft: "-120em"}, 100).promise().done(function() {
					themenav.css('display', 'none');
			});
			wrapper.animate({width: "3em"}, 1000, function() {
					wrapper.attr('data-slid', 'slidin');
			});
			
		} else if (wrapper.attr('data-slid') === "slidin") {
			themenav.css('display', 'flex');
			wrapper.animate({width: "100%"}, 500);
			themenav.animate({marginLeft: 0}, 100, function() {
					wrapper.attr('data-slid', 'slidout');
				});
		}
        $('.nav_placeholder').height($('.nav-wrapper').height());
    });
});
