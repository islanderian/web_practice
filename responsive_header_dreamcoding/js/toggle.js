const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector(".header_nav");
const sns = document.querySelector(".sns");

menuBar.addEventListener("click", () => {
  nav.classList.toggle("menu-show");
  sns.classList.toggle("menu-show");
});
