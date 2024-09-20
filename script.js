function counter(displayId) {
  let display = document.getElementById(displayId);
  let num = 0;
  let incrementBy = 1;

  const increment = () => {
    num += incrementBy;
    updateDisplay();
  };

  const decrement = () => {
    num -= incrementBy;
    updateDisplay();
  };

  const updateDisplay = () => {
    display.textContent = num;
  };

  const reset = () => {
    num = 0;
    updateDisplay();
  };

  const newNumber = input => {
    incrementBy = parseInt(input.value);
  };

  return {
    increment,
    decrement,
    reset,
    newNumber,
  };
}
