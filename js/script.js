const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})


const active_link = document.querySelector(".active_link");

active_link.addEventListener("click", () => {
    container.classList.toggle("active");
})