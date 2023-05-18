const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');

describe('Hooks.', function () {
  let spyConsole;

  beforeEach(() => {
    // Runs before each test in this block.
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Runs after each test in this block.
    spyConsole.restore();
  });

  it('Logs 120 with 100, 20.', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('Logs 20 with 10, 10.', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('Logs 0 with 0, 0.', () => {
  sendPaymentRequestToApi(0, 0);

  expect(spyConsole.calledOnceWithExactly('The total is: 0')).to.be.true;
  expect(spyConsole.calledOnce).to.be.true;
});

  it('Throws an error with negative values.', () => {
    expect(() => sendPaymentRequestToApi(-100, -20)).to.throw('Invalid input');
  });

  it('Throws an error with non-numeric values.', () => {
    expect(() => sendPaymentRequestToApi('abc', 'def')).to.throw('Invalid input');
  });

});
