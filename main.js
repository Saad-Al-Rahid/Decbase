$(document).ready(function () {
  $(".services__cards").owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    nav: true,
    dots:false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });
});


$(document).ready(function () {
  $(".testimonial__cards").owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    nav: true,
    dots:false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
});
