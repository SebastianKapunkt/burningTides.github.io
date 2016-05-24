var isClicked = false;

// show other navbar at scrolled top state
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
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
        // also close burger menu
        $(".fel-navbar").removeClass("collapsed-nav");
        isClicked = false;
    });
});

// burger collapse, by adding and removing css class
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

$('.img-holder').imageScroll({
    speed: 0.1,
});

var vid = document.getElementById("my-video");
var isplaying = true;

$(document).ready(function () {
    $('#playpause').click(function (e) {
      if(isplaying){
            vid.pause();
            $(".play-pause").removeClass("pause");
            $(".play-pause").addClass("play");
            isplaying = false;
        }else{
            vid.play();
            $(".play-pause").removeClass("play");
            $(".play-pause").addClass("pause");
            isplaying = true;
      }
    });
});

$('my-video').on('ended', function () {
    this.load();
    this.play();
});