const VARIANT = 10;

let table = document.getElementById("table");
let colorPicker = document.getElementById("color-picker");
colorPicker.value = "#cee3e4";
colorPicker.style.display = "none";

colorPicker.addEventListener("input", (event) => {
  document.getElementById(VARIANT).style.backgroundColor = event.target.value;
});

for (let i = 0; i < 6; i++) {
  const row = [];
  let rowContainer = document.createElement("div");
  rowContainer.classList.add("row");
  for (let j = 0; j < 6; j++) {
    const squareNumber = 6 * i + j + 1;
    row.push(squareNumber);
    let square = document.createElement("div");
    square.classList.add("square");
    square.id = squareNumber;
    square.innerText = squareNumber;

    if (squareNumber === VARIANT) {
      const numbersToHighlight = getNumbersToHighlight(VARIANT);
      square.addEventListener("mouseover", () => {
        numbersToHighlight.forEach((numberToHighlight) => {
          document.getElementById(
            numberToHighlight
          ).style.backgroundColor = getRandomColor();
        });
      });

      square.addEventListener("mouseout", () => {
        numbersToHighlight.forEach((numberToHighlight) => {
          document.getElementById(numberToHighlight).style.backgroundColor =
            "#cee3e4";
        });
      });

      square.addEventListener("click", () => {
        colorPicker.style.display = "block";
      });
    }

    rowContainer.appendChild(square);
  }

  table.appendChild(rowContainer);
}

function getNumbersToHighlight(variant) {
  let offset = variant % 6 === 0 ? 0 : 6;
  const ceil = variant + offset - ((variant + 6) % 6);
  const numbersToHighlight = [];
  for (let i = variant; i <= ceil; i += 2) {
    numbersToHighlight.push(i);
  }

  return numbersToHighlight;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
  const r = getRandomInt(255);
  const g = getRandomInt(255);
  const b = getRandomInt(255);

  return `rgb(${r}, ${g}, ${b})`;
}
