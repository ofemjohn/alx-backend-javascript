function calculateNumber(type, a, b) {
  const intA = Math.round(a);
  const intB = Math.round(b);

  switch (type) {
    case "SUBTRACT":
      return intA - intB;
    case "DIVIDE":
      if (intB === 0) {
        return "Error";
      }
      return intA / intB;
    default:
      return intA + intB;
  }
}

module.exports = calculateNumber;
