// burger
document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".burger");
	const mobileContainer = document.querySelector(".header-mobile-container");
	const closeBtn = document.querySelector(".header-close");
	const body = document.body;

	if (burger && mobileContainer && closeBtn) {
		burger.addEventListener("click", () => {
			mobileContainer.classList.add("active");
				body.style.overflow = "hidden";
		});

		closeBtn.addEventListener("click", () => {
			mobileContainer.classList.remove("active");
			body.style.overflow = "";
		});
	}
});



document.addEventListener("DOMContentLoaded", () => {
AOS.init({
    delay: 100,
    duration: 500, 
    easing: 'ease-out',
    once: true,
	disable: 'mobile'
});
});


//cookie

document.addEventListener('DOMContentLoaded', () => {
	const popup = document.getElementById('cookiePopup');
	const acceptBtn = document.getElementById('cookieAccept');
	const rejectBtn = document.getElementById('cookieReject');

	const COOKIE_KEY = 'cookieConsent'; 
	

	const savedChoice = localStorage.getItem(COOKIE_KEY);

	
	if (!savedChoice) {
		requestAnimationFrame(() => {
			popup.classList.add('is-visible');
		});
	}

	acceptBtn.addEventListener('click', () => {
		localStorage.setItem(COOKIE_KEY, 'accepted');
		enableCookies();
		hidePopup();
	});

	rejectBtn.addEventListener('click', () => {
		localStorage.setItem(COOKIE_KEY, 'rejected');
		disableCookies();
		hidePopup();
	});

	function hidePopup() {
		popup.classList.remove('is-visible');
		popup.classList.add('is-hidden');

		setTimeout(() => {
			popup.remove();
		}, 350);
	}

	function enableCookies() {
	
		console.log('Cookies enabled');
	}

	function disableCookies() {
		
		console.log('Cookies rejected');
	}
});

