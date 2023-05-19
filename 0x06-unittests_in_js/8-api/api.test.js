const { expect } = require('chai');
const request = require('supertest');

describe('Express app test suite', () => {
  describe('/', () => {
    it('should return the message Welcome to the payment system', (done) => {
      request('http://localhost:7865')
        .get('/')
        .expect(200)
        .expect('body', 'Welcome to the payment system')
        .end(done);
    });
  });
});
