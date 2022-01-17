const { expect } = require('chai');
const session = require('supertest');
const server = require('../index');

const agent = session(server);

describe('Routes', () => {
  
    describe('GET Ruta Principal /v1', () => {
    it('should get 200 in /v1', () => agent.get('/v1').expect(200));
    it('responds with 404 in /v2', () => { agent.get('/v2').expect(404)});
  });

    describe( '', () => {
    it('should get 200 with city Paris in /current/:city', () => agent.get('/v1/current/paris').expect(200));
    it('responds with wrong city 404 in /current/sdfsdf', () =>  agent.get('/v1/current/sdfsdf').expect(404));
  });
   
  describe('GET forecast/:city ', () => {
    it('should get 200 with city Paris in /forecast/:city', () => agent.get('/v1/forecast/paris').expect(200));
    it('responds error with wrong city in /forecast/sdfsdf', () => agent.get('/v1/forecast/sdfsdf').expect(200));
  });
    
    
});

module.exports = server;
