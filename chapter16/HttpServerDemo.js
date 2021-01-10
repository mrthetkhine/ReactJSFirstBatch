const http = require('http');
const url = require('url');
const path = require('path');

const fs = require('fs');

let server = new http.Server();
server.listen(9090);

server.on('request',(request,response)=>{
    let endPoint = url.parse(request.url).pathname;
    console.log(`EndPoint ${endPoint}`);

    response.writeHead(200);
    response.write(`<h1>Hello From Node<h1>`);
    response.write(`<h3>Path ${endPoint}<h3>`);
    response.end();
});
