const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const opButtons = document.querySelectorAll('.op-btn');
const resultDisplay = document.getElementById('result');
const equalsBtn = document.getElementById('equals-btn');
const resetBtn = document.getElementById('reset-btn');

let selectedOperator = null;

opButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    opButtons.forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedOperator = btn.dataset.op;
  });
});

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return b === 0 ? undefined : a / b;
    default:
      return undefined;
  }
}

equalsBtn.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    resultDisplay.textContent = 'Enter both numbers';
    resultDisplay.classList.add('error');
    return;
  }

  if (!selectedOperator) {
    resultDisplay.textContent = 'Choose an operator';
    resultDisplay.classList.add('error');
    return;
  }

  const result = calculate(num1, num2, selectedOperator);

  if (result === undefined) {
    resultDisplay.textContent = 'Cannot divide by zero';
    resultDisplay.classList.add('error');
    return;
  }

  resultDisplay.classList.remove('error');
  resultDisplay.textContent = `Result: ${result}`;
});

resetBtn.addEventListener('click', () => {
  num1Input.value = '';
  num2Input.value = '';
  selectedOperator = null;
  opButtons.forEach((b) => b.classList.remove('selected'));
  resultDisplay.textContent = 'Result: —';
  resultDisplay.classList.remove('error');
});
