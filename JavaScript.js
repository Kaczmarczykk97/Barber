const sideNav = document.querySelector(".sideNav");
const menuBtn = document.querySelector(".menuBtn");
const menuIcon = document.querySelector(".menu-icon");

sideNav.style.right = "-25rem";

menuBtn.addEventListener("click", () => {
  if (sideNav.style.right === "-25rem") {
    sideNav.style.right = "0";
    menuIcon.name = "close-outline";
  } else {
    sideNav.style.right = "-25rem";
    menuIcon.name = "menu-outline";
  }
});

const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
