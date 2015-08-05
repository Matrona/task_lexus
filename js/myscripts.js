function preloader() {
	$(".preloader_logo-white").animate({
		width: '308px'
	}, 4000);
}

jQuery(window).load(function () {
	preloader();
	jQuery(".preloader").delay(1000).fadeOut();
});

$(function () {

	var $clouds = $('.layer-clouds');
	var $car = $('.layer-car');
	var $hiddenEl = $('.js-visibility');

	var $window = $(window);
	var $body = $('body, html');

	var $headerT = $('.header-title');
	var $menu = $('.header-menu');

	var $menuLinks = $('a[href^="#"]');
	var marginTop = 90;

	$hiddenEl.css('visibility', 'visible');

	$headerT.on('click', function () {
		$menu.toggle();
		return false;
	});

	//Background scroll

	$window.bind('scroll', function () {
		var scrollTop = $(this).scrollTop();

		var posClouds = (scrollTop * 0.50) + 'px';
		var posCar = (scrollTop * 0.30) + 'px';

		$clouds.css({
			'top': posClouds
		});
		$car.css({
			'top': posCar
		});

	});


	//Menu scroll

	function scrollTo(posItem) {
		$body.animate({
			scrollTop: posItem - marginTop
		}, 2000, 'easeInOutExpo');
	}

	$menuLinks.click(function () {
		var current = $(this).attr('href');
		var offsetTop = $(current).offset().top;
		if (current.length !== 0) {
			scrollTo(offsetTop)
		}
		return false;
	});

	//Content scroll

	$window.load(function () {
		var timer = setTimeout(function () {
			scrollTo(posInfo);
			clearTimeout(timer);
		}, 2000);
	});

	var $info = $('.info'),
		$tour = $('.tour'),
		$features = $('.features'),
		$colors = $('.colors');

	var posInfo = $info.offset().top;
	var posTour = $tour.offset().top;
	var posFeatures = $features.offset().top;
	var posColors = $colors.offset().top;

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		clearTimeout($.data(this, "scrollCheck"));
		$.data(this, "scrollCheck", setTimeout(function () {
			if (scroll <= 1532) {
				scrollTo(posInfo);
			}
			if ((scroll > 1533) && (scroll <= 3244)) {
				scrollTo(posTour);
			}
			if ((scroll > 3244) && (scroll <= 4956)) {
				scrollTo(posFeatures);
			}
			if (scroll > 4957) {
				scrollTo(posColors);
			}
		}, 1000));
	});

});