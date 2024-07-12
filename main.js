const form = document.getElementById('card__form');
const email = document.getElementById('email');
const container = document.querySelector('.card__container');
const popup = document.querySelector('.popup__msg');
const dismiss = document.querySelector('.dismiss');
const user_email = document.querySelector('.user_mail');


// DISMISS BUTTON
dismiss.addEventListener("click", () => {
    container.classList.add("complete");
    popup.classList.remove("complete");
    form.reset();
  });

//Event Listeners
form.addEventListener('submit',(e) =>{
    //prevent default loading when form is submitted
    e.preventDefault();

    // Get values of form fields and assign to new variables
    const emailValue = email.value;

    //conditional statements to check if form value is valid ..... If form value is not valid an error function is triggered but if it is valid a success function is triggered
    if (emailValue === '') {
        errorMessage(email, "Email is empty");
    } else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } else {
        successMessage(email);
    }

    // conditional statement to check if all values are valid so the bubbles can appear
    if (email.parentElement.classList.contains('success')) {
        container.classList.remove("complete");
        popup.classList.add('complete');
        user_email.textContent = emailValue;
    }
});

// function to be triggered if form valu is not valid. This function simply adds the error CSS class and removes that of success if it exists

function errorMessage(value, message) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('success')) {
        formControl.classList.remove('success');
        formControl.classList.add('error');
    } else {
        formControl.classList.add('error');
    }
    formControl.querySelector('.errorMessage').textContent = message;


}

// function to be triggered if form valu is valid. This function simply adds the success CSS class and removes that of error if it exists

function successMessage(value) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('error')) {
        formControl.classList.remove('error');
        formControl.classList.add('success');
    } else {
        formControl.classList.add('success');
    }
}

//This is a simple function to validate the email 

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}