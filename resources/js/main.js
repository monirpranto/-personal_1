// ==================Mobile Menu====================



// ==================Animated Heading====================

$(function () {
    $('.animate-clip').animatedHeadline({
        animationType: 'clip'
    });
});

// ==============Owl Carousel Scroll=======================

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// add Active menu and smooth scroll 
$('.nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

// Mixitup JS
var mixer = mixitup('.protfolio_grid');

// Wow Animation
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();