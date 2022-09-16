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

/*
BUGS:
- Add keyboard support.
*/
