// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 50,
	startPosition: 0,
	items: 1,
	responsive: {
		540: {
			items: 3,
			startPosition: 1,
		},
		1170: {
			items: 3,
			margin: 30,
		},
	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});