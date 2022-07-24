const btnNav = document.querySelector(".btn-mobile");
const hederEl = document.querySelector(".nav");

btnNav.addEventListener("click", () => {
  hederEl.classList.toggle("nav-open");
});
