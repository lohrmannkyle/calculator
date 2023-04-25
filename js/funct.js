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
function genButtons () {
    const container = document.querySelector('.buttons');
    for (let i = 3; i <= 1; i--){
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 3; j >= 1; j--) {
            const button = document.createElement('button');
            button.classList.add('button');
            button.textContent = j*i;
            row.appendChild(button);
        }
        container.appendChild(row);
    }
}

genButtons()