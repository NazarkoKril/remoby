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

