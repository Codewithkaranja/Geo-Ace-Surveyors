document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const contactForm = document.getElementById("contactForm");

  /* ===== MOBILE NAV TOGGLE ===== */
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      if (navLinks.classList.contains("open")) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
      } else {
        navLinks.style.maxHeight = null;
      }
    });

    // Reset on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        navLinks.classList.remove("open");
        navLinks.style.maxHeight = "none";
      } else {
        navLinks.style.maxHeight = null;
      }
    });
  }

  /* ===== CONTACT FORM ===== */
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = document.getElementById("firstName")?.value;
      const lastName = document.getElementById("lastName")?.value;
      const email = document.getElementById("email")?.value;
      const message = document.getElementById("message")?.value;

      if (!firstName || !lastName || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      alert("Thank you for your message! We will get back to you within 24 hours.");
      contactForm.reset();
    });
  }

  /* ===== SCROLL ANIMATION ===== */
  const actionCards = document.querySelectorAll(".action-card");

  actionCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;

    actionCards.forEach(card => {
      if (card.getBoundingClientRect().top < windowHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });

  window.dispatchEvent(new Event("scroll"));
});
