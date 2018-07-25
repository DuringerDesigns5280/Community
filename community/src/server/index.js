const express = require('express')
const app = express()
const server = require('http').Server(app)
var io = module.exports.io = require('socket.io')(server)

const PORT = 5000

const SocketManager = require('./SocketManager')

app.use( express.static(_dirname + '/../../build') )
io.on('connection', SocketManager)

server.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})