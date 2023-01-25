import owl from 'owl.carousel'

function interview() {
    $("#quotes-slider").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        merge:true,
        slideBy: 1,
        nav: true,
        animateOut: 'fadeOut',
        animateInt: 'fadeIn',
        smartSpeed:1050,
        navText: ['<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="35px"><path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M16.577,30.440 L2.687,16.550 L16.577,2.660 "/></svg>','<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="35px"><path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M5.798,2.654 L19.688,16.544 L5.798,30.434 "/></svg>']
    });
}
interview();
