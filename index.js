
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('/freeRap/index.html');
});


var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){    
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});


http.listen(3000, function(){
    console.log('listening in on You @ *:3000');
});

