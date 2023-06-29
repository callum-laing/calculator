let firstOperand = null;
let currentOperation = "";
let secondOperand = 0;
let result = null;

function insertNumber(num) {
  secondOperand = Number.parseFloat(secondOperand + "" + num);

  render();
}

function insertDot() {
  secondOperand = secondOperand + ".";
  render();
}

function insertOperation(operation) {
  if (firstOperand == null) {
    firstOperand = secondOperand;
    secondOperand = 0;
  } else if (result !== null) {
    firstOperand = result;
    secondOperand = 0;
    result = null;
  }
  currentOperation = operation;
  render();
}

let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}

function insertEqual() {
  result = operate(currentOperation, firstOperand, secondOperand);
  render();
}

function clearCalculator() {
  firstOperand = null;
  currentOperation = "";
  secondOperand = 0;
  result = null;
  render();
}

function render() {
  if (firstOperand !== null) {
    document.querySelector("#result").innerHTML =
      firstOperand + " " + currentOperation;
  } else {
    document.querySelector("#result").innerHTML = "";
  }
  document.querySelector("#input").innerHTML = secondOperand;

  if (result !== null) {
    document.querySelector("#result").innerHTML =
      firstOperand + " " + currentOperation + " " + secondOperand + " " + "=";
    document.querySelector("#input").innerHTML = result;
  }
}

render();

/* 
Testing:

insertNumber(7);
insertNumber(9);
insertDot();
insertNumber(5);
insertOperation("+");
insertOperation("-");
insertNumber(6);
insertNumber(9);
insertEqual();
insertOperation("+");
insertNumber(2);
insertEqual();
clearCalculator();
 */
