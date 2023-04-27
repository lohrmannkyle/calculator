function multiply (num1, num2){
    return num1 * num2;
}
function divide (num1, num2){
    return num1 / num2;
}
function add (num1, num2){
    return Number(num1) + Number(num2);
}
function subtract (num1, num2){
    return num1 - num2;
}

function hideFunctionButtons(){
    const functions = document.querySelectorAll('#function');
    functions.forEach((functionButt) => {
        functionButt.classList.toggle('hide');
        hidden = !hidden;
    })
}

let hidden = false;
let operator = ''
let operand = ''
function addButtonListeners () {

    /* Even listeners for adding numbers to display */
    const display = document.querySelector('.display');
    display.textContent = '0';
    const characters = document.querySelectorAll('#character');
    characters.forEach((character) => character.addEventListener('click', () => {
        if (display.textContent === '0' && character.textContent === '0'){
            return;
        }
        if (display.textContent === '0'){
            display.textContent = '';
        }
        display.textContent += character.textContent;
    }))

    /* Event listener for controlling '.' */
    const period = document.querySelector('#dot');
    period.addEventListener('click', () => {
            period.classList.add('hide');
            display.textContent += '.';
            if (period.classList.contains('hide')){
                period.classList.remove('hide');
            }
    })

    /* Event listener for | + | - | / | x | */
    const functions = document.querySelectorAll('#function');
    functions.forEach(functionButt => functionButt.addEventListener('click', () => {

        if (display.textContent.length > 0){
            operand = functionButt.textContent;
            operator = display.textContent;
            display.textContent = '0';
            hideFunctionButtons();
            }
        }
    ))

    /* Event listener for clearing display */
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        display.textContent = '0';
        operator = '';
        operand = '';
        functions.forEach(functionButt => functionButt.classList.remove('hide'));
        period.classList.remove('hide');
        if (hidden) hideFunctionButtons;
    })

    /* Event listener for del button */
    const del = document.querySelector('#delete');
    del.addEventListener('click', () => {
        if (display.textContent.slice(-1) === '.'){
            period.classList.remove('hide');
        }
        if (display.textContent.length > 1) {
            display.textContent = display.textContent.slice(0, -1);
        }
        else {
            display.textContent = 0;
        }
    })

    function reset(){
        operand = '';
        operator = '';
    }

    /* Event listener for solve function */
    const solve = document.querySelector('#solve');
    solve.addEventListener('click', () => {
        if (operator === '') {
            return;
        }
        hideFunctionButtons();
        switch (operand){
            case '+':
                display.textContent = add(operator, display.textContent);
                reset();
                break;

            case '-':
                display.textContent = subtract(operator, display.textContent);
                reset();
                break;

            case '*':
                display.textContent = multiply(operator, display.textContent);
                reset();
                break;

            case '/':
                display.textContent = divide(operator, display.textContent);
                reset();
                break;
        }
    })
}
addButtonListeners();