/*
    Form Validation
*/

/*
    The following function displays and error if user inputs wrong data in input field.
*/
const DisplayError = (inputElement) => {

    const ErrorElement = document.querySelector(".error-message");
    ErrorElement.textContent = "Valid email required";

    inputElement.classList.add("show-error");
};

/*
    This function is the main validation logic. It starts by defining an array of allowed characters for an email, then it gets the email input element from the DOM.

    It then iterates through each character of the input email, checking if it's among the allowed characters. If a character is not in the allowed characters list, it increments a counter.

    Additionally, it counts the number of "@" and "." characters in the email.

    After the loop, it checks various conditions to determine if the email is valid:

    If the counter is not zero or if the number of "@" and "." characters is not exactly one each, it displays an error and returns false.
    If the position of the "." character is less than the position of the "@" character plus 2, or if the position of the "." character plus 2 is greater than or equal to the length of the email, it displays an error and returns false.
    Otherwise, it returns true, indicating that the email is valid.
*/
const Validate = () => {

    // Array of allowed characters for an email.
    const AllowedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '@', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // Getting Email input element from DOM.
    const Email = document.form.email;

    // Number of attherate characters, dots (periods).
    let numberOfAtTheRate = 0;
    let numberOfDots = 0;

    let counter = 0;

    for (character of Email.value) {

        for (let i = 0; i < AllowedCharacters.length; i++) {

            // If character of user input email is not present in allowed characters then increment counter by 1.
            if (AllowedCharacters.includes(character)) { }
            else {
                counter += 1;
            }

        }

        // If attherate is present in then increase its number by one.
        if (character === '@') {
            numberOfAtTheRate += 1;
        }

        // If period is present in email then increase its number by one.
        if (character === '.') {
            numberOfDots += 1;
        }

    }

    // If counter is nor zero and the number of attherate and dots is not one then display error and return false.
    if (counter !== 0 || numberOfAtTheRate !== 1 || numberOfDots !== 1) {
        DisplayError(Email);
        return false;
    }

    // Position of attherate and dot
    const AtPosition = Email.value.indexOf("@");
    const DotPosition = Email.value.lastIndexOf(".");

    // If Dot position is less then attherate position+2 or Dot position + 2 is greater then email length then display error and return false.
    if (DotPosition < AtPosition + 2 || DotPosition + 2 >= Email.value.length) {
        DisplayError(Email);
        return false;
    }

    // If everything is fine, then return true.
    return true;

};

/*
    ___________________________________________________________
*/

const Submit = (email) => {

    // Removing main element from screen.
    document.querySelector('main').remove();

    // Removing main style from DOM
    document.getElementById('main-style').remove();

    // Adding new style to DOM.
    const NewStyle = document.createElement('link');
    NewStyle.rel = 'stylesheet';
    NewStyle.href = './styles/success.css';
    document.head.appendChild(NewStyle);

    // Getting main element from DOM.
    const Body = document.querySelector('body');

    // Created a new Div element
    const Div = document.createElement('div');

    // Adding content dynamically to div element.
    Div.innerHTML = `
    <img src="./images/images/icon-success.svg" alt="Success Icon" class="success-image">
    <h1>Thanks for subscribing!</h1>
    <p>A confirmation emal has been sent to <strong class="email-txt">${email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
    <button class="dismiss" onclick="location.reload();">Dismiss message</button>
    `;

    // Adding is attribute to that div element.
    Div.id = 'success';

    // Adding div element inside body.
    document.body.appendChild(Div);
};

// Adding event listener to form element so that when form is submitted, form validation happens and success message will display.
const Form = document.querySelector('form[name="form"]');

Form.addEventListener("submit", (event) => {

    // Prevent the default form submission behavior.
    event.preventDefault();

    // If form validation returns true then display success message.
    if (Validate()) {
        const Email = document.querySelector('input[name="email"]').value;
        Submit(Email);
    }
})

/*
    ___________________________________________________________
*/