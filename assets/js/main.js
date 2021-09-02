//Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function() {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});


// Sticky nav 
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header-bottom.b-1");
    header.classList.toggle("sticky", window.scrollY > 400);
})

window.addEventListener("scroll", function() {
    var header = document.querySelector(".header-bottom-2");
    header.classList.toggle("sticky", window.scrollY > 400);
})


// Search event
$('.header-top-right ul li a.srch').on('click', function() {
    $('.header-top-right ul li a input').addClass('active');
})


// Slick slider
$('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});