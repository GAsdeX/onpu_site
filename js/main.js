

$('#head-slider').slick({
	autoplay: true
});
$('#discover-slider').slick({
	slidesToShow: 5,
	arrows: false
});
var $subHeader = $('.site-sub-header');
var $scrollWindow = $('.scroll-header');

$(document).scroll(function(){
	if ($(document).scrollTop() > ($subHeader.height() + $subHeader.offset().top)) {

		if (!($scrollWindow.hasClass('active'))) {
			console.log('more');

			$scrollWindow.addClass('active');
		}
	} else {
		console.log('less');
		if (($scrollWindow.hasClass('active'))) {
			$scrollWindow.removeClass('active');
		}
	}
});
