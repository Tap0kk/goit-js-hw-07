"use strict"

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]")
const box = document.querySelector("#boxes")

create.addEventListener("click", createMarkup);

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    return
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
