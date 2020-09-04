let burger = document.querySelector(".burger");
let navMenu = document.querySelector(".navbar-menu");

burger.addEventListener("click", function () {
  event.preventDefault();
  burger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
});
