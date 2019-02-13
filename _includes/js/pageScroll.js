$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-0
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});