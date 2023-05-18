Utils = require('./utils');

Utils = require('./utils');
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const out = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${out}`);
}

module.exports = sendPaymentRequestToApi;
