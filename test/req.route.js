var express = require('express');
var request = require('supertest');
request = request("127.0.0.1" + ":" + 5000);
describe('Get /', function(){
	it('respond to request', function(done){
		request.get('/').expect(200, done);
	});
	it('respond with content', function(done){
		request.get('/').expect('Hello World!', done);
	});
});
