let numberA = -1;
let numberB = -1;
let operator = -1;



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
        if (operator == "+"){
            return add(numberA, numberB)
        }
        else if (operator == "-"){
            return substract(numberA, numberB)
        }
        else if (operator == "*"){
            return multiply(numberA, numberB)
        }
        else {
            return divide(numberA, numberB) 
        }
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
        else if (element.textContent == "="){
            let result = operate(numberA, numberB, operator);
            display.textContent = result;
            numberA = -1;
            numberB = -1;
        }
        else {
            console.log(event);
            display.textContent += " " + element.textContent;//update the display ui

            if (element.textContent == "+" || element.textContent == "-"
                 || element.textContent == "/" || element.textContent == "*" ){
                operator = element.textContent;
            }
            if (numberA != -1){
                numberB = parseInt(element.textContent);
            }
            else{
                numberA = parseInt(element.textContent);
            }
        }
        
    })
});