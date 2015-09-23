var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.get('/', function (req, res) {
	res.send('Hello World!');
});
var server = http.createServer(app);
app.listen(port, function(){
  console.log('App listing at ', process.env.IP + ":" + process.env.PORT);
});
