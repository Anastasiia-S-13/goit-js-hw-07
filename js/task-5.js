const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeColor);
const body = document.querySelector("body");
const color = document.querySelector(".color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = body.style.backgroundColor;
}

