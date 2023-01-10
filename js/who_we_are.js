$(".history_detals_slider").slick({
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    adaptiveHeight: true
});

$(".awards_and_recognitions_slick_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            // centerMode: true,
        }
    }]
});