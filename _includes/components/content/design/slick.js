/* custom */
jQuery(document).ready(function($) {            
    $('.process-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        lazyLoad: 'ondemand',
        // infinite: false,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // arrows: true,
        dots:true,
        // fade: true,
        // asNavFor: '.process-pager-slider'
        adaptiveHeight: false,
    });
    $('.process-pager-slider').slick({
        // infinite: true,
        mobileFirst: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.process-slider',
        dots: false,                
        // variableWidth: true,
        focusOnSelect: true,
        centerMode: false,
    });
    
});
