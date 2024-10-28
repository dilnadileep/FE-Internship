const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');
let currentInput = '';
let operator = null;
let previousInput = '';
let history = '';

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => handleInput(button));
});

document.addEventListener('keydown', handleKeyboard);

function handleInput(button) {
  const type = button.getAttribute('data-type');
  const value = button.textContent;

  switch (type) {
    case 'number':
      currentInput += value;
      updateDisplay();
      break;
    case 'operator':
      if (currentInput) {
        performCalculation();
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
      break;
    case 'equals':
      performCalculation();
      operator = null;
      previousInput = '';
      break;
    case 'clear':
      clearDisplay();
      break;
    case 'backspace':
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
      break;
    case 'function':
      handleFunction(value);
      break;
  }
}

function handleFunction(func) {
  if (!currentInput) return;
  let num = parseFloat(currentInput);
  switch (func) {
    case 'x²':
      currentInput = (num ** 2).toString();
      break;
    case '√':
      currentInput = Math.sqrt(num).toString();
      break;
  }
  updateDisplay();
}

function performCalculation() {
  if (!previousInput || !currentInput) return;

  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr ? prev / curr : 'Error';
      break;
    case '%':
      result = (prev * curr) / 100;
      break;
  }
  history += `${previousInput} ${operator} ${currentInput} = ${result}\n`;
  historyDisplay.textContent = history;
  currentInput = result.toString();
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  history = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput || '0';
}

function handleKeyboard(e) {
  const key = e.key;
  if (!isNaN(key)) handleInput({ getAttribute: () => 'number', textContent: key });
  if (['+', '-', '*', '/'].includes(key)) handleInput({ getAttribute: () => 'operator', textContent: key });
  if (key === 'Enter') handleInput({ getAttribute: () => 'equals' });
  if (key === 'Backspace') handleInput({ getAttribute: () => 'backspace' });
  if (key === 'Escape') handleInput({ getAttribute: () => 'clear' });
}
