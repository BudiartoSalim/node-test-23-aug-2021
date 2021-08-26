if (process.env.NODE_ENV !== 'production') { require('dotenv').config() };
const { expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../webserver').webApp();

describe('Endpoint test', () => {
  describe('GET /search', () => {
    test('should return message:"success"', (done) => {
      request(app)
        .get('/search')
        .query({ title: "Batman", page: 2 })
        .end((err, res) => {
          if (err) { done(err) };
          expect(res.status).toBe(200);
          expect(res.body.data).toHaveProperty('Search');
          done();
        })
    })
  })

  describe('GET /detail', () => {
    test('should get the correct movie', (done) => {
      const imdbID = 'tt4853102';
      request(app)
        .get('/detail' + imdbID)
        .send()
        .end((err, res) => {
          if (err) { done(err) };
          expect(res.status).toBe(200);
          expect(res.body.Title).toBe('Batman: The Killing Joke');
          expect(res.body.year).toBe('2016');
          expect(res.body.imdbID).toBe(imdbID);
          done();
        })
    })
  })
})

// values to be tested later
// imdb_id = tt4853102
