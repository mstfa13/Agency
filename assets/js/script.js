'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * Project filter functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter-btn');
        
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          // Show all if 'all' is selected, otherwise filter by category
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
    
    // Initialize project cards with transition
    projectCards.forEach(card => {
      card.style.transition = 'all 0.3s ease';
    });
  }
});



/**
 * Testimonials Slider functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;

  if (slides.length > 0) {
    
    function updateSlider() {
      // Remove all classes
      slides.forEach(slide => {
        slide.classList.remove('active', 'prev', 'next');
      });

      // Update indicators
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
      });

      // Set active slide
      slides[currentSlide].classList.add('active');

      // Set previous slide (if exists)
      const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      slides[prevIndex].classList.add('prev');

      // Set next slide (if exists)
      const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      slides[nextIndex].classList.add('next');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }

    // Event listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
    }

    // Indicator click events
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });

    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const slider = document.querySelector('.testimonial-slider');
    if (slider) {
      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
          // Swipe left - next slide
          nextSlide();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
          // Swipe right - previous slide
          prevSlide();
        }
      }
    }

    // Auto-play (optional - uncomment to enable)
    // setInterval(nextSlide, 5000);

    // Initialize
    updateSlider();
  }
});
