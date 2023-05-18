const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

describe('API', () => {
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
