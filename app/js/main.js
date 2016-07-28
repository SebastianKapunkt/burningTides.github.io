var isClicked = false;

//jQuery for page scrolling feature - requires jQuery Easing plugin

// burger collapse, by adding and removing css class
$(document).ready(function () {
    $('#nav-icon1').click(function (e) {
        $("#nav-icon1").toggleClass('open');
        $(".fel-navbar").toggleClass("collapsed-nav");
        $(".main-for-transform").toggleClass("transform-main");
    });
});

$('.img-holder').imageScroll({
    speed: 0.1
});

var vid = document.getElementById("my-video");
var isplaying = true;

$(document).ready(function () {
    $('#playpause').click(function (e) {
        if (isplaying) {
            vid.pause();
            $(".play-pause").removeClass("pause");
            $(".play-pause").addClass("play");
            isplaying = false;
        } else {
            vid.play();
            $(".play-pause").removeClass("play");
            $(".play-pause").addClass("pause");
            isplaying = true;
        }
    });
});

var sections = $('section')
    , nav = $('.fel-navbar');

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top + 20
    }, 500);

    return false;
});
