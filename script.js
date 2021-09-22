const input_display = document.querySelector('#input_display');

let uppercase = true;


function generateKeyboard() {
    const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const keyboard = document.querySelector('#keyboard');

    for (letter of alphabet) {
        const button = document.createElement('button');
        button.innerText = letter;
        button.addEventListener('click', displayLetter);
        button.setAttribute('class', 'letter');

        keyboard.appendChild(button);
    }

    createButton('Clear', 'clear_btn', clearInput, keyboard);

    createButton('Toggle text', 'toggle_case', toggleCase, keyboard);

}

function createButton(text, classBtn, clickMethod, parent) {
    const button = document.createElement('button');
    button.innerText = text;
    button.setAttribute('class', classBtn);
    button.addEventListener('click', clickMethod);
    parent.appendChild(button);
}

function displayLetter(e) {
    const target = e.target;

    input_display.value += target.innerText;
}

function toggleCase() {
    const buttons = document.querySelectorAll('.letter');

    for (let button of buttons) {
        if (uppercase) {
            button.innerText = button.innerText.toLowerCase();
        } else {
            button.innerText = button.innerText.toUpperCase();
        }
    }

    uppercase = uppercase ? false : true;
}

function clearInput() {
    input_display.value = '';
}


generateKeyboard();