const swiper = new Swiper(".swiper_campaign", {

	breakpoints: {
        320: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 16,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

const swiper1 = new Swiper(".swiper_review", {

	breakpoints: {
        320: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		740: {
			slidesPerView: 2,
			spaceBetween: 16,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

