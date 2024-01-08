const colors = [ "green", "red", "rgba(133, 122, 300)", "#f1f5f8"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = 2;

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
// btn.style.backgroundColor = colors[randomNumber];
});






// function RGBAToHexA(rgba, forceRemoveAlpha = false) {
//     return "#" + rgba.replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
//       .split(',') // splits them at ","
//       .filter((string, index) => !forceRemoveAlpha || index !== 3)
//       .map(string => parseFloat(string)) // Converts them to numbers
//       .map((number, index) => index === 3 ? Math.round(number * 255) : number) // Converts alpha to 255 number
//       .map(number => number.toString(16)) // Converts numbers to hex
//       .map(string => string.length === 1 ? "0" + string : string) // Adds 0 when length of one number is 1
//       .join("") // Puts the array to togehter to a string
//   }