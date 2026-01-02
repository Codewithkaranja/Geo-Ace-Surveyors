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


      // FAQ functionality
      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
          // Close all other items
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active");
            }
          });

          // Toggle current item
          item.classList.toggle("active");
        });
      });

      // Form submission
      const trainingForm = document.getElementById("trainingForm");

      trainingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Basic form validation
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const course = document.getElementById("course").value;

        if (!firstName || !lastName || !email || !phone || !course) {
          alert("Please fill in all required fields.");
          return;
        }

        // In a real application, you would send this data to a server
        // For this example, we'll just show a success message
        alert(
          "Thank you for your registration! We will contact you shortly to confirm your enrollment."
        );
        trainingForm.reset();
      });

      // Adjust nav display on window resize
      window.addEventListener("resize", function () {
        const navLinks = document.querySelector(".nav-links");
        if (window.innerWidth > 992) {
          navLinks.style.display = "flex";
        } else {
          navLinks.style.display = "none";
        }
      });