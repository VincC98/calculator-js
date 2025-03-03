let numberA = "";
let numberB = "";
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
            console.log(numberA);
            return add(numberA, numberB)
        }
        else if (operator == "-"){
            return substract(numberA, numberB)
        }
        else if (operator == "*"){
            console.log(numberA)
            console.log(numberB)
            console.log(operator)
            return multiply(numberA, numberB)
        }
        else {
            return divide(numberA, numberB) 
        }
}
function resetVariable(){
    numberA = "";
    numberB = "";
    operator = -1;
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
            resetVariable()
        }
        else if (element.textContent == "="){
            let result = operate(parseInt(numberA), parseInt(numberB), operator);
            display.textContent = result;
            resetVariable()
        }
        else {
            console.log(event);
            display.textContent += element.textContent;//update the display ui

            if (element.textContent == "+" || element.textContent == "-"
                 || element.textContent == "/" || element.textContent == "*" ){
                operator = element.textContent;
            }
            else if (operator != -1){
                numberB += element.textContent;
                console.log(numberB)
            }
            else{
                numberA += element.textContent;
            }
        }
        
    })
});