// Owl carousel
$(document).ready(function() {
    $('.banner-main.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
    })
});


// counter up section
$('.count').counterUp({
    delay: 30,
    time: 1000
});