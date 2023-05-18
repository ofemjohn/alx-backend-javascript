const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spy', function () {
  it('Ensures math is the same.', () => {
    const Utils = sinon.spy(Utils, 'calculateNumber');
    const Console = sinon.spy(console, 'log');

    const api = sendPaymentRequestToApi(100, 20);
    const consolespy = sinon.spy(console, 'log');

    expect(consolespy.calledWithExactly('The total is: 10'));
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(api);

    Utils.restore();
    Console.restore();
  });
});
