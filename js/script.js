$(document).ready(function() {
   $('.info-menu').click(function(event){
      $('.info-menu,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
  });