/* eslint-disable indent */
function calculate (num1, num2, operation) {
    return operation(num1, num2)
}
function add (num1, num2) {
    return num1 + num2
}
function subtract (num1, num2) {
    return num1 - num2
}
function mutiply (num1, num2) {
    return num1 * num2
}
function divide (num1, num2) {
    return num1 / num2
}
console.log(calculate(10, 15, mutiply));
