// const { expect } = require('chai');
// const session = require('supertest');
// const server = require('../index');

// const agent = session(server);


/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest');
const server = require('../index');

const agent = session(server);

describe('Routes', () => {
  
    describe('GET Ruta Principal /v1', () => {
    it('should get 200 in /v1', () => agent.get('/v1').expect(200));
    it('responds with 404 in /v2', () => { agent.get('/v2').expect(404)});
  });

    describe('GET current/:city ', () => {
    it('should get JSON in /current/paris', () => agent.get('/v1/current/paris').expect(response.headers["Content-Type"]).toMatch(/json/));
    it('responds with 404 in /v2', () => { agent.get('/v2').expect(404)});
  });
});

module.exports = server;
