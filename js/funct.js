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

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
buttons.forEach((button) => button.addEventListener('click', () => {
    display.textContent += button.textContent;
}))