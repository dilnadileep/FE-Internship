const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');
let currentInput = '';
let operator = null;
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
      currentInput = (currentInput || '') + value; // Ensure currentInput is at least an empty string
      updateDisplay();
      break;
    case 'operator':
      // Check if the last character is a valid number before adding operator
      if (currentInput && !isNaN(currentInput.slice(-1))) { 
        currentInput += ` ${value} `;
        updateDisplay();
      }
      break;
    case 'equals':
      performCalculation();
      break;
    case 'clear':
      clearDisplay();
      break;
    case 'backspace':
      currentInput = currentInput?.slice(0, -1).trim() || ''; // Safe backspace handling
      updateDisplay();
      break;
    case 'function':
      handleFunction(value);
      break;
  }
}

function handleFunction(func) {
  // Ensure currentInput is valid and a number before applying functions
  if (!currentInput || isNaN(parseFloat(currentInput))) return;
  let num = parseFloat(currentInput);

  switch (func) {
    case 'x²':
      currentInput = `${num}^2`;
      currentInput = (num ** 2).toString(); // Calculate square
      break;
    case '√':
      currentInput = `√(${num})`; // Show square root notation
      currentInput = Math.sqrt(num)?.toString() || "Error"; // Handle square root safely
      break;
    case 'x³':
      currentInput = `${num}^3`;
      currentInput = (num ** 3).toString(); // Calculate cube
      break;
    case '³√':
      currentInput = `³√(${num})`;
      currentInput = Math.cbrt(num)?.toString() || "Error"; // Calculate cube root
      break;
    case '%':
      currentInput = `${num}%`;
      currentInput = (num / 100).toString(); // Calculate percentage
      break;
  }
  updateDisplay();
}

function performCalculation() {
  try {
    // Check if currentInput is not empty or null before evaluating
    if (!currentInput || currentInput.trim() === "") {
      display.value = "0";
      return;
    }

    // If array-based calculations are used, ensure it's not null
    const result = eval(currentInput?.replace('^2', '**2').replace('^3', '**3') || "0"); // Fallback to "0" if null
    history += `${currentInput} = ${result}\n`;
    historyDisplay.textContent = history;
    currentInput = result.toString();
    updateDisplay();
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';    // Resets current input to an empty string.
  history = '';         // Clears the calculation history.
  updateDisplay();      // Calls updateDisplay to reflect the cleared input on the screen.
}

// Updates the display to show the current input or defaults to '0' if input is empty.
function updateDisplay() {
  display.value = currentInput || '0'; // Sets display to currentInput, or '0' if currentInput is empty.
}

function handleKeyboard(e) {
  const key = e.key; 

  if (!isNaN(key)) handleInput({ getAttribute: () => 'number', textContent: key });         // If the key is a number (0-9), handle it as a number input.
  if (['+', '-', '*', '/'].includes(key)) handleInput({ getAttribute: () => 'operator', textContent: key });        // If the key is an operator (+, -, *, or /), handle it as an operator input.
  if (key === 'Enter') handleInput({ getAttribute: () => 'equals' });               // If the key is Enter, handle it as the equals (calculation) command.
  if (key === 'Backspace') handleInput({ getAttribute: () => 'backspace' });          // If the key is Backspace, handle it as a backspace command to delete the last character.
  if (key === 'Escape') handleInput({ getAttribute: () => 'clear' });                 // If the key is Escape, handle it as a clear command to reset the calculator.

}
