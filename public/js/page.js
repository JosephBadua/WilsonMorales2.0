$(document).ready(function(){
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({full_width: true});
     setInterval(function() {
       $('.carousel').carousel('next');
     }, 4500);   
});