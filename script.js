let screen = document.querySelector('.screen');
let result = document.createElement('div');
    result.className = 'result';

let operations = document.createElement('div');
    operations.textContent = '3 + 2';
    operations.className = 'operations';

    screen.appendChild(operations);
    screen.appendChild(result);

let buttons = document.querySelector('.buttons');
    buttons.addEventListener('mousedown', (e) => {
        e.preventDefault;
        userInput = e.target.textContent;
        result.textContent += userInput;
    })


