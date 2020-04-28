
//document.getElementsByClassName('slider-example') es lo mismo que lo de abajo solo que esto que está comentado esta en js puro y lo de abajo esta en JQ.
$(document).ready(function(){
    $('.slider-example').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});