// Project data
      const projects = {
        1: {
          title: "LAPSSET Transport Corridor Mapping",
          client: "LAPSSET Authority",
          location: "Northern Kenya",
          service: "UAV LiDAR Surveys & Topographic Mapping",
          overview:
            "This project involved mapping a 240km transport corridor for the Lamu Port-South Sudan-Ethiopia Transport (LAPSSET) corridor. Using advanced drone LiDAR technology, we captured high-precision topographic data to support the planning and design of this critical infrastructure project.",
          result:
            "Generated high-precision 3D terrain models with 5cm accuracy for 240km transport corridor planning.",
          images: [
            "https://images.unsplash.com/photo-1540959733332-8cbd5d35a0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          ],
          impacts: [
            { value: "85%", label: "Time Saved" },
            { value: "5cm", label: "Accuracy" },
            { value: "240km", label: "Area Mapped" },
            { value: "98%", label: "Client Satisfaction" },
          ],
          technology:
            "DJI Matrice 300 RTK with Zenmuse L1 LiDAR sensor, Ground control points, Advanced point cloud processing software",
        },
        2: {
          title: "High-Voltage Power Line Inspection",
          client: "Kenya Power",
          location: "Central Kenya",
          service: "Utility Infrastructure Inspection",
          overview:
            "Conducted comprehensive inspection of 150km of high-voltage transmission lines using specialized drones equipped with thermal and zoom cameras. The inspection identified critical faults and vegetation encroachments that posed risks to the power infrastructure.",
          result:
            "Identified 23 critical faults and vegetation encroachments across 150km of transmission lines.",
          images: [
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
          ],
          impacts: [
            { value: "0", label: "Safety Incidents" },
            { value: "60%", label: "Cost Reduction" },
            { value: "150km", label: "Lines Inspected" },
            { value: "23", label: "Faults Identified" },
          ],
          technology:
            "DJI Matrice 210 V2 with Zenmuse XT2 thermal camera and Z30 zoom camera, Automated flight planning software",
        },
        // Additional projects would be defined here
      };

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


      // Filter functionality
      const filterButtons = document.querySelectorAll(".filter-btn");
      const projectCards = document.querySelectorAll(".project-card");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Update active button
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          const filter = button.getAttribute("data-filter");

          // Filter projects
          projectCards.forEach((card) => {
            if (
              filter === "all" ||
              card.getAttribute("data-category").includes(filter)
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });

      // Modal functionality
      const modal = document.getElementById("projectModal");
      const closeModal = document.querySelector(".close-modal");
      const viewProjectLinks = document.querySelectorAll(".view-project");

      viewProjectLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const projectId = link.getAttribute("data-project");
          openProjectModal(projectId);
        });
      });

      closeModal.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });

      function openProjectModal(projectId) {
        const project = projects[projectId];
        if (!project) return;

        // Set modal content
        document.getElementById("projectOverview").textContent =
          project.overview;
        document.getElementById("technologyUsed").textContent =
          project.technology;

        // Set up image slider
        const slider = document.getElementById("modalSlider");
        const slideNav = document.getElementById("slideNav");
        slider.innerHTML = "";
        slideNav.innerHTML = "";

        project.images.forEach((image, index) => {
          const slide = document.createElement("div");
          slide.className = `slide ${index === 0 ? "active" : ""}`;
          slide.innerHTML = `<img src="${image}" alt="${project.title}">`;
          slider.appendChild(slide);

          const dot = document.createElement("div");
          dot.className = `slide-dot ${index === 0 ? "active" : ""}`;
          dot.setAttribute("data-slide", index);
          slideNav.appendChild(dot);

          dot.addEventListener("click", () => {
            showSlide(index);
          });
        });

        // Set up impact grid
        const impactGrid = document.getElementById("impactGrid");
        impactGrid.innerHTML = "";

        project.impacts.forEach((impact) => {
          const impactCard = document.createElement("div");
          impactCard.className = "impact-card";
          impactCard.innerHTML = `
                    <div class="impact-value">${impact.value}</div>
                    <div class="impact-label">${impact.label}</div>
                `;
          impactGrid.appendChild(impactCard);
        });

        // Set up meta information
        const modalMeta = document.getElementById("modalMeta");
        modalMeta.innerHTML = `
                <div class="meta-item">
                    <h4>Client</h4>
                    <p>${project.client}</p>
                </div>
                <div class="meta-item">
                    <h4>Location</h4>
                    <p>${project.location}</p>
                </div>
                <div class="meta-item">
                    <h4>Service</h4>
                    <p>${project.service}</p>
                </div>
                <div class="meta-item">
                    <h4>Result</h4>
                    <p>${project.result}</p>
                </div>
            `;

        // Show modal
        modal.style.display = "block";
      }

      function showSlide(index) {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".slide-dot");

        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
      }

      // Before/After slider functionality
      const baSlider = document.querySelector(".ba-slider");
      const baBefore = document.querySelector(".ba-before");
      let isResizing = false;

      baSlider.addEventListener("mousedown", (e) => {
        isResizing = true;
        document.addEventListener("mousemove", handleResize);
        document.addEventListener("mouseup", stopResize);
      });

      function handleResize(e) {
        if (!isResizing) return;

        const container = document.querySelector(".ba-container");
        const containerRect = container.getBoundingClientRect();
        const xPosition = e.clientX - containerRect.left;

        if (xPosition >= 0 && xPosition <= containerRect.width) {
          const percentage = (xPosition / containerRect.width) * 100;
          baBefore.style.width = `${percentage}%`;
          baSlider.style.left = `${percentage}%`;
        }
      }

      function stopResize() {
        isResizing = false;
        document.removeEventListener("mousemove", handleResize);
        document.removeEventListener("mouseup", stopResize);
      }

      // Touch support for before/after slider
      baSlider.addEventListener("touchstart", (e) => {
        isResizing = true;
        document.addEventListener("touchmove", handleTouchResize);
        document.addEventListener("touchend", stopResize);
      });

      function handleTouchResize(e) {
        if (!isResizing) return;

        const container = document.querySelector(".ba-container");
        const containerRect = container.getBoundingClientRect();
        const xPosition = e.touches[0].clientX - containerRect.left;

        if (xPosition >= 0 && xPosition <= containerRect.width) {
          const percentage = (xPosition / containerRect.width) * 100;
          baBefore.style.width = `${percentage}%`;
          baSlider.style.left = `${percentage}%`;
        }
      }