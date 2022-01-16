/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../index.js');

const agent = session(app);

describe('Routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

    describe('/', () => {
    it('should get 200', () => agent.get('/').expect(200));
  });
});




