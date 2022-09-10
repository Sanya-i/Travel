const burger = document.querySelector(".header__nav");
const burgerMenu = document.querySelector(".burger");
const close = document.querySelector(".close");
const bg = document.querySelector(".black");
const link = document.querySelectorAll(".header__link")


burgerMenu.addEventListener("click", () => {
   burger.classList.add("header__nav__active")
   bg.classList.add("black__burger")
})

close.addEventListener("click", () => {
   burger.classList.remove("header__nav__active")
   bg.classList.remove("black__burger")
})
bg.addEventListener("click", () => {
   burger.classList.remove("header__nav__active")
   bg.classList.remove("black__burger")
})

link.forEach(element => {
   element.addEventListener("click", () => {
      burger.classList.remove("header__nav__active")
      bg.classList.remove("black__burger")
   })
   
});