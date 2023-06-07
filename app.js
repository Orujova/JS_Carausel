

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slides = document.querySelectorAll(".common");

let active = 0;

right.addEventListener("click", () => {
  active = active + 1;
  if (active >= slides.length) {
    active = 0;
  }
  updateCarousel();
});

left.addEventListener("click", () => {
  active = active - 1;
  if (active < 0) {
    active = slides.length - 1;
  }
  updateCarousel();
});

const updateCarousel = () => {
  slides.forEach((slide, index) => {
    if (index === active) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
};

updateCarousel();
