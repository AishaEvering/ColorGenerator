(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{}]},{},[1]);
