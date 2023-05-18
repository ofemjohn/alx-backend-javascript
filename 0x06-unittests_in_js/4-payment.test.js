import sinon from 'sinon';
import { expect } from 'chai';

import { sendPaymentRequestToApi } from './3-payment';
import { calculateNumber } from './utils';

describe('Stubs', () => {
  it('Ensures math is the same', () => {
    // Stub the `calculateNumber` function to always return 10.
    const stubUtils = sinon.stub(calculateNumber).returns(10);

    // Spy on the `console.log` function.
    const spyConsole = sinon.spy(console.log);

    // Call the `sendPaymentRequestToApi` function.
    sendPaymentRequestToApi(100, 20);

    // Assert that the `calculateNumber` function was called once with the arguments `SUM` and `100, 20`.
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that the `console.log` function was called once with the message `The total is: 10`.
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original `calculateNumber` function.
    stubUtils.restore();

    // Restore the original `console.log` function.
    spyConsole.restore();
  });
});
