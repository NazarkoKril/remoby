document.getElementById("subform").addEventListener("submit", function(e) {
    e.preventDefault();
    this.querySelector(".block").classList.add("success-active");
});