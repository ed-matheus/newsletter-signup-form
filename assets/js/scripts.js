// Selecting Elements from the DOM
const emailInput = document.querySelector('form input');
const submitBtn = document.querySelector('button');
const warningMessage = document.querySelector('.label-container span');

const paragraph = document.querySelector('.form_container p');
const h1 = document.querySelector('.form_container h1');
const list = document.querySelector('.form_container ul');
const newsletterImage = document.querySelector('.image_container');
const form = document.querySelector('form');

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
        emailInput.setAttribute('style', 
            `
            border: 1px solid #d6d8e5;
            background-color: ;
            `  
        )

        warningMessage.setAttribute('style', 'display: none;')

        
    }
};

// Verifying if the email is valid
function hasAtSymbol(email) {
    return email.includes('@')
}

// Adding Event Listener to the button
submitBtn.addEventListener("click", test);
