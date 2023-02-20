$(document).ready(function () {
  $(".services__cards").owlCarousel({
    loop: true,
    margin: 10,
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
