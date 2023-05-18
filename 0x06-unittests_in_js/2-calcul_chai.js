function calculateNumber(type, a, b) {
  const intA = Math.round(a);
  const intB = Math.round(b);

  if (type === 'SUBTRACT') {
    return intA - intB;
  }

  if (type === 'DIVIDE') {
    if (intB === 0) {
      return 'Error';
    }
    return intA / intB;
  }

  return intA + intB;
}

module.exports = calculateNumber;

