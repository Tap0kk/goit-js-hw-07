"use strict"

const submitForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault()
    const elem = event.target.elements
    if (elem.email.value === "" || elem.password.value === "") {
        return alert('All form fields must be filled in')
    }
    const loginInfo = {
        email: elem.email.value.trim(),
        password: elem.password.value.trim()
    }
    console.log(loginInfo);
    event.target.reset()
}

submitForm.addEventListener("submit", handleSubmit);