function multiply (num1, num2){
    return num1 * num2;
}
function divide (num1, num2){
    return num1 / num2;
}
function add (num1, num2){
    return num1 + num2;
}
function subtract (num1, num2){
    return num1 - num2;
}

function hideFunctionButtons(){
    const functions = document.querySelectorAll('#function');
    functions.forEach((functionButt) => {
        functionButt.classList.toggle('hide');
    })
}


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
    })

    /* Event listener for | + | - | / | x | */
    const functions = document.querySelectorAll('#function');
    functions.forEach(functionButt => functionButt.addEventListener('click', () => {

        if (display.textContent.length > 0){
            operand = functionButt.textContent;
            operator = display.textContent;
            display.textContent = '';
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
    })

    /* Event listener for del button */
    const del = document.querySelector('#delete');
    del.addEventListener('click', () => {
        if (display.textContent.length > 1) {
            if (display.textContent.slice(-1) === '.'){
                period.classList.remove('hide');
            }
            display.textContent = display.textContent.slice(0, -1);
        }
        else {
            display.textContent = 0;
        }
    })
}
addButtonListeners();