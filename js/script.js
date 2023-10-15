const btn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__menu-btn");
const mg = document.querySelector(".header__nav");
const list = document.querySelector(".nav__list");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});

btn.addEventListener("click", () => {
  mg.classList.toggle("header__nav-m");
});

btn.addEventListener("click", () => {
  list.classList.toggle("nav__list-open");
});
