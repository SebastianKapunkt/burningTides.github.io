//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 350) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".felcraft-moving").addClass("decrease-div");
        $(".server-status").removeClass("show-div");
    } else{
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".felcraft-moving").removeClass("decrease-div");
        $(".server-status").addClass("show-div");
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
