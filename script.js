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
    evaluateInput = String(e.target);
    if (!evaluateInput.includes('Div')) {
        userInput = e.target.textContent;
    }
    

    if (firstOperand === '' && userInput === '-') {
        firstOperand += userInput;
        result.textContent += userInput;
    }

    if (operationSymbol === '' && !isNaN(parseInt(userInput)) ) {
        firstOperand += userInput;
        result.textContent += userInput;
    }

    if (userInput === '.' && !result.textContent.includes('.')
    && operationSymbol === '') {
        firstOperand += userInput;
        result.textContent += userInput;
    }

    if (firstOperand !== '-' && firstOperand !== '' && operationSymbol === ''
    && (userInput === '-' || userInput === '+'
    || userInput === 'x' || userInput === '÷')) {
        operationSymbol = userInput;
        result.textContent += userInput;
    }

    if (operationSymbol !== '' && firstOperand !== '' && firstOperand !== '.'
    && !isNaN(parseInt(userInput)) ) {
        secondOperand += userInput;
        result.textContent += userInput;
    }

    if (userInput === '.' && !secondOperand.includes('.')
    && operationSymbol !== '' && firstOperand !== '' && firstOperand !== '.') {
        secondOperand += userInput;
        result.textContent += userInput;
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
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);
    
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
    calculation = +parseFloat(calculation.toFixed(7));
    screenResult = result.textContent;
    operations.textContent = screenResult;
    result.textContent = calculation;
    firstOperand = calculation;
    secondOperand = '';
    operationSymbol = '';
}

let equals = buttons.querySelector('#equals');
    equals.addEventListener('mousedown', () => calculate())

let sum = buttons.querySelector('#summation');
    sum.addEventListener('mousedown', () => {
        if (firstOperand !== '' && operationSymbol !== '' && secondOperand !== '') {
            calculate();
        }
    })

let sub = buttons.querySelector('#subtraction');
    sub.addEventListener('mousedown', () => {
        if (firstOperand !== '' && operationSymbol !== '' && secondOperand !== '') {
            calculate();
        }
    })

let mult = buttons.querySelector('#multiply');
    mult.addEventListener('mousedown', () => {
        if (firstOperand !== '' && operationSymbol !== '' && secondOperand !== '') {
            calculate();
        }
    })

let dvs = buttons.querySelector('#divide');
    dvs.addEventListener('mousedown', () => {
        if (firstOperand !== '' && operationSymbol !== '' && secondOperand !== '') {
            calculate();
        }
    })

let keyNumberInput;
document.addEventListener('keydown', (e) => {
    keyNumberInput = parseInt(e.code.replace( /^\D+/g, ''));
    switch(true) {
        case(!isNaN(keyNumberInput) && !e.code.includes('F')):
            console.log(keyNumberInput);
            break;
        case(e.code === 'NumpadAdd'):
            console.log('Summation');
            break;
        case(e.code === 'NumpadSubtract'):
            console.log('Subtraction');
            break;
        case(e.code === 'NumpadMultiply'):
            console.log('Multiplication');
            break;
        case(e.code === 'NumpadDivide'):
            console.log('Division');
            break;
        case(e.code === 'NumpadDecimal'):
            console.log('Decimal');
            break;
        case(e.code === 'NumpadEnter' || e.code === 'Enter'):
            console.log('Equals');
            break;
        case(e.code === 'Backspace'):
            console.log('Backspace');
            break;
    }
})
/*
BUGS:
- Add keyboard support:
    + It would be better to separate the current rules function from the buttons event listener.
    + Creating a new function with the user input as a parameter.
    + This way that function could be called from the mousedown event listener and also from a
    keyboard listener.
*/
