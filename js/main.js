$(document).ready(function() {

    $('.countdown').downCount({
        date: '08/27/2016 12:00:00',
        offset: +10
    }, function() {

    });

    //Header Carousel
    $("#carousel").owlCarousel({
        items: 1
    });

    $("#carousel2").owlCarousel({
        items: 1
    });

    //Photo Slider
    $('.bxslider').bxSlider({
        controls: true,
        mode: 'vertical',
        nextText: '',
        prevText: ''
    });


    $('.slider-cross').click(function() {
        $('.portfolio-slider').first().css({
            'transform': 'translate3d(0px, -655px, 0px)'
        });
    });

    //Burger Menu

  $("#burger").click(function () {
     if ($("#menu").is(":hidden")) {

         $("#menu").slideToggle(300);

     } else {

         $("#menu").slideToggle(500);

     }
     return false;
 });

});
