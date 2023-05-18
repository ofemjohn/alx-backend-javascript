import Utils from './utils';

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const output = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${output}`);

  return output;
}

export default sendPaymentRequestToApi;
