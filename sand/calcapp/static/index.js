let expression = '';

function appendNumber(num) {
  expression += num;
  updateDisplay();
}

function appendOperator(op) {
  expression += op;
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}

function updateDisplay() {
  document.getElementById('display').value = expression;
}