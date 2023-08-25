let num1 = "";
let num2 = "";
let displayValue = "";
let operator = "";
let prevOperator = "";
let result = "";
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.special');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const topText = document.querySelector('.top-text')
const bottomText = document.querySelector('.bottom-text');


clearBtn.addEventListener('click', ()=>{
    displayValue = "";
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    topText.textContent = "";
    bottomText.textContent = "";
})

deleteBtn.addEventListener('click', () => {
    console.log(displayValue);
    displayValue = displayValue.slice(0, -1);
    console.log(displayValue);
    bottomText.textContent = displayValue;
})


numberBtn.forEach((button) =>{
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        bottomText.textContent = displayValue;
    })
})



operatorBtn.forEach((button) =>{
    button.addEventListener('click', ()=>{
    if(topText.textContent === ""){
        num1 = displayValue;
        displayValue = "";
        pendingOperator = button.textContent;
        topText.textContent = `${num1} ${button.textContent}`;
    }
    else{
        num2 = displayValue;
        console.log(`num2 : ${num2}`);
        console.log(button.textContent);
        console.log(pendingOperator);
        if(num2 != ""){
            displayValue = "";
            bottomText.textContent = "";
            result = operate(+num1, +num2, pendingOperator);
            topText.textContent = `${result.toString()} ${button.textContent}`
            num1 = result;
            if((button.textContent !== "=")){
                num1 = result;
                num2 = displayValue;
                pendingOperator = button.textContent;

            }
            }
        }
    })
})



function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    if(operator == "+"){
        return add(num1, num2);
    }
    else if(operator == "-"){
        return subtract(num1, num2);
    }
    else if(operator == "x"){
        return multiply(num1, num2);
    }
    else if(operator == "÷"){
        return divide(num1, num2);
    }

}
