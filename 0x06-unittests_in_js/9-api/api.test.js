const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('Express app test suite', () => {
  it('should return home page', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  describe('Cart page', () => {
    it('should return payment methods for a valid cart ID', (done) => {
      request(app)
        .get('/cart/123')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal('Payment methods for cart 123');
          done();
        });
    });

    it('should return 400 status code for invalid cart ID', (done) => {
      request(app)
        .get('/cart/abc')
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal('Invalid cart ID');
          done();
        });
    });
  });
});
