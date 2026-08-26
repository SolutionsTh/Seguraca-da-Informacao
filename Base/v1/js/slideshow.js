document.querySelectorAll(".slideshow").forEach((slideshow) => {
  let currentSlide = 0;
  const slides = slideshow.querySelectorAll(".slide");
  const prevBtn = slideshow.querySelector(".nav-prev");
  const nextBtn = slideshow.querySelector(".nav-next");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Inicializa o primeiro slide
  showSlide(currentSlide);
});
