$(window).lazyLoadXT();
// fix for isotope filtering  more: https://isotope.metafizzy.co/events.html#layoutcomplete
$.lazyLoadXT.updateEvent+=' layoutComplete';
$.lazyLoadXT.updateEvent+=' afterChange';
$.lazyLoadXT.onload.addClass = 'img-loaded';