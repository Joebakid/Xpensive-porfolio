const light = document.getElementById("nav-bar__link-light");
const body = document.querySelector("body");
const bar = document.querySelectorAll(".bar-tech");

light.addEventListener("click", toggle);
dark.addEventListener("click", toggle);

function toggle() {
  if (light.textContent === "Light") {
    light.textContent = "Dark";
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "all 0.5s ease-in";
    bar.forEach(function (bar) {
      bar.style.background = "white";
    });
  } else {
    light.textContent = "Light";
    body.style.background = "white";
    body.style.color = "black";
    bar.forEach(function (bar) {
      bar.style.background = "black";
    });
  }
}
