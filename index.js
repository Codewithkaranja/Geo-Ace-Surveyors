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
//services section slider
const swiper = new Swiper(".services-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  effect: "coverflow", // 3D effect
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

//stats section
  const counters = document.querySelectorAll(".stat-number");
  const options = { threshold: 0.5 }; // Trigger when 50% visible

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "";
        let count = 0;
        const increment = target / 200; // smoother, smaller steps

        const updateCounter = () => {
          count += increment;
          if(count < target) {
            counter.innerText = Math.ceil(count) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + suffix;
          }
        };

        // Stagger start based on index for premium effect
        const parentIndex = Array.from(counters).indexOf(counter);
        setTimeout(() => {
          updateCounter();
          counter.parentElement.classList.add("fade-up");
        }, parentIndex * 300); // 300ms between each counter

        observer.unobserve(counter); // Animate only once
      }
    });
  }, options);

  counters.forEach(counter => counterObserver.observe(counter));

  //industry section 
 const swipers = new Swiper('.industries-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  speed: 800, // Smooth transition speed (ms)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 1000,             // Delay before moving to next slide
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 }
  },
});

//testimonial
// Auto-Rotate Testimonials
// Auto-Rotate Testimonials with Fade-In
const testimonials = document.querySelectorAll('.testimonial-item');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.opacity = i === index ? '1' : '0';
    t.style.transform = i === index ? 'translateY(0)' : 'translateY(20px)';
  });
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

// Initialize
showTestimonial(current);
setInterval(nextTestimonial, 3000); // Rotate every 5 seconds

 // Typewriter Effect
const typewriterElement = document.getElementById("typewriter");
const words = ["Precision", "Innovation", "Geo-Intelligence"];
let wordIndex = 0, charIndex = 0, isDeleting = false, typeSpeed = 100;

function typeWriter() {
  const currentWord = words[wordIndex];
  if(isDeleting){
    typewriterElement.textContent = currentWord.substring(0,charIndex-1);
    charIndex--; typeSpeed = 150;
  } else {
    typewriterElement.textContent = currentWord.substring(0,charIndex+1);
    charIndex++; typeSpeed = 300;
  }
  if(!isDeleting && charIndex===currentWord.length){ isDeleting=true; typeSpeed=1000; }
  else if(isDeleting && charIndex===0){ isDeleting=false; wordIndex=(wordIndex+1)%words.length; typeSpeed=200; }
  setTimeout(typeWriter,typeSpeed);
}
setTimeout(typeWriter,2000);

// Hero Fade Slider
const slides = document.querySelectorAll('.hero-slider img');
let current1 = 0;

function showNextSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  current1 = (current1 + 1) % slides.length;
  slides[current1].classList.add('active');
}

setInterval(showNextSlide, 4000); // Change every 4 seconds