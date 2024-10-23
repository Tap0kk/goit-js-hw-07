"use strict"

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output")

inputName.addEventListener("input", handleInput);

function handleInput(event) {
    if (event.target.value.trim() !== "") {
        outputName.textContent = event.target.value.trim()
    } else {
        outputName.textContent = "Anonymous"
    }
}