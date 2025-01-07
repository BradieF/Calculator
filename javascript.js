let num1 = null;
let num2 = null;
let operator = null;
let operatorSelected = false;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}


function divide(num1, num2) {
  return num2 === 0 ? "Cannot divide by 0" : num1 / num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
}


const numBtns = Array.from(document.querySelectorAll(".digit"));
const operatorBtns = Array.from(document.querySelectorAll(".operatorButtons button"));
const equalBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const display = document.querySelector(".display");

//Number buttons 
numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (operatorSelected) {
      display.textContent = button.textContent; //will start new number on display line
      operatorSelected = false;
    } else {
      display.textContent =
        //finds if 0 is in display and removes
        display.textContent === "0" ? button.textContent : display.textContent + button.textContent;
    }
  });
});

// Operator buttons
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 !== null && operator !== null) {
      // calculation without equal sign selected
      num2 = parseFloat(display.textContent);
      display.textContent = operate(num1, num2, operator);
      num1 = display.textContent;
      num2 = null;
    } else {
      num1 = parseFloat(display.textContent);
    }
    operator = button.textContent;
    operatorSelected = true;
  });
});

// Equals button
equalBtn.addEventListener("click", () => {
  if (num1 !== null && operator !== null) {
    num2 = parseFloat(display.textContent);
    const result = operate(num1, num2, operator);
    display.textContent = result;
    num1 = result; 
    num2 = null;
    operator = null; // Reset 
  } else {
    display.textContent = "Error: No operation";
  }
});

// Clear button logic
clearBtn.addEventListener("click", () => {
  display.textContent = "0";
  num1 = null;
  num2 = null;
  operator = null;
  operatorSelected = false;
});
