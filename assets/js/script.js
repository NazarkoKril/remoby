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