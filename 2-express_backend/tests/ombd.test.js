const { expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../webserver').webApp();

console.log("ENV is " + process.env.NODE_ENV);

describe('GET / test', () => {
  test('should return message:"success"', (done) => {
    request(app)
      .get('/')
      .send()
      .end((err, res) => {
        if (err) { done(err) };
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('success');
        done();
      })
  })
})

// values to be tested later
// imdb_id = tt4853102
