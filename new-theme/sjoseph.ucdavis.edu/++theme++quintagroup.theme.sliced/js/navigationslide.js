$(document).ready(function () {
    $(window).bind('scroll', function () {
        var themenav = $('#theme-globalnav');
        var wrapper = $('.nav-wrapper');
        var top = $('.top-block');
        var label = $('label[for="nav-trigger"]');

        var threshold = top.height();
        if ($(window).width() <= 480) {
            threshold += wrapper.height();
        }

        if ($(window).scrollTop() > threshold) {
            wrapper.addClass('fixed');
            wrapper.addClass('top');
            if (!wrapper.is(":hover")) {
                if (wrapper.attr('data-status') === "slidout") {
                    animateIn(label, wrapper, themenav);
                    label.removeClass('harryPotter');
                }
            }
        } else {
            if (wrapper.attr('data-status') === "slidin") {
                animateOut(label, wrapper, themenav);
                wrapper.removeClass('fixed');
            }
            wrapper.removeClass('top');
            label.addClass('harryPotter');
        }
    });

    var animateOut = function (label, wrapper, themenav) {
        wrapper.attr('data-status', 'slidout');
        label.removeClass('fa-angle-double-right');
        label.addClass('fa-angle-double-left');
        wrapper.animate({width: "100%"}, 500);
        themenav.animate({marginLeft: 0}, 100);
    };

    var createPlaceholder = function (wrapper) {
        wrapper.wrap("<div class='placeholder'></div>");
        $('.placeholder').height(wrapper.height());
        wrapper.css('max-height', "" + wrapper.height());
    };

    var animateIn = function (label, wrapper, themenav) {
        wrapper.attr('data-status', 'slidin');
        label.removeClass('fa-angle-double-left');
        label.addClass('fa-angle-double-right');
        wrapper.addClass('fixed');
        themenav.animate({marginLeft: "-" + $(window).width()}, 100);
        wrapper.animate({width: "3em"}, 500);
    };

    $('label[for="nav-trigger"]').bind('click', function () {
        var wrapper = $('.nav-wrapper');
        var themenav = $('#theme-globalnav');
        var label = $('label[for="nav-trigger"]');
        if (wrapper.attr('data-status') === "slidout") {
            animateIn(label, wrapper, themenav);
        } else if (wrapper.attr('data-status') === "slidin") {
            animateOut(label, wrapper, themenav);
        }
    });

    $('.nav-wrapper').css('min-height', $('#theme-globalnav').height());
    createPlaceholder($('.nav-wrapper'));
});