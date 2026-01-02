const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", function () {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
  } else {
    navLinks.style.maxHeight = null;
  }
});

// Reset on resize (important for switching between mobile/desktop)
window.addEventListener("resize", function () {
  if (window.innerWidth > 992) {
    navLinks.classList.remove("open");
    navLinks.style.maxHeight = "none";
  } else {
    navLinks.style.maxHeight = null;
  }
});
