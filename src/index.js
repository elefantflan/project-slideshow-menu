import "./styles/main.scss";
import {colorado, iceland, waterfall, autumn, sea, flowers, creek, mountains} from "./carousel";

const body = document.body;

// dropdown
const divMenu = document.querySelector('.dropdown-container')
const listMenu = document.querySelector('.dropdown-menu')
const btnMenu = document.querySelector('.menu-title')

btnMenu.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      listMenu.classList.toggle("visible");
    }  
  })

window.addEventListener("click", (e) => {
    if (!divMenu.contains(e.target)) {
      listMenu.classList.remove("visible")
    }
  })