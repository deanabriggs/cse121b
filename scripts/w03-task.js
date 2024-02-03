/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    return document.querySelector('#sum').value =  add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    return document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    document.querySelector('#product').value = multiply(
    Number(document.querySelector("#factor1").value), 
    Number(document.querySelector("#factor2").value));
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    document.querySelector('#quotient').value = divide( // calls fumction to assign value to document element
    Number(document.querySelector("#dividend").value),  // para 1 - reads doc value
    Number(document.querySelector("#divisor").value));  // para 2 - reads doc value
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function calcTotal(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.querySelector('#member').checked){
        subtotal = subtotal *.8;  // calc 20% discount if is member
    };
    document.querySelector('#total').innerHTML = `$ ${subtotal.toFixed(2)}`;
}
document.querySelector('#getTotal').addEventListener('click', calcTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter((number) => number % 2 > 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(num => num * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = (numbersArray.map(num => num * 2)).reduce((sum, number) => sum + number);
