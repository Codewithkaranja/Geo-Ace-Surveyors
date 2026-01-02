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

        // Form submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show a success message
            alert('Thank you for your message! We will get back to you within 24 hours.');
            contactForm.reset();
        });

        // Adjust nav display on window resize
        window.addEventListener('resize', function() {
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth > 992) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });

        // Simple animation for action cards on scroll
        window.addEventListener('scroll', function() {
            const actionCards = document.querySelectorAll('.action-card');
            const windowHeight = window.innerHeight;
            
            actionCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                
                if (cardPosition < windowHeight - 100) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });

        // Initialize action cards with hidden state
        document.addEventListener('DOMContentLoaded', function() {
            const actionCards = document.querySelectorAll('.action-card');
            
            actionCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s, transform 0.5s';
            });
            
            // Trigger the scroll event to check initial positions
            window.dispatchEvent(new Event('scroll'));
        });