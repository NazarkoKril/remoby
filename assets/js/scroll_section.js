class ScrollSticky {
	constructor() {
		this.content = document.getElementById("content");
		this.mediaWrap = document.getElementById("mediaWrap");
		this.mediaSticky = document.querySelector(".media-sticky");

		this.steps = [...document.querySelectorAll(".step")];
		this.media = [...document.querySelectorAll(".media")];

		if (!this.content || !this.mediaWrap || !this.mediaSticky) return;

		this.init();
	}

	init() {
		
		this.updateLayout();
		this.activate(0);

		
		this.initObserver();

		
		window.addEventListener("resize", () => this.updateLayout());
	}

	
	updateLayout() {
		
		this.mediaWrap.style.minHeight = this.content.offsetHeight + "px";

		
		const viewportHeight = window.innerHeight;
		const stickyHeight = this.mediaSticky.offsetHeight;

		const top = Math.max((viewportHeight - stickyHeight) / 2, 80);

		this.mediaSticky.style.top = `${top}px`;
	}

	
	initObserver() {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					const index = this.steps.indexOf(entry.target);
					if (index !== -1) this.activate(index);
				});
			},
			{
				root: null,
				rootMargin: "-50% 0px -50% 0px",
				threshold: 0,
			},
		);

		this.steps.forEach((step) => observer.observe(step));
	}

	
	activate(index) {
		this.steps.forEach((step, i) =>
			step.classList.toggle("active", i === index),
		);

		this.media.forEach((media, i) =>
			media.classList.toggle("active", i === index),
		);
	}
}


document.addEventListener("DOMContentLoaded", () => {
	new ScrollSticky();
});
