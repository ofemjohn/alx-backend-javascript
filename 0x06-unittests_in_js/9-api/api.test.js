const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  const baseURL = 'http://localhost:7865';

  describe('GET /', () => {
    it('Returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
      request.get(baseURL, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    const validCartIds = ['12', '1', '123'];
    const invalidCartIds = ['a12', 'a12b', '12b', 'hello', ''];

    validCartIds.forEach((cartId) => {
      it(`Responds with 200 and id ${cartId} in msg`, (done) => {
        request.get(`${baseURL}/cart/${cartId}`, (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal(`Payment methods for cart ${cartId}`);
          done();
        });
      });
    });

    invalidCartIds.forEach((cartId) => {
      it(`Responds with 404 for invalid cart ID: ${cartId}`, (done) => {
        request.get(`${baseURL}/cart/${cartId}`, (error, response, body) => {
          expect(response.statusCode).to.equal(404);
          done();
        });
      });
    });
  });
});
