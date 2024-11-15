'use strict';

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', markup);
destroyBtn.addEventListener('click', destroyBoxes);

function markup() {
  if (input.value < 1 || input.value > 100) {
    return alert('Too many boxes');
  }
  destroyBoxes();
  const boxesArray = [];
  for (let i = 0; i < input.value; i += 1) {
    boxesArray.push(createBoxes(i));
  }
  input.value = '';
  boxes.append(...boxesArray);
}

function createBoxes(amount) {
  const box = document.createElement('div');
  box.style.width = `${30 + amount * 10}px`;
  box.style.height = `${30 + amount * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
