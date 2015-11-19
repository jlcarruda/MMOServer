var socket = require('socket.io-client')('http://localhost:8000');

socket.on('connect', function() {
	console.log('Poker connected!');
	socket.emit('burp');
});


socket.on('hey', function() {
	console.log('Hey o/');
	socket.emit('listen', {message: 'Message Arrived! Test complete!'})
});