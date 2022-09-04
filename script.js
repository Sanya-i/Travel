const burger = document.querySelector(".header__nav");
const burgerMenu = document.querySelector(".burger");
const close = document.querySelector(".close");
const bg = document.querySelector(".black__burger");


burgerMenu.addEventListener("click", () => {
   burger.classList.add("header__nav__active")
})