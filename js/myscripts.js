function preloader() {
	$(".preloader_logo-white").animate({
		width: '308px'
	}, 4000);
}

jQuery(window).load(function () {
	preloader();
	jQuery(".preloader").delay(1000).fadeOut();
})

$(function () {

	var $clouds = $('.layer-clouds');
	var $car = $('.layer-car');
	var $hiddenEl = $('.js-visibility');

	var $window = $(window);

	var $headerT = $('.header-title');
	var $menu = $('.header-menu');

	var $slides = $('.content_item');
	var $menuLinks = $('a[href^="#"]');
	var marginTop = 90;
	var firstActive = $slides.first().addClass('active').offset().top;

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

	$menuLinks.click(function () {
		$slides.removeClass('active');
		var current = $(this).attr('href');
		$(current).addClass('active');
		var offset = $(current).offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop - marginTop;
		if (current.length !== 0) {
			$('html, body').animate({
				scrollTop: totalScroll
			}, 2000, 'easeInOutExpo');
		}
		return false;
	});

//Content scroll
	
	$window.load(function () {
		var timer = setTimeout(function () {
			$('body, html').animate({
				scrollTop: firstActive - marginTop
			}, 2000, 'easeInOutExpo');

			clearTimeout(timer);
		}, 800);
	});

	$(document).on('mousewheel DOMMouseScroll', function (e) {
		e.preventDefault();
		
		var activeSlide = $('.content_item.active');
		var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;

		if (delta < 0) {

			next = activeSlide.next();
			if (next.length) {
				var timer = setTimeout(function () {
					$('body, html').animate({
						scrollTop: next.offset().top - marginTop
					}, 2000, 'easeInOutExpo');
					next.addClass('active')
						.siblings().removeClass('active');
					clearTimeout(timer);
				});
			}
		} else {
			prev = activeSlide.prev();

			if (prev.length) {
				var timer = setTimeout(function () {
					$('body, html').animate({
						scrollTop: prev.offset().top - marginTop
					}, 2000, 'easeInOutExpo');
					prev.addClass('active')
						.siblings().removeClass('active');
					clearTimeout(timer);
				});
			}

		}
	});

});