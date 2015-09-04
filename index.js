var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var conn = " is here! Say Hi! :)";
  // io.emit('connected', conn);
  socket.broadcast.emit('connected', conn,{ receivers: 'everyone but socket'}); //emits to everyone but socket

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
  	var disconn = " went away! :(" 
    io.emit('disconnected', disconn);
  });
});

var server = http.listen(8000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server Listening at http://%s:%s", host,port);
});