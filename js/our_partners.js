$(".our_partners").slick({
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