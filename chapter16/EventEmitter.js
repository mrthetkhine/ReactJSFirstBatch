const EventEmitter = require('events');
const net = require('net');
let server = net.Server();
console.log("server instanceof EventEmitter ", (server instanceof EventEmitter));
server.on('connection',socket=>{
    console.log('Connection');
    socket.send('HelloWorld ','utf-8');
});