const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe("Tests advanced calculateNumber function", () => {
  describe("sum function", () => {
    it("Returns 6", () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe("sub function", () => {
    it("Returns -4", () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe("div function", () => {
    it("Returns 0.2", () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
});
