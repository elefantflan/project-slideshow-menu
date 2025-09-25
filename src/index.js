import "./styles/main.scss";
import {
  colorado,
  iceland,
  waterfall,
  autumn,
  sea,
  flowers,
  creek,
  mountains,
} from "./carousel";

const body = document.body;

// dropdown
const divMenu = document.querySelector(".dropdown-container");
const listMenu = document.querySelector(".dropdown-menu");
const btnMenu = document.querySelector(".menu-title");

btnMenu.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    listMenu.classList.toggle("visible");
  }
});

window.addEventListener("click", (e) => {
  if (!divMenu.contains(e.target)) {
    listMenu.classList.remove("visible");
  }
});

//slide
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});