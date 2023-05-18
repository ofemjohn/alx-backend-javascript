function calculateNumber(type, a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (isNaN(num1) || isNaN(num2)) {
    throw new TypeError();
  }

  switch (type) {
    case "SUM":
      return Math.round(num1) + Math.round(num2);
    case "SUBTRACT":
      return Math.round(num1) - Math.round(num2);
    case "DIVIDE":
      if (num2 === 0) {
        return "Error";
      }
      return Math.round(num1) / Math.round(num2);
    default:
      throw new TypeError();
  }
}

module.exports = calculateNumber;
