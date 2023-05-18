const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber function:", function() {
  
    describe("Add one float & one integer:", function() {
        it('Returns 5.', function() {
            assert.strictEqual(calculateNumber(1, 3.7), 5);
        });
    });

    describe("Add one float & one int reversed:", function () {
        it('Returns 5.', function () {
            assert.strictEqual(calculateNumber(3.7, 1), 5);
        });
    });

    describe("Calculates two floats:", function() {
        it('Returns 5.', function() {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        });
    });

    describe("Add two negative integers:", function() {
        it('Returns -6.', function() {
            assert.strictEqual(calculateNumber(-2, -4), -6);
        });
    });

    describe("Add positive and negative float:", function() {
        it('Returns 2.', function() {
            assert.strictEqual(calculateNumber(3.5, -1.5), 2);
        });
    });

    describe("Add two large integers:", function() {
        it('Returns 200000000.', function() {
            assert.strictEqual(calculateNumber(100000000, 100000000), 200000000);
        });
    });

    describe("Add zero and a float:", function() {
        it('Returns 4.5.', function() {
            assert.strictEqual(calculateNumber(0, 4.5), 4.5);
        });
    });

    describe("add two integers:", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber(1, 3), 4);
        });
    });

    describe("Add two negative floats:", function() {
        it('Returns -3.', function() {
            assert.strictEqual(calculateNumber(-1.5, -1.5), -3);
        });
    });

    describe("Add one float & one integer (round down):", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber(1, 3.3), 4);
        });
    });

});

