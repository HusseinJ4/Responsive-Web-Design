const slides = document.querySelectorAll("#slideshow img");
let currentSlide = 0;

function showslide(slideNumber) {
  document.querySelector("#slideshow img.current").classList.remove('current');
  slides[slideNumber].classList.add("current");
}

function nextSlide() {

  if(currentSlide >= slide.length -1){
  // currntslide
  // else
  currentSlide++;


  showSlide(currentSlide);
}


function prevSlide(){
  if(currentSlide <= 0) {
    currentSlide = slides.length - 1;
  } else {
      currentSlide--;
  }
 }
}
