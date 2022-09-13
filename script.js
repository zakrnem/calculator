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
        
        if (userInput !== 'c' && userInput !== '⌫' && userInput !== '=') {
            result.textContent += userInput;
        }
        else if (userInput === 'c') {
            result.textContent = '';
        }
        else if (userInput === '⌫') {
            let screenResult = result.textContent;
            newInput = screenResult.substring(0, screenResult.length-1);
            result.textContent = newInput;
            
        }
       
    })


