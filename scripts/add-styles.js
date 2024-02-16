/*
    Adding stylesheet according to viewport width.
*/

// This function loads the required stylesheet
const LoadStyleSheet = () => {

    // Get link element from head element
    const LinkElement = document.querySelector('#main-style');

    // If viewport width is less than or equal to 520 then load styles for mobile else load default styles
    if (window.innerWidth <= 520) {
        try {
            LinkElement.href = "./styles/mobile-styles.css";
        }catch {
            return;
        }
    }
    else {
        try {
            LinkElement.href = "./styles/default-styles.css";
        }
        catch {
            return;
        }
    }
}

// Adding event listeners for page load and screen resize
window.addEventListener("load", LoadStyleSheet);
window.addEventListener("resize", LoadStyleSheet);

/*
    ___________________________________________________________
*/