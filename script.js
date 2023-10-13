const light = document.getElementById("nav-bar__link-light");
const body = document.querySelector("body");

light.addEventListener("click", toggle);
dark.addEventListener("click", toggle);

function toggle() {
  if (light.textContent === "Light") {
    light.textContent = "Dark";
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "all 0.5s ease-in";
  } else {
    light.textContent = "Light";
    body.style.background = "white";
    body.style.color = "black";
  }
}
