const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber test suite', () => {
  describe('Add positive numbers', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(1, 3), 4);
    });
    it('should return 5', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('should return 5', () => {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
  describe('Add negative numbers', () => {
    it('should return -5', () => {
      assert.equal(calculateNumber(-1.6, -3), -5);
    });
    it('should return -6', () => {
      assert.equal(calculateNumber(-1.6, -3.6), -6);
    });
  });
  describe('Add positive and negative numbers', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber(-1, 3), 2);
    });
    it('should return 1', () => {
      assert.equal(calculateNumber(-1.6, 3), 1);
    });
  });
});
