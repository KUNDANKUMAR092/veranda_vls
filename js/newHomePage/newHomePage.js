// new room
$(".new_room_slick_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 1199,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }]
});