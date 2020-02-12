'use strict';

$(function () {

	$('.more-info').click(function () {

		var $this = $(this);

		$this.prev('.hidden').toggleClass('open-text');

		$this.prev('.hidden').slideToggle();

		if (!$(this).data('status')) {
			$(this).html('меньше информации');
			$(this).data('status', true);
		} else {
			$(this).html('больше информации');
			$(this).data('status', false);
		}
	});

	// $(".main-slider__cont").each((i, el) => {
	// 	let $slider = $(el).find(".main-slider");

	$(".main-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		appendArrows: $(".main-slider-arrow")

	});

	// $slider.on("beforeChange", (e, slick, curSlide, nextSlide) => {
	// 	$(".slider-nav__link").removeClass("active");

	// 	$(".slider-nav__list").find("li:eq("+nextSlide+")").find(".slider-nav__link").addClass("active");
	// });


	// });


	// $("body").on("click", ".slider-nav__link", function(){
	// 	let $this = $(this),
	// 			index = $this.closest("li").index();

	// 	$(".main-slider").slick("slickGoTo", index);

	// });

	var menu = $('.slider-nav__list').clone();
	var phone = $('.head .head-phone').clone();
	var soc = $('.footer .soc').clone();

	$('.mobile-menu').append(menu);
	$('.mobile-menu').append(phone);
	$('.mobile-menu').append(soc);

	reInitFancybox();

	$('.burger').click(function () {
		$(this).toggleClass('open');
		$('body').toggleClass("main-nav--open");
	});

	$(".advantages-slider__list").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 1000,
		appendArrows: $(".advantages-arrow"),
		responsive: [{
			breakpoint: 820,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 660,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".slider-full").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		accessibility: false,
		// arrows: true,
		speed: 1000,
		autoplay: false,
		swipeToSlide: true,
		autoplaySpeed: 1,
		// variableWidth: true,
		appendArrows: $(".slider-full-arrow"),
		responsive: [{
			breakpoint: 1050,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 660,
			settings: {
				slidesToShow: 1
			}
		}]
	}).on("swipeStart", function () {
		console.log("swipeStart");

		$(".slider-full").find(".slick-slide").each(function (i, el) {
			var $this = $(el);

			$this.removeClass("fancybox").removeAttr("data-fancybox");
		});
	}).on("swipe", function (_) {
		console.log("swipe");
		$(".slider-full").find(".slick-slide").each(function (i, el) {
			var $this = $(el);

			$this.attr("data-fancybox", "gallery");
		});
	});

	$(".testemonials__list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: true,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 1000,
		appendArrows: $(".testemonials-arrow"),
		responsive: [{
			breakpoint: 660,
			settings: {
				adaptiveHeight: true
			}
		}]

	});
});

$(window).on("load scroll touchmove", function () {
	// if ($(window).scrollTop() > 800){
	// 	$(".scroll-top").fadeIn(300);
	// }else{
	// 	$(".scroll-top").fadeOut(300);
	// };

	if ($(window).width() > 660) {

		if ($(window).scrollTop() > 10) {
			$('.head').addClass('js__scrolled');
		} else {
			$('.head').removeClass('js__scrolled');
		}
	}
});

var reInitFancybox = function reInitFancybox(_) {
	$("a.fancybox:not(.slider-full__item)").fancybox({
		buttons: ['thumbs', 'close'],
		touch: {
			vertical: false
		},
		afterShow: function afterShow() {
			console.log(1234);
		}
	});
};
//# sourceMappingURL=common.js.map
