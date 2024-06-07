document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var carousel = document.getElementById("carousel");
    var slides = document.querySelectorAll(".carousel-slide");
    var totalSlides = slides.length;
  
    document.getElementById("nextBtn").addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });
  
    document.getElementById("prevBtn").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateCarousel();
    });
  
   
    var navLinks = document.querySelectorAll(".HhjGmK a");
    navLinks.forEach(function(link, index) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            goToSlide(index);
        });
    });
  
    function updateCarousel() {
        var newTransformValue = -currentIndex * 90 + "vw";
        carousel.style.transform = "translateX(" + newTransformValue + ")";
    }
  
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  