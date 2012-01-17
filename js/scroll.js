// Borrowed from tutorial: 
// http://tympanus.net/codrops/2010/06/02/smooth-vertical-or-horizontal-page-scrolling-with-jquery/

$(function() {
  $('nav a').bind('click',function(event){
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000,'easeInOutExpo');

    event.preventDefault();
  });
});
