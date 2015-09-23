var express = require('express');
var request = require('supertest');

describe('req', function(){
  describe('.route', function(){
    it('should be the executed route', function(done){
      var app = express();

      app.get('/', function(req, res,next){
        req.route.path.should.equal('/');
	next();
      });
      request(app)
      .get('/')
      .expect(200, done);
    });
  });
});
