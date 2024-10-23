"use strict"

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", handleClick)

function handleClick() {
  body.style.backgroundColor = `${getRandomHexColor()}`
  color.textContent = `${getRandomHexColor()}`
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
