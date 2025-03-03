let numberA = 0;
let numberB = 0;
let operator = 0;
let displayNumbers = 0;


function add (a, b){
    return a + b;
}
function substract (a, b){
    return a -b;
}
function multiply (a, b){
    return a * b;
}
function divide (a, b){
    return a / b;
}
function operate (numberA, numberB, operator){
    return operator(numberA, numberB);
}

const display = document.querySelector(".display");
console.log(display.textContent);
display.textContent = "";

const digitButtons = document.querySelectorAll(".container button");
console.log(digitButtons)
digitButtons.forEach(element => {
    element.addEventListener("click", (event) => {
        if (element.textContent == "c"){
            display.textContent = "";
        }
        else {
            console.log(event);
            display.textContent += " " + element.textContent;
        }
        
    })
});