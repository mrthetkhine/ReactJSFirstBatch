const http = require('http');
const url = require('url');
const path = require('path');

const fs = require('fs');

let server = new http.Server();
server.listen(9090);

let serverRoot = './test/hello';

function getFileName(requestUrl)
{
    let endPoint = url.parse(requestUrl).pathname;
    console.log(`EndPoint ${endPoint}`);

    let fileName = endPoint.substring(1);//Split /
    fileName = fileName.replace(/\.\.\//g, "");
    fileName = path.resolve(serverRoot, fileName);

    console.log(`Filename ${fileName}`);
    return fileName;
}
server.on('request',(request,response)=>{
    let fileName = getFileName(request.url);
    let stream = fs.createReadStream(fileName);
    
    stream.once('readable',()=>{
        response.writeHead(200);
        stream.pipe(response);
        
    });
    stream.on('error',(error)=>{
        console.log(`Stream error ${error}`);
        response.setHeader("Content-Type",'html');
        response.writeHead(404);
        response.end();
    });

   
});
server.on('error',(err)=>{
    console.log(`Http server error ${err}`);
})