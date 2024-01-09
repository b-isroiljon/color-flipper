const getRand = () => Math.floor(Math.random() * 255);
const getRGBA = () => `rgb(${getRand()}, ${getRand()}, ${getRand()})`;

const formattingButtons = document.querySelector(".btn-group");
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color-name");
const paintSection = document.querySelector(".main-section");

let selectedFormat = document
  .querySelector(".active-link")
  .textContent.toLocaleLowerCase();
let color = colorName.textContent;

function changeColor() {
  const newColor = getRGBA();
  color = newColor;
  colorName.textContent = selectedFormat === "hex" ? RGBAToHexA(color) : color;
  paintSection.setAttribute("style", `background-color: ${color}`);
}

function changeNameFormat(e) {
  selectedFormat = e.target.textContent.toLowerCase();
  const buttons = formattingButtons.children;
  for (let btn of buttons) {
    if (btn.classList.contains("active-link"))
      btn.classList.remove("active-link");
    else btn.classList.add("active-link");
  }
  colorName.textContent =
    selectedFormat === "simple" ? color : RGBAToHexA(color);
}

btn.addEventListener("click", changeColor);
formattingButtons.addEventListener("click", changeNameFormat);

function RGBAToHexA(rgba, forceRemoveAlpha = false) {
  return (
    "#" +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, "") // Get's rgba / rgb string values
      .split(",") // splits them at ","
      .filter((string, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string)) // Converts them to numbers
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
      .map((number) => number.toString(16)) // Converts numbers to hex
      .map((string) => (string.length === 1 ? "0" + string : string)) // Adds 0 when length of one number is 1
      .join("")
  ); // Puts the array to togehter to a string
}
