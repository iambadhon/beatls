$(function () {

    //=======================preloadr start=======================//

    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(1000);
    });

    //=======================preloadr end=======================//

    //=======================scroll to up start=======================//

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_up").fadeIn(800);
        } else {
            $(".scroll_up").fadeOut(800);
        }
    });

    $(".scroll_up").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1500)
    });

    //=======================scroll to up end=======================//

    //=======================lightbox plugin start=======================//
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        "showImageNumberLabel": false,
        "disableScrolling": true,
    })
    //=======================lightbox plugin end=======================//

    //=======================slick plugin end=======================//
    $('.service_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
    });

    $('.team_slick_main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
    });

    $('.testimonial_slick_main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        centerMode: true,
    });
    //=======================slick plugin end=======================//

})