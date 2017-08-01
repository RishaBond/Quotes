$(function() {

    $("#my-menu").mmenu({
        extensions:['theme-black', 'effect-menu-fade', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo.jpg" alt="Quores">'
        },
        offCanvas: {
            position: 'right'
        }
    });
    var api=$('#my-menu').data('mmenu');
    api.bind('open', function() {
        $('.hamburger').addClass('is-active');
    }).bind('close', function() {
        $('.hamburger').removeClass('is-active');
    });

    $('.carousel-quotes').owlCarousel({
        loop: true,
        smartSpeed: 1800,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        animateOut: 'fadeOut',
        dots: true,
        autoHeight: true,
        items:1
    });

    function onResize() {
        $('.carousel-quotes-content').equalHeights();
    }onResize();
    window.onresize = function () {onResize()};


    $(window).scroll(function () {
        if($(this).scrollTop() > $(this).height()){
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
    });
	// Custom JS

});
