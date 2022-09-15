let screen = document.querySelector('.screen');
let result = document.createElement('div');
result.className = 'result';

let operations = document.createElement('div');
operations.className = 'operations';

screen.appendChild(operations);
screen.appendChild(result);

let clickCount = 0;
let inputArray = [];
let screenResult;
let firstOperand = '';
let secondOperand = '';
let operationSymbol = '';

let buttons = document.querySelector('.buttons');
buttons.addEventListener('mousedown', (e) => {
    e.preventDefault;
    userInput = e.target.textContent;
    clickCount += 1;
    
    if (operationSymbol === '' && !isNaN(parseInt(userInput)) 
    || userInput === '.' || userInput === '-') {
        firstOperand += userInput;
        console.log('Fist operand: ' + firstOperand);
    }

    else if (operationSymbol === '' && (userInput === '+' || userInput === '-' 
    || userInput === 'x' || userInput === '÷')) {
        operationSymbol += userInput;
        console.log('Operation symbol: ' + operationSymbol);
    }

    else if (operationSymbol !== ''&& !isNaN(parseInt(userInput)) 
    || userInput === '.' || userInput === '-') {
        secondOperand += userInput;
        console.log('Second operand: ' + secondOperand);
    }

    else if (userInput === 'c' ) {
        result.textContent = '';
        // inputArray = [];
        // clickCount = 0;
        // hace falta activar estas funciones nuevamente
    }
    else if (userInput === '⌫') {
        screenResult = result.textContent;
        newInput = screenResult.substring(0, screenResult.length - 1);
        result.textContent = newInput;
        // inputArray = inputArray.slice(0, inputArray.length-1)
    }
    /* 
    if (clickCount === 4) {
        inputArray = [];
        inputArray[0] = calculation;
        clickCount = 1;
    }
    // console.log(inputArray) */
})

let calculation;

function calculate(inputArray) {
    firstOperand = parseInt(firstOperand);
    secondOperand = parseInt(secondOperand);
    
    switch(true) {
        case(operationSymbol === '+'):
            calculation = firstOperand + secondOperand;
            break;
        case(operationSymbol === '-'):
            calculation = firstOperand - secondOperand;
            break;
        case(operationSymbol === 'x'):
            calculation = firstOperand * secondOperand;
            break;
        case(operationSymbol === '÷'):
            calculation = firstOperand / secondOperand;
            break;
    }
    screenResult = result.textContent;
    operations.textContent = screenResult;
    result.textContent = calculation;
}

let equals = buttons.querySelector('#equals');
    equals.addEventListener('mousedown', () => calculate(inputArray))

/*
We need to add some rules for the input:
- Multiple digit number support.
    When the user enters several numbers they're saved to the 'first operand' variable.
    When a symbol key the first operand will be closed.
    The symbol will be stored and the second operand will start to be stored in the 'second operand' variable.


- Multiple continuos operations support.
- Reduce the number of decimals of a division.
- First digit symbol support:
The only symbol that will be accepted as the first digit is "-".
    Otherwise the input won't be accepted
- Decimal numbers support: very similar to the latter.
*/
