const http = require('http');

var server = http.createServer((request,response)=>{
    response.writeHead(200,'Content-Type: text/html');
    response.end('<h1>Hello World</h1>\r\n');
});

server.listen(9090);