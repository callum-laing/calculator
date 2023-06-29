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

window.addEventListener("keyup", (e) => {
  console.log(e.key);

  switch (e.key) {
    case "9":
      insertNumber(9);
      break;
    case "8":
      insertNumber(8);
      break;
    case "7":
      insertNumber(7);
      break;
    case "6":
      insertNumber(6);
      break;
    case "5":
      insertNumber(5);
      break;
    case "4":
      insertNumber(4);
      break;
    case "3":
      insertNumber(3);
      break;
    case "2":
      insertNumber(2);
      break;
    case "1":
      insertNumber(1);
      break;
    case "0":
      insertNumber(0);
      break;
    case ".":
      insertDot();
      break;
    case "=":
      insertEqual();
      break;
    case "Enter":
      insertEqual();
      break;
    case "Delete":
      clearCalculator();
      break;
    case "/":
      insertOperation("/");
      break;
    case "*":
      insertOperation("*");
      break;
    case "-":
      insertOperation("-");
      break;
    case "+":
      insertOperation("+");
      break;
  }
});

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
