function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// task-6.js

const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const input = controls.querySelector("input");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  destroyBoxes();

  let boxesHTML = "";
  for (let i = 0; i < amount; i++) {
    const boxWidth = 30 + i * 10;
    const boxHeight = 30 + i * 10;
    const boxColor = getRandomHexColor();
    boxesHTML += `<div style="width: ${boxWidth}px; height: ${boxHeight}px; background-color: ${boxColor}"></div>`;
  }

  boxes.innerHTML = boxesHTML;
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}
