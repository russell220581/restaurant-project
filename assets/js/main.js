const mobileMenu = document.querySelector('.mobile-menu');
const headerArea = document.querySelector('.header-area');

// Mobile Menu Toggle
function closeMenu() {
    headerArea.classList.remove("open");
    document.body.classList.remove("stop-scroll");
}

mobileMenu.addEventListener('click', () => {
    if (!headerArea.classList.contains("open")) {
        headerArea.classList.add("open");
        document.body.classList.add("stop-scroll");
    } else {
        closeMenu();
    }
});


$(document).ready(function(){
    /* Slider Setup */
    $('.sliders').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',

    });

    /* Testimonial Carousel Setup */
    $('.testimonial-wrap').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        prevArrow: '',
        nextArrow: '',
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 790,
            settings: {
              slidesToShow: 1,
            }      
        }],        
    });

    /* Portfolio Light Box */
    $('.portfolio-popup').magnificPopup({
        gallery: {
            enabled: true
        },
        type: 'image',
    });

});
