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

const numbers = document.querySelectorAll('#number');
const display = document.querySelector('.display');
numbers.forEach((number) => button.addEventListener('click', () => {
    display.textContent += number.textContent;
}))