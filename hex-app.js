const body = document.querySelector(`body`);
const button = document.querySelector(`.container-button`);
const span = document.querySelector(`.container-color`);

/* Is called when the page is loaded so background color's body is always the same at the start */
function initBackgroundColor(hexColor) {
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
}

/* Generate a random integer between 0 and range */
function generateIndex(range) {
  return Math.floor(Math.random() * range);
}

/* Generate a random Hexadecimal character */
function generateHexCharacter() {
  const hexCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  return hexCharacters[generateIndex(hexCharacters.length)];
}

/* Generate a random Hexadecimal color */
function generateHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += generateHexCharacter();
  }
  console.log(hexColor);
  return hexColor;
}

function initChangeColor() {
  const hexColor = generateHexColor();
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
}

initBackgroundColor("#ccc5b9");

button.addEventListener(`click`, () => {
  initChangeColor();
});
