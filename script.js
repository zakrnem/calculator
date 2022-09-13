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
        newInput = screenResult.substring(0, screenResult.length - 1);
        result.textContent = newInput;
    }

})

// we need a function that listens to first the first input and saves it as an integer
//      (it would have to reject operation symbols)
//          It's important to have the capability to receive symbols as the first digit (¿is it?)
// we could use an array to organize the user input


// if our only objective were to sum 2 + 2:
// we would save the first input in a variable as an integer
// we would  save the second input and use it later for an if condition
// we would save the third input in a variable as an integer
// we would add an event listener to the equal symbol that would execute an function depending on the second input

