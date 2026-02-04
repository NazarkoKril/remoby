const swiper = new Swiper('.swiper_campaign', {

  loop: false,
  watchOverflow: true,

  breakpoints: {

    320: {
		  spaceBetween: 16,
      slidesPerView: 1,
      grid: {
        rows: 3,
        fill: 'row',
      },
    },

    640: {
		  spaceBetween: 16,
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    1024: {
		  spaceBetween: 24,
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
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

