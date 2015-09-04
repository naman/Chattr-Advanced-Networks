var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


function generate_random_name() {
        var a = ["small", "blue", "cute",
            "shrubbery", "finagle", "nincompoop", "shenanigan", "flagella", "bobbin", "egad", "quagga", "machete", "hootenany", "waddle", "filibuster", "poppycock", "pants", "snout", "kumquat", "floppy", "gallivant", "liripoop", "quean", "cockalorum", "ornery", "napkin", "euphonium "
        ];
        var b = [
            "bear",
            "dog",
            "banana", "tacos", "pear", "pistachio", "pudding", "sausage", "bagels", "salami", "rice", "polenta", "salt", "oil", "relish", "muesli", "crackers", "quiche", "cheese", "lollies", "jerky", "eggs", "garlic", "truffle", "cordial", "granola", "tomatoe", "sardines"
        ];
        var rA = Math.floor(Math.random() * a.length);
        var rB = Math.floor(Math.random() * b.length);
        return a[rA] + "-" + b[rB];
}


io.on('connection', function(socket){
  var username = generate_random_name();
  var conn = username + " is here! Say Hi! :)";
  // io.emit('connected', conn);
  socket.broadcast.emit('connected', conn,{ receivers: 'everyone but socket'}); //emits to everyone but socket

  socket.on('chat message', function(msg){
    io.emit('chat message', username+": "+msg);
  });
  socket.on('disconnect', function(){
  	var disconn = username + " went away! :(";
    io.emit('disconnected', disconn);
  });
});

var server = http.listen(port, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server Listening at http://%s:%s", host,port);
});