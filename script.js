const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll("#menu a"); 

if (hamburger && menu) {
  
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

   
  const slideWidth = slides[0].getBoundingClientRect().width;

    
  slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
      
      track.style.transform = `translateX(-${targetSlide.style.left})`;

     
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
  };

    
  nextButton.addEventListener("click", () => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;

      if (nextSlide) {
      moveToSlide(track, currentSlide, nextSlide);
      }
  });

    
  prevButton.addEventListener("click", () => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;

      if (prevSlide) {
      moveToSlide(track, currentSlide, prevSlide);
      }
  });