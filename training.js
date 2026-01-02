document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const faqItems = document.querySelectorAll(".faq-item");
  const trainingForm = document.getElementById("trainingForm");

  /* =====================
     MOBILE NAV TOGGLE
  ====================== */
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      if (navLinks.classList.contains("open")) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
      } else {
        navLinks.style.maxHeight = null;
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        navLinks.classList.remove("open");
        navLinks.style.maxHeight = "none";
      } else {
        navLinks.style.maxHeight = null;
      }
    });
  }

  /* =====================
        FAQ ACCORDION
  ====================== */
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });

  /* =====================
       FORM SUBMISSION
  ====================== */
  if (trainingForm) {
    trainingForm.addEventListener("submit", e => {
      e.preventDefault();

      const fields = ["firstName", "lastName", "email", "phone", "course"];
      const isValid = fields.every(id => document.getElementById(id)?.value);

      if (!isValid) {
        alert("Please fill in all required fields.");
        return;
      }

      alert(
        "Thank you for your registration! We will contact you shortly to confirm your enrollment."
      );
      trainingForm.reset();
    });
  }
});
