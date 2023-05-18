function calculateNumber(type, a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);

  switch (type) {
    case 'SUBTRACT':
      return num1 - num2;
    case 'DIVIDE':
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    default:
      return num1 + num2;
  }
}

module.exports = calculateNumber;
