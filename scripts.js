$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('nav.sticky').fadeIn(500);
    $('nav.main').fadeOut(500);
  }
  else{
    $('nav.sticky').fadeOut(500);
    $('nav.main').fadeIn(500);
  }
});