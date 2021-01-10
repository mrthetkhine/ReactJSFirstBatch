const net = require('net');
const readline = require('readline');

let server = net.createServer();
server.listen(9090,()=>{
    console.log('Sever start listening');
});
server.on('connection',socket=>{
    let now = new Date();
    socket.write(`Time ${now}\r\n`);
    socket.end();
});