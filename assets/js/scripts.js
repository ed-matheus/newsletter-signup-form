// Selecting Elements from the DOM
const emailInput = document.querySelector('form input');
const submitBtn = document.querySelector('button');
const dismissBtn = document.querySelector('.success_container button');
const warningMessage = document.querySelector('.label-container span');

const emailBinding = document.querySelector('.info_container p span');
const mainPage = document.querySelector('.main_container');
const successSignUp = document.querySelector('.main_success_container');

// Functions
const test = () => {
    const email = emailInput.value;
    // console.log(email);

    if(!hasAtSymbol(email)) {
        emailInput.setAttribute('style', 
            `
            border: 2px solid #ff9696;
            background-color: #fce1e1;
            `  
        )

        warningMessage.setAttribute('style', 'display: inline;')

    } else {
        mainPage.classList.toggle('hide')
        successSignUp.classList.toggle('hide')

        emailBinding.innerHTML = email
    }
};

const dismissButton = () => {
    mainPage.classList.toggle('hide')
    successSignUp.classList.toggle('hide')
}

// Verifying if the email is valid
function hasAtSymbol(email) {
    return email.includes('@')
}

// Adding Event Listener to the buttons
submitBtn.addEventListener("click", test);
dismissBtn.addEventListener("click", dismissButton);
