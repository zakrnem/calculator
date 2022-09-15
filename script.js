let screen = document.querySelector('.screen');
let result = document.createElement('div');
result.className = 'result';

let operations = document.createElement('div');
operations.className = 'operations';

screen.appendChild(operations);
screen.appendChild(result);

let screenResult;
let firstOperand = '';
let secondOperand = '';
let operationSymbol = '';

let buttons = document.querySelector('.buttons');
buttons.addEventListener('mousedown', (e) => {
    e.preventDefault;
    userInput = e.target.textContent;
    
    if (userInput !== 'c' && userInput !== '⌫' && userInput !== '=') {
        result.textContent += userInput;
    }

    if (firstOperand === '' && userInput === '-') {
        firstOperand += userInput;
    }

    if (operationSymbol === '' && (!isNaN(parseInt(userInput)) 
    || userInput === '.')) {
        firstOperand += userInput;
        console.log(firstOperand)
    }

    if (firstOperand !== '-' && operationSymbol === '' && (userInput === '-' || userInput === '+' 
    || userInput === 'x' || userInput === '÷')) {
        operationSymbol = userInput;
    }

    if (operationSymbol !== '' && !isNaN(parseInt(userInput)) 
    || userInput === '.') {
        secondOperand += userInput;
    }

    if (userInput === 'c' ) {
        result.textContent = '';
        operations.textContent = '';
        firstOperand = '';
        secondOperand = '';
        operationSymbol = '';
    }

    if (userInput === '⌫') {
        screenResult = result.textContent;
        newInput = screenResult.substring(0, screenResult.length - 1);
        result.textContent = newInput;
        
        if(operationSymbol === '') {
            firstOperand = firstOperand.substring(0, firstOperand.length - 1);
        }

        if(operationSymbol !== '' && secondOperand === '') {
            operationSymbol = '';
        }

        if(secondOperand !== '') {
            secondOperand = secondOperand.substring(0, secondOperand.length - 1);
        }
    }
})

let calculation;

function calculate() {
    firstOperand = parseInt(firstOperand);
    secondOperand = parseInt(secondOperand);
    console.log(firstOperand + ' ' + operationSymbol + ' ' + secondOperand)
    
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
    firstOperand = calculation;
    secondOperand = '';
    operationSymbol = '';
}

let equals = buttons.querySelector('#equals');
    equals.addEventListener('mousedown', () => calculate())

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
