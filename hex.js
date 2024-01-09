const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click', function() {
 const randomColor = changeColor();

 document.body.style.backgroundColor = randomColor;
 color.textContent = randomColor;
  console.log('Цвет: ' + randomColor);
});

function changeColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }