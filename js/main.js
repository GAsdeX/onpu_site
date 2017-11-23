

$('#head-slider').slick({
	autoplay: true
});
$('#discover-slider').slick({
	slidesToShow: 5,
	arrows: false,
	responsive: [
	    {
	      breakpoint: 1200,
		  settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	]
});
var $subHeader = $('.site-sub-header');
var $mobileMenu = $('.mobile-menu');
var $scrollWindow = $('.scroll-header');

$('#menu-button').click(function() {
	console.log('asdasd');
	if ($mobileMenu.hasClass('active')) {
		$mobileMenu.removeClass('active');

	} else {
		$mobileMenu.addClass('active');
	}
});

$(document).scroll(function(){
	if ($(document).scrollTop() > ($subHeader.height() + $subHeader.offset().top)) {
		if ($(window).width() > 1200) {
			if (!($scrollWindow.hasClass('active'))) {
				console.log('more');

				$scrollWindow.addClass('active');
			}
		}
	} else {
		if ($(window).width() > 1200) {
			console.log('less');
			if (($scrollWindow.hasClass('active'))) {
				$scrollWindow.removeClass('active');
			}
		}

	}
});
