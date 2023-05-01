"use strict";

// //navigation
// menuToggler.addEventListener('click', ev => {
// 	menu.classList.toggle('open');
// 	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
// });

//slide
const slides = document.querySelectorAll(".slide");
const next = document.querySelectorAll("#next");
const prev = document.querySelector("#prev");

next.addEventListener("click",e => {
  nextSlide();
});
const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove ("current");
  if (current.nextElementSibling) {
      current.nextElementSibling.classList.add("current");
    } else{
      slides[0].classList.add("current");
    }
  }

  prev.addEventListener("click",e => {
  prevSlide();
});
 const prevSlide = () => {
  const current = document.querySelectorAll(".current");
  current.classList.remove ("current");
  if(current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else{
    slides[slides.length-1].classList.add("current");
  }
}
