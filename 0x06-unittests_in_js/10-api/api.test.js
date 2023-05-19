const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Welcome to the payment system')
        .end(done);
    });
  });

  describe('GET /cart/:id', () => {
    // ... existing tests for the /cart/:id endpoint
  });

  describe('GET /available_payments', () => {
    it('Returns available payment methods', (done) => {
      request(app)
        .get('/available_payments')
        .expect(200)
        .expect({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        })
        .end(done);
    });
  });

  describe('POST /login', () => {
    it('Returns welcome message with the provided username', (done) => {
      const userName = 'JohnDoe';

      request(app)
        .post('/login')
        .send({ userName })
        .expect(200)
        .expect(`Welcome ${userName}`)
        .end(done);
    });
  });
});
