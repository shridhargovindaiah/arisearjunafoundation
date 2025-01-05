const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("primary-nav");

navToggle.addEventListener("click", () => {
  if (navToggle.getAttribute("aria-expanded") === "false") {
    navToggle.setAttribute("aria-expanded", "true");
    // primaryNav.style.display = "block";
  } else {
    navToggle.setAttribute("aria-expanded", "false");
    // primaryNav.style.display = "none";
  }
});
