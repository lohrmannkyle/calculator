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
        functionButt.classList.add('hidden');
    })
}
let operator = ''
let operand = ''
function addButtonListeners () {
    const display = document.querySelector('.display');
    const characters = document.querySelectorAll('#character');
    characters.forEach((character) => character.addEventListener('click', () => {
        display.textContent += character.textContent;
    }))

    const functions = document.querySelectorAll('#function');
    functions.forEach(functionButt => functionButt.addEventListener('click', () => {
        if (display.textContent.length > 0){
            operand = functionButt.textContent;
            oprtator = display.textContent;
            display.textContent = '';
            }
        }
    ))
}