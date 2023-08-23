/* ACCORDION */

const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }
  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));

//typer writer
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "money";
  }, 0);
  setTimeout(() => {
    text.textContent = "Fun";
  }, 4000);
  setTimeout(() => {
    text.textContent = "pleasure";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
