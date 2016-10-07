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
    $(window).resize(function() {
        if ($(window).width() > 767) {
            //onStart();
            calculateMargin();
        } else {
            $('#theme-globalnav').css({ 'margin-left': "auto" });
        }
    });
    $(window).bind('scroll', function() {   
        var topHeight = $(".top-block").height();

        if ($(window).width() > 767) {
            if ($(window).scrollTop() > topHeight) {
                $('.nav-wrapper').addClass('fixed');
                $('.nav-wrapper.fixed .portal-logo').css({'opacity':'1'}); 
            } else {
                $('.nav-wrapper').removeClass('fixed');
                $('.nav-wrapper .portal-logo').css({'opacity':'0'});
                }
            }  
    });
    //onStart();
    calculateMargin();
});