// Header nav underline updates
$('.menu-url').click(function() {
  $('.menu-url').removeClass('selected-li');
  $(this).addClass('selected-li');
});

$('#menu-display-icon').click(function() {
  if($('#menu-nav').css('display') == 'none') {
    $('#menu-nav').css('display','inherit');
  } else {
    $('#menu-nav').css('display','none');
  }
});

// Reset header
$(window).resize(function() {
  if($(window).width() >= 750) {
    $('#menu-nav').css('display','inherit');
  } else {
    $('#menu-nav').css('display','none');
  }
});

// Carousel function and function calls
function advanceCarousel() {
  if($('#carousel-design').hasClass('selected')){
    $('#carousel-design').addClass('move-off-screen');
    setTimeout(function () {
      $('#carousel-design').removeClass('selected');
      $('#carousel-design').removeClass('move-off-screen');
    }, 800);
    $('#carousel-develop').addClass('selected');
  } else if($('#carousel-develop').hasClass('selected')){
    $('#carousel-develop').addClass('move-off-screen');
    setTimeout(function () {
      $('#carousel-develop').removeClass('selected');
      $('#carousel-develop').removeClass('move-off-screen');
    }, 800);
    $('#carousel-work').addClass('selected');
  } else if($('#carousel-work').hasClass('selected')){
    $('#carousel-work').addClass('move-off-screen');
    setTimeout(function () {
      $('#carousel-work').removeClass('selected');
      $('#carousel-work').removeClass('move-off-screen');
    }, 800);
    $('#carousel-design').addClass('selected');
  }
};

setTimeout(function() {
  advanceCarousel();
}, 2000);

$('#hero-carousel-container').click(function() {
  advanceCarousel();
});
