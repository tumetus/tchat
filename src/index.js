'user strict';

import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const io = socketio(httpServer);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('user connected thru socket');

	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
		io.emit('chat message', msg);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

httpServer.listen(port, () => {
	console.log('listening *:' + port);
});