$(document).ready(function(){
	 $('.slider').slick({
  	arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  	fade: true,
  	dots: true,
  });
  $('.reviews').slick({
  	arrows: false,
  	dots: true,
    autoplay: true,
    autoplaySpeed: 9000,
    adaptiveHeight: true
  });
  if (screen.width < '992') {
  	$('.eyes').slick({
      autoplay: true,
      autoplaySpeed: 9000,
      adaptiveHeight: true
  	});
  }
  $('.scroll_to').click(function(e) {
    e.preventDefault();
    $("html,body").animate({scrollTop: $('form').offset().top}, 1000);
    return false;
  });
  $('.scroll_next').click(function(e) {
    e.preventDefault();
    $("html,body").animate({scrollTop: $('.section2').offset().top}, 500);
    return false;
  });

  $('.collaps_block:first').children('.collapse_button').click();
});

// function slidesToShow(slideActive, elem) {
//   	$('.slider_right').slick('slickGoTo', slideActive)
//   	$('.slider_left').slick('slickGoTo', slideActive)
//   	$('.nav_buttons_slider').children('.active').removeClass('active');
//   	$(elem).addClass('active');
//   }

function openCollapse(elem) {
	if ($(elem).parent('.collaps_block').hasClass('open')) {
	} else {
		$(elem).parents('.collapse').children('.open').children('.collapse_box').slideUp();
		$(elem).next().slideDown();
		$(elem).parents('.collapse').children('.open').removeClass('open');
		$(elem).parent('.collaps_block').addClass('open');
	}
}

