console.log("slider.js loaded");

const slider = document.getElementById("slider");
const slides = slider ? slider.querySelectorAll(".slide") : [];

let currentSlide = 0;
let isScrolling = false;
let settleTimer = null;

function goToSlide(index){
  if (!slider || !slides.length) return;

  currentSlide = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach(s => {
    s.classList.remove("is-active");
    s.classList.remove("is-settled");
  });

  slides[currentSlide].classList.add("is-active");
  slider.style.transform = `translateY(-${currentSlide * 100}vh)`;

  if (settleTimer) clearTimeout(settleTimer);
  settleTimer = setTimeout(() => {
    slides[currentSlide].classList.add("is-settled");
  }, 850);
}

if (slides.length) goToSlide(0);

window.addEventListener("wheel", (e) => {
  if (!slides.length) return;
  e.preventDefault();
  if (isScrolling) return;

  isScrolling = true;
  const dir = e.deltaY > 0 ? 1 : -1;
  goToSlide(currentSlide + dir);

  setTimeout(() => { isScrolling = false; }, 850);
}, { passive: false });

const scrollHintBtn = document.getElementById("scrollHintBtn");
if (scrollHintBtn && slides.length){
  scrollHintBtn.addEventListener("click", () => goToSlide(1));
}
