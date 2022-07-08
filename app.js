const body = document.querySelector(`body`);
const button = document.querySelector(`.container-button`);
const containerText = document.querySelector(`.container-text`);
const span = document.querySelector(`.container-color`);
let colorSystem = ``;
let colorIsDark = false;

/* Generate a random integer between 0 and range */
function generateRandomNumber(range) {
  return Math.floor(Math.random() * range);
}

/* Is called when the page is loaded so background color's body is always the same at the start */
function initBackgroundColor(hexColor) {
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
}

/* Return a random Rgb color */
function pickRgbColor() {
  const red = generateRandomNumber(256);
  const green = generateRandomNumber(256);
  const blue = generateRandomNumber(256);

  /* If the three primary color's value added to 200 or below, i consider the color to be dark and so will change the font color in the center of the page to a lighter one */
  if (red + green + blue <= 200) {
    colorIsDark = true;
  }

  return `rgb(${red}, ${green}, ${blue})`;
}

/* Return a random color among the CSS's 147 named one */
function pickNamedColor() {
  const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];

  const color = CSS_COLOR_NAMES[generateRandomNumber(CSS_COLOR_NAMES.length)];
  if (
    color.includes(`Dark`) ||
    color.includes(`Navy`) ||
    color.includes(`Indigo`) ||
    color.includes(`Midnight`)
  ) {
    colorIsDark = true;
  }
  return color;
}

/* Choose randomly between RGB color system and Named color system */
function pickColorSystem() {
  const randomNumb = generateRandomNumber(2); /* Either 0 or 1 */
  if (randomNumb === 0) {
    colorSystem = `NAMED COLOR`;
    return pickNamedColor();
  } else {
    colorSystem = `RGB`;
    return pickRgbColor();
  }
}

/* Check if the background color is considered 'dark' and adapt the center's page font color */
function checkColor() {
  if (colorIsDark) {
    containerText.style.color = `#252422`;
    containerText.style.backgroundColor = `#fffcf2`;
    button.classList.add(`container-button-dark`);
  } else {
    containerText.style.color = `#fffcf2`;
    containerText.style.backgroundColor = `#252422`;
    button.classList.remove(`container-button-dark`);
  }
}

/* Utilitary function to call all the major pieces of logic in the code */
function initChangeColor() {
  const color = pickColorSystem();
  checkColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}

function initIsDark() {
  colorIsDark = false;
}

initBackgroundColor(`#ccc5b9`);

button.addEventListener(`click`, () => {
  initChangeColor();
  initIsDark();
});
