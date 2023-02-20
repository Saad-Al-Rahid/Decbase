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
      1000: {
        items: 3,
      },
    },
  });
});
