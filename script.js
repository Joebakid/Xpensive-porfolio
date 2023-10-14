const light = document.getElementById("nav-bar__link-light");
const body = document.querySelector("body");
const bar = document.querySelectorAll(".bar-tech");
const mode = localStorage.getItem("mode"); //STORE USER PREFERNCE IN BROWSER
const subText = document.querySelector(".main-content__sub-text");
const bars = document.querySelectorAll(".bar");
const hamburgerMenu = document.querySelector("hamburger__wrapper");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar__wrapper");
const navSlide = document.querySelector(".nav-slide");

//LIGHT-MODE FUNC
function enableLightMode() {
  body.style.background = "white";
  body.style.color = "black";
  subText.style.color = "black";
  bar.forEach(function (bar) {
    bar.style.background = "black";
  });
  bars.forEach(function (bar) {
    bar.style.background = "black";
  });

  localStorage.setItem("mode", "light");
}

//DARK-MODE FUNC
function enableDarkMode() {
  body.style.background = "black";
  body.style.color = "white";
  body.style.transition = "all 0.5s ease-in";
  subText.style.color = "white";
  bar.forEach(function (bar) {
    bar.style.background = "white";
  });
  bars.forEach(function (bar) {
    bar.style.background = "white";
  });
  localStorage.setItem("mode", "dark");
}

light.addEventListener("click", toggle);

function toggle() {
  if (light.textContent === "Dark") {
    light.textContent = "Light";
    enableDarkMode();
  } else {
    light.textContent = "Dark";
    enableLightMode();
  }
}

//LOCAL STORAGE LOGIC
if (mode === "dark") {
  enableDarkMode();
  light.textContent = "Light";
} else {
  enableLightMode();
  light.textContent = "Dark";
}
