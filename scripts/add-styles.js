/*
    Adding stylesheet according to viewport width.
*/

// This function loads the required stylesheet
const LoadStyleSheet = () => {

    // Get link element from head element
    const LinkElement = document.querySelector('#main-style');

    // If viewport width is less than or equal to 520 then load styles for mobile else load default styles
    if (window.innerWidth <= 520) {
        LinkElement.href = "./styles/mobile-styles.css";
    }
    else {
        LinkElement.href = "./styles/default-styles.css";
    }
}

// Adding event listeners for page load and screen resize
window.addEventListener("load", LoadStyleSheet);
window.addEventListener("resize", LoadStyleSheet);

/*
    ___________________________________________________________
*/