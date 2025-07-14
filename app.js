formExpander = document.getElementById('formExpander');
inputForm = document.getElementById('inputForm');
inputForm.style.visibility = 'hidden';
switchButton = document.getElementById('switch');


const toggleVisibility = () => {
    if (inputForm.style.visibility === 'hidden') {
        inputForm.style.visibility = 'visible';
        formExpander.innerHTML = 'X';
    } else {
        inputForm.style.visibility = 'hidden';
        formExpander.innerHTML = '+';
    }
};

const toggelDarkMode = () => {
    element = document.body;
    element.classList.toggle('dark-mode');
};


formExpander.addEventListener('click', (e) => {
    toggleVisibility();
});

switchButton.addEventListener('click', (e) => {
    toggelDarkMode();
});