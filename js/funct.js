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
    for (let i = 0; i < 3; i++){
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 3; j++) {
            const button = document.createElement('div');
            button.classList.add('button-outline');
            row.appendChild(button);
        }
        container.appendChild(row);
    }
}