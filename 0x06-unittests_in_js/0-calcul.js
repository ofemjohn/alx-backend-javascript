module.exports = function calculateNumber(a, b = 0) {
  const num1 = Number(a);
  const num2 = Number(b);
  
  if (Number.isNaN(num1) || Number.isNaN(num2))
    throw TypeError('Parameters must be numbers');
  
    return Math.round(num1) + Math.round(num2);
  };
