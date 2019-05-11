const css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
const body = document.querySelector('#gradient');
const btn = document.querySelector('.btn');


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function onPageLoad(){
    color1.value = '#ff0000';
    color2.value = '#ffff00';
    var textColor = getComputedStyle(body).backgroundImage;
    css.textContent = textColor;
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
   + color1.value + ", " 
   + color2.value + ")";

   css.textContent = body.style.background + ";";
}

function buttonClick() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}



 onPageLoad();

// console.log(getComputedStyle(body).backgroundImage);

btn.addEventListener('click', buttonClick);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
