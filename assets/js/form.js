document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");
    const rightBlock = document.querySelector(".right");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        rightBlock.classList.add("success-active");
    });
});
