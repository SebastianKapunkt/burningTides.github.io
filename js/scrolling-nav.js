//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 450) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".felcraft-moving").addClass("decrease-div");
        $(".navbar-content").removeClass("show-div");
        $(".navbar-link").addClass("navbar-link-scrolled").removeClass("navbar-link-top");
    } else{
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".felcraft-moving").removeClass("decrease-div");
        $(".navbar-content").addClass("show-div");
        $(".navbar-link").removeClass("navbar-link-scrolled").addClass("navbar-link-top");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
