// Selecting Elementos from the DOM
const emailInput = document.querySelector('form input')
const submitBtn = document.querySelector('button')

// Functions
const test = () => {
    console.log('teste')
}

// Button Event
const signUp = () => {
    submitBtn.addEventListener('click', test())
}
