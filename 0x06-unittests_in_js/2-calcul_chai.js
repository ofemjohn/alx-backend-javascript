function calculateNumber(type, a, b) {
  // Validate the type argument.
  if (!['SUM', 'SUBTRACT', 'DIVIDE'].includes(type)) {
    throw new Error('Invalid operation type.');
  }

  // Convert the arguments to numbers.
  const numOne = Number(a);
  const numTwo = Number(b);

  // Perform the operation.
  switch (type) {
    case 'SUM':
      return numOne + numTwo;
    case 'SUBTRACT':
      return numOne - numTwo;
    case 'DIVIDE':
      if (numTwo === 0) {
        return 'Error';
      }
      return numOne / numTwo;
    default:
      throw new Error('Invalid operation type.');
  }
}

module.exports = calculateNumber;

