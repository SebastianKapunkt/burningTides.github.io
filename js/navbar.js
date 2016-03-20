var isClicked = false;

//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar-container").offset().top > 150) {
        $(".navbar-container").removeClass("nav-scrolled-top");
    } else {
        $(".navbar-container").addClass("nav-scrolled-top");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        $(".fel-navbar").removeClass("collapsed-nav");
        isClicked = false;
    });
});

$(document).ready(function () {
    $('#burger').click(function (e) {
        if (!isClicked) {
            $(".fel-navbar").addClass("collapsed-nav");
            isClicked = true;
        } else {
            $(".fel-navbar").removeClass("collapsed-nav");
            isClicked = false;
        }
    });
});
