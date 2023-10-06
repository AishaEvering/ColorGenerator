let css = document.querySelector('h3');
let color1 = document.getElementsByName('color1')[0];
let color2 = document.getElementsByName('color2')[0];
let body = document.getElementById('gradient');
let copyBtn = document.getElementById('copy');
let tooltip = document.getElementById('copyTooltip');

changeBackgroundColor();
showCurrentColor();

copyBtn.addEventListener('click', copy);
copyBtn.addEventListener('mouseout', mouseOut);
color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);


function changeBackgroundColor(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    showCurrentColor();
}

function copy(){
    navigator.clipboard.writeText(css.textContent);

    tooltip.innerHTML = "Copied!";
}

function mouseOut(){
    tooltip.innerHTML="copy to clipboard";
}

function showCurrentColor(){
    css.textContent = body.style.background +  ";";
}


